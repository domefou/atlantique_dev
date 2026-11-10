import express from "express";
import Stripe from "stripe";
import sequelize from "../config/sequelize.js";

import { factureMail } from "../services/factureMail.js";

const router = express.Router();

const stripe = new Stripe(
    process.env.STRIPE_SECRET_KEY
);

// ======================================================
// WEBHOOK STRIPE
// ======================================================

router.post("/webhook", async (req, res) => {

    console.log("🔥 WEBHOOK RECU");

    const sig = req.headers["stripe-signature"];

    let event;

    try {

        event = stripe.webhooks.constructEvent(
            req.body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
        );

    } catch (err) {

        console.error(
            "⚠️ Erreur signature webhook :",
            err.message
        );

        return res.status(400).send(
            `Webhook Error: ${err.message}`
        );
    }

    try {

        if (event.type !== "checkout.session.completed") {
            return res.json({
                received: true
            });
        }

        const session = event.data.object;

        const contratId =
            session.metadata.contrat_id;

        const contractNumber =
            session.metadata.contractNumber;

        const etapePaiement =
            session.metadata.etape_paiement;

        const montant =
            Number(session.amount_total / 100);

        console.log(
            `✅ Paiement confirmé : ${contractNumber}`
        );

        // ==========================================
        // Sécurité
        // ==========================================

        if (
            etapePaiement !== "acompte" &&
            etapePaiement !== "solde"
        ) {
            throw new Error(
                "Étape de paiement invalide."
            );
        }

        // ==========================================
        // Client
        // ==========================================

        const [clientResult] =
            await sequelize.query(
                `
                SELECT clients.email
                FROM clients
                INNER JOIN contrats
                    ON contrats.client_id = clients.id
                WHERE contrats.id = :contratId
                `,
                {
                    replacements: {
                        contratId
                    }
                }
            );

        if (!clientResult.length) {
            throw new Error(
                "Client introuvable."
            );
        }

        const emailClient =
            clientResult[0].email;

        // ==========================================
        // Historique Stripe
        // ==========================================

        await sequelize.query(
            `
            INSERT INTO stripe_payments
            (
                contrat_id,
                stripe_session_id,
                stripe_payment_intent,
                etape_paiement,
                montant,
                devise,
                statut,
                date_paiement,
                raw_json
            )
            VALUES
            (
                :contratId,
                :sessionId,
                :paymentIntent,
                :etapePaiement,
                :montant,
                :devise,
                :statut,
                NOW(),
                :rawJson
            )
            `,
            {
                replacements: {
                    contratId,
                    sessionId: session.id,
                    paymentIntent:
                        session.payment_intent,
                    etapePaiement,
                    montant,
                    devise:
                        session.currency,
                    statut:
                        session.payment_status,
                    rawJson:
                        JSON.stringify(session)
                }
            }
        );

        console.log(
            "✔ Paiement Stripe enregistré"
        );

        // ==========================================
        // Facture
        // ==========================================

        const annee =
            new Date().getFullYear();

        const numeroFacture =
            `FAC-${annee}-${String(contratId).padStart(6, "0")}-${etapePaiement}`;

        await sequelize.query(
            `
            INSERT INTO factures
            (
                contrat_id,
                numero_facture,
                etape_paiement,
                montant
            )
            VALUES
            (
                :contratId,
                :numeroFacture,
                :etapePaiement,
                :montant
            )
            `,
            {
                replacements: {
                    contratId,
                    numeroFacture,
                    etapePaiement,
                    montant
                }
            }
        );

        console.log(
            `📄 Facture créée : ${numeroFacture}`
        );

        // ==========================================
        // Mise à jour contrat
        // ==========================================

        if (etapePaiement === "acompte") {

            await sequelize.query(
                `
                UPDATE contrats
                SET
                    etape_paiement = 'solde',
                    statut = 'en_cours'
                WHERE id = :contratId
                `,
                {
                    replacements: {
                        contratId
                    }
                }
            );

            console.log(
                `🔄 Contrat ${contractNumber} passé à l'étape SOLDE`
            );

        } else {

            await sequelize.query(
                `
                UPDATE contrats
                SET
                    statut = 'paye',
                    valide = TRUE
                WHERE id = :contratId
                `,
                {
                    replacements: {
                        contratId
                    }
                }
            );

            console.log(
                `✅ Contrat ${contractNumber} entièrement payé`
            );
        }

        // ==========================================
        // Email facture
        // ==========================================

        await factureMail({
            emailClient,
            numeroFacture,
            montant,
            etapePaiement
        });

        console.log(
            `📧 Facture envoyée à ${emailClient}`
        );

        return res.json({
            received: true
        });

    } catch (err) {

        console.error(
            "❌ Erreur webhook :",
            err
        );

        return res.status(500).json({
            error: err.message
        });
    }
});

/**
 * Test local :
 * stripe listen --events checkout.session.completed --forward-to localhost:5000/stripe/webhook
 */

export default router;
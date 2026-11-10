import express from "express";
import Stripe from "stripe";

import sequelize from "../config/sequelize.js";

const router = express.Router();

const stripe = new Stripe(
    process.env.STRIPE_SECRET_KEY
);

router.post("/checkout", async (req, res) => {

    const { contractNumber } = req.body;

    try {

        const [contrat] = await sequelize.query(
            `
            SELECT
                contrats.id,
                contrats.numero_contrat,
                contrats.client_id,
                contrats.tarif,
                contrats.etape_paiement,
                clients.email
            FROM contrats
            JOIN clients
                ON clients.id = contrats.client_id
            WHERE contrats.numero_contrat = :contractNumber
            `,
            {
                replacements: {
                    contractNumber
                }
            }
        );

        if (!contrat.length) {
            return res.status(404).json({
                error: "Contrat introuvable"
            });
        }

        const currentContrat = contrat[0];

        let montant = 0;

        if (
            currentContrat.etape_paiement === "acompte"
        ) {

            montant =
                currentContrat.tarif * 0.30;

        } else {

            montant =
                currentContrat.tarif * 0.70;
        }

        const session =
            await stripe.checkout.sessions.create({

                mode: "payment",

                customer_email:
                    currentContrat.email,

                line_items: [
                    {
                        price_data: {
                            currency: "eur",

                            product_data: {
                                name:
                                    currentContrat
                                        .etape_paiement === "acompte"
                                        ? `Acompte contrat ${contractNumber}`
                                        : `Solde contrat ${contractNumber}`
                            },

                            unit_amount:
                                Math.round(
                                    montant * 100
                                )
                        },

                        quantity: 1
                    }
                ],

                metadata: {
                    contractNumber,

                    contrat_id:
                        currentContrat.id,

                    etape_paiement:
                        currentContrat.etape_paiement
                },

                success_url:
                    `${process.env.FRONTEND_URL}/paiement/succes`,

                cancel_url:
                    `${process.env.FRONTEND_URL}/paiement/cancel`
            });

        return res.json({
            url: session.url
        });

    } catch (err) {

        console.error(
            "Erreur checkout Stripe :",
            err
        );

        return res.status(500).json({
            error: err.message
        });
    }
});

export default router;
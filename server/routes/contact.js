import express from "express";
const router = express.Router();

// Import d'un module CommonJS dans un fichier ESM
import * as contactMailCJS from "../mailer/contact.cjs";
const { contactMail } = contactMailCJS;


router.post("/", async (req, res) => {
    console.log("Route /contact appelée");
    console.log("Body reçu :", req.body);

    // Honeypot
    if (req.body.contact_reference) {
        return res.status(400).json({
            message: "Spam détecté",
        });
    }

    // Temps minimum
    const duration = Date.now() - Number(req.body.formStart);

    if (duration < 3000) {
        return res.status(400).json({
            message: "Envoi trop rapide",
        });
    }

    const { nom, objet, mail, message } = req.body;

    try {
        await contactMail({ nom, objet, mail, message });

        res.status(200).json({
            success: true,
            message: "Message envoyé avec succès"
        });
    } catch (err) {
        console.error("Erreur d’envoi :", err);

        res.status(500).json({
            success: false,
            message: "Erreur lors de l’envoi du message"
        });
    }
});

export default router;

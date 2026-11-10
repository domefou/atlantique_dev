import express from "express";
const router = express.Router();

// Import d'un module CommonJS dans un fichier ESM
import * as devisMailCJS from "../mailer/devis.cjs";
const { devisMail } = devisMailCJS;

router.post("/", async (req, res) => {

    if (req.body.website_url_8472?.trim()) {
        return res.status(403).json({
            success: false,
            message: "Bot détecté"
        });
    }

    const openedAt = Number(req.body.opened_at);

    if (!openedAt || Date.now() - openedAt < 5000) {
        return res.status(403).json({
            success: false,
            message: "Formulaire soumis trop rapidement"
        });
    }

    try {
        await devisMail(req.body);

        return res.json({
            success: true
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.response?.body?.message || "Erreur Brevo"
        });
    }
});

export default router;

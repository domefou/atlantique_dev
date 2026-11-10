const dotenv = require("dotenv");
dotenv.config();

const SibApiV3Sdk = require("sib-api-v3-sdk");

async function contactMail({ nom, objet, mail, message }) {
    const client = SibApiV3Sdk.ApiClient.instance;
    const apiKey = client.authentications["api-key"];
    apiKey.apiKey = process.env.BREVO_API_KEY;

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    const email = {
        sender: { email: process.env.BREVO_USER },
        to: [{ email: process.env.BREVO_USER }],
        replyTo: { email: mail },
        subject: objet,
        textContent: `
Nom : ${nom}
Email : ${mail}
Objet : ${objet}

Message :
${message}
        `
    };

    try {
        const result = await apiInstance.sendTransacEmail(email);
        console.log("Mail envoyé via API Brevo :", result.messageId || result);
        return result;
    } catch (err) {
        console.error("Erreur API Brevo :", err);
        throw err;
    }
}

module.exports = { contactMail };

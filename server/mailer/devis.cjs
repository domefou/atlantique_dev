const dotenv = require("dotenv");
dotenv.config();

const SibApiV3Sdk = require("sib-api-v3-sdk");

async function devisMail({
    emailClient,
    acceptCGU,
    acceptContact,
    architecture,
    wordpress,
    database,
    options,
    total
}) {
    const client = SibApiV3Sdk.ApiClient.instance;
    const apiKey = client.authentications["api-key"];

    apiKey.apiKey = process.env.BREVO_API_KEY;

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    console.log("ARCHITECTURE:", architecture);
    console.log("OPTIONS:", options);

    const architectureText = architecture?.label || "Non renseignée";

    const optionsText =
        Array.isArray(options) && options.length
            ? options
                .map(option => `${option.label} (${option.price} €)`)
                .join(", ")
            : "Aucune";

    const email = {
        sender: {
            email: process.env.BREVO_USER
        },
        to: [
            {
                email: process.env.BREVO_USER
            }
        ],
        replyTo: {
            email: emailClient
        },
        subject: "Nouvelle demande de devis",

        textContent: `
Nouvelle demande de devis

Email client : ${emailClient}

Accepte les CGU : ${acceptCGU}

Accepte d'être contacté : ${acceptContact}

Architecture :
${architectureText}

WordPress/Lovable :
${wordpress}

Base de données :
${database}

Options :
${optionsText}

Montant estimé :
${total} €
`


    };

    try {
        const result = await apiInstance.sendTransacEmail(email);

        console.log(
            "Devis envoyé via Brevo :",
            result.messageId || result
        );

        return result;
    } catch (err) {
        console.error("Erreur API Brevo :", err);
        throw err;
    }
}

module.exports = { devisMail };
import SibApiV3Sdk from "sib-api-v3-sdk";

export async function factureMail({
    emailClient,
    numeroFacture,
    montant
}) {

    const client = SibApiV3Sdk.ApiClient.instance;

    client.authentications["api-key"].apiKey =
        process.env.BREVO_API_KEY;

    const apiInstance =
        new SibApiV3Sdk.TransactionalEmailsApi();

    await apiInstance.sendTransacEmail({
        sender: {
            email: process.env.BREVO_USER
        },

        to: [
            {
                email: emailClient
            }
        ],

        subject: `Facture ${numeroFacture}`,

        textContent: `
Bonjour,

Votre paiement a bien été reçu.

Référence : ${numeroFacture}

Montant réglé : ${montant} €

Merci pour votre confiance.

Atlantique Dev
`
    });
}
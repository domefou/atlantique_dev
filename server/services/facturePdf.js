// services/facturePdf.js

import PDFDocument from "pdfkit";
import fs from "fs";

export async function generateFacture({
    numeroFacture,
    email,
    montant
}) {

    const filePath =
        `factures/${numeroFacture}.pdf`;

    const doc = new PDFDocument();

    doc.pipe(
        fs.createWriteStream(filePath)
    );

    doc.fontSize(20);
    doc.text("Atlantique Dev");

    doc.moveDown();

    doc.text(`Facture : ${numeroFacture}`);
    doc.text(`Client : ${email}`);
    doc.text(`Montant : ${montant} €`);

    doc.text(
        `Date : ${new Date().toLocaleDateString("fr-FR")}`
    );

    doc.text("FACTURE ACQUITTEE");

    doc.end();

    return filePath;
}
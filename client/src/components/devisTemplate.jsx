import "../styles/components/devisTemplate.scss";

export default function DevisTemplate({ emailClient, architecture, database, wordpress, maintenance, options, total }) {

    const today = new Date().toLocaleDateString("fr-FR");

    return (
        <div className="devis_template">

            <section className="devis_header">
                <div className="left">

                    <img src="/assets/logo/new_logo_black.png" alt="Logo" className="logo" />
                    <h2>Atlantique dev / Freelance Concepteur Web</h2>
                    <p><strong>SIRET :</strong> 100 839 190 00012</p>
                    <p><strong>Email :</strong> contact@atlantiquedev.fr</p>
                    <p><strong>Téléphone :</strong> 06.95.95.05.08</p>
                    <p><strong>Site web :</strong> https://www.atlantiquedev.fr</p>
                </div>

                <div className="right">
                    <p>Date du devis :</p>
                    <strong>{today}</strong>
                </div>
            </section>

            <section className="client_block">
                <h3>Client</h3>
                <p>Email : {emailClient || "Non renseigné"}</p>
            </section>

            <section className="details_block">
                <h3>Détails du projet</h3>
                <p>Architecture : {architecture?.label || "—"}</p>
                <p>Base de données : {
                    database === "yes"
                        ? "Avec"
                        : database === "no"
                            ? "Sans"
                            : "Non sélectionné"
                }</p>
                <p>CMS:{
                    wordpress === "yes"
                        ? "WordPress (-200€)"
                        : wordpress === "no"
                            ? "Développement artisanal"
                            : "Non sélectionné"
                }</p>
                <p>Maintenance : {maintenance?.label || "—"}</p>

                <p>Hebergement HOSTINGER inclu dans la livraison (99€/ an) </p>
                <p>Nom de Domaine inclu dans la livraison (120€/ an) </p>

                <h4>Options :</h4>
                {options.length === 0 ? (
                    <p>Aucune option sélectionnée</p>
                ) : (
                    <ul>
                        {options.map(opt => (
                            <li key={opt.id}>{opt.label}</li>
                        ))}
                    </ul>
                )}
            </section>

            <section className="total_block">
                <h3>Montant estimé</h3>
                <p className="total">{total} €</p>
            </section>

            <footer className="devis_footer">
                <small>
                    Ce devis est une estimation brute. Le montant final dépend de l’étude détaillée du projet.
                </small>
            </footer>

        </div>
    );
}

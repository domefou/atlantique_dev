import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import DevisTemplate from "../components/devisTemplate.jsx";

import "../styles/components/configurateur.scss";

export default function Configurateur() {

    const [architecture, setArchitecture] = useState(null);
    const [database, setDatabase] = useState(null);
    const [wordpress, setWordpress] = useState(null);
    const [options, setOptions] = useState([]);
    const [maintenance, setMaintenance] = useState(null);


    const architectures = [
        { id: "landing_page", label: "Landing Page", price: 900, icon: "/assets/icons/landing.png" },
        { id: "vitrine", label: "Site Vitrine", price: 1500, icon: "/assets/icons/vitrine.png" },
        { id: "blog", label: "Blog", price: 1400, icon: "/assets/icons/blog.png" },
        { id: "catalogue", label: "Catalogue", price: 1800, icon: "/assets/icons/catalogue.png" },
        { id: "shop", label: "E-commerce", price: 4500, icon: "/assets/icons/shop.png" },
        { id: "modification", label: "Modification", price: 60, icon: "/assets/icons/modification.png" }, // €/h
        { id: "refonte", label: "Refonte Total", price: 1500, icon: "/assets/icons/refonte.png" },
    ];


    const optionList = [
        { id: "page", label: "Pages supplémentaire (+1)", price: 100 },
        { id: "image", label: "Image HD sous licence (+1)", price: 45 },
        { id: "image-pack", label: "Pack 10 images sous licence HD", price: 250 },
        { id: "text", label: "Rédaction des contenus (max. 5 pages)", price: 400 },
        { id: "animation", label: "Animations avancées", price: 200 },
        { id: "formulaire", label: "Formulaire avancé", price: 200 },
        { id: "produit", label: "Catalogue de Produit avancé", price: 400 },
        { id: "seo", label: "Optimisation SEO avancée", price: 150 },
        { id: "lighthouse", label: "Optimisation vit. / perf.", price: 150 },
        { id: "cms-simple", label: "Gestion d'articles / actualités", price: 200 },
        { id: "cms-avance", label: "Gestion avancée du contenu", price: 500 },
        { id: "langue", label: "Multilingue (+1)", price: 250 },
        { id: "newsletter", label: "Intégration Newsletter", price: 100 },
        { id: "rdv", label: "Prise de rendez-vous en ligne", price: 250 },
        { id: "analytics", label: "Google Analytics + Search Console", price: 100 },
        { id: "rgpd", label: "Conformité RGPD / Cookies", price: 100 },
        { id: "formation", label: "Formation à l'utilisation du site", price: 150 }
    ];

    const maintenances = [
        {
            id: "maintenance_essentielle",
            label: "Essentielle",
            price: 149,
        },
        {
            id: "maintenance_standard",
            label: "Standard",
            price: 249,
        }
    ];



    const wordpressPrice =
        wordpress === "yes"
            ? (architecture?.id === "modification" ? 0 : -200)
            : 0;

    const total =
        (architecture?.price || 0) +
        (database === "yes" ? 300 : 0) +
        wordpressPrice +
        (maintenance?.price || 0) +
        options.reduce((sum, opt) => sum + opt.price, 0);

    const toggleOption = (opt) => {
        setOptions(prev =>
            prev.find(o => o.id === opt.id)
                ? prev.filter(o => o.id !== opt.id)
                : [...prev, opt]
        );
    };

    const [showFormalForm, setShowFormalForm] = useState(false);
    const [email, setEmail] = useState("");
    const [acceptCGU, setAcceptCGU] = useState(false);
    const [acceptContact, setAcceptContact] = useState(false);
    const [formError, setFormError] = useState("");




    const handleDownloadPDF = async () => {
        const { jsPDF } = await import("jspdf");

        const doc = new jsPDF("p", "pt", "a4");

        doc.html(document.querySelector(".devis_template"), {
            callback: (pdf) => pdf.save("devis.pdf"),
            x: 0,
            y: 0,
            width: 595 // largeur A4 en points
        });
    };

    const [honeypot, setHoneypot] = useState("");
    const [formalOpenedAt, setFormalOpenedAt] = useState(null);

    const handleContactRequest = async () => {

        // Honeypot
        if (honeypot.trim() !== "") {
            console.warn("Bot détecté (honeypot)");
            return;
        }

        // Temps minimum : 5 secondes
        if (!formalOpenedAt) {
            setFormError("Erreur de validation.");
            return;
        }

        const elapsed = Date.now() - formalOpenedAt;

        if (elapsed < 5000) {
            setFormError(
                "Veuillez prendre quelques secondes pour compléter le formulaire."
            );
            return;
        }



        if (!acceptCGU || !acceptContact) {
            setFormError("Vous devez accepter les CGU et le contact.");
            return;
        }

        if (!email) {
            setFormError("Veuillez entrer votre email.");
            return;
        }

        const payload = {
            emailClient: email,
            acceptCGU,
            acceptContact,
            architecture,
            wordpress,
            database,
            maintenance,
            options,
            total,
            website_url_8472: honeypot,
            opened_at: formalOpenedAt
        };

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/devis`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            const data = await res.json();
            const status = document.getElementById("formStatus");

            if (data.success) {
                status.textContent = "Je vais étudier votre devis. Un retour vous sera transmis sous 24h.";
                setShowFormalForm(false);
            } else {

                status.textContent = "Nous avons rencontré une erreur, veuillez nous en excuser.";
                setFormError("Erreur lors de l’envoi du devis.");
            }

        } catch (err) {
            console.error(err);
            setFormError("Erreur réseau.");
        }
    };




    const handleCloseForm = () => {
        setShowFormalForm(false);
        setFormError(""); // optionnel : nettoie les erreurs
    };



    return (


        <div className="content_config">

            <form>
                <p>Paramètres du Projet</p>

                {/* ARCHITECTURE */}
                <fieldset>
                    <legend>Architecture de base</legend>

                    <div className="architecture-grid">
                        {architectures.map(item => (
                            <button
                                key={item.id}
                                type="button"
                                className={architecture?.id === item.id ? "selected" : ""}
                                onClick={() => setArchitecture(item)}
                            >
                                <img src={item.icon} alt={item.label} />
                                {item.label}
                            </button>
                        ))}
                    </div>
                </fieldset>

                {/*Projet WORDPRESS*/}

                <fieldset>
                    <legend>CMS (WORDPRESS / LOVABLE)*</legend>
                    <div className="container_wordpress">
                        <label className={wordpress === "yes" ? "selected" : ""}>
                            <input
                                type="radio"
                                name="wordpress"
                                value="yes"
                                onChange={() => setWordpress("yes")}
                            />
                            Avec CMS
                        </label>

                        <label className={wordpress === "no" ? "selected" : ""}>
                            <input
                                type="radio"
                                name="wordpress"
                                value="no"
                                onChange={() => setWordpress("no")}
                            />
                            Développement artisanal
                        </label>

                    </div>

                </fieldset>

                {/* DATABASE */}
                <fieldset>
                    <legend>Base de données</legend>
                    <div className="container_radio">
                        <label className={database === "yes" ? "selected" : ""}>
                            <input
                                type="radio"
                                name="database"
                                value="yes"
                                onChange={() => setDatabase("yes")}
                            />
                            Avec
                        </label>

                        <label className={database === "no" ? "selected" : ""}>
                            <input
                                type="radio"
                                name="database"
                                value="no"
                                onChange={() => setDatabase("no")}
                            />
                            Sans
                        </label>

                    </div>

                </fieldset>


                {/* SYSTEME */}
                <fieldset>
                    <legend>Hébergement et maintenance</legend>
                    <div className="container_systeme">
                        <div className="container-hebergement">
                            <p className="hebergement_text">
                                Hébergement <span className="orange">(indispensable).</span>
                            </p>
                            <label>
                                <input
                                    type="radio"
                                    name="hebergement"
                                    disabled
                                />

                                Hébergement <span className="blue">HOSTINGER</span> 1 an inclu - (99€/an) *

                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="domaine"
                                    disabled
                                />

                                <span className="blue">Nom de Domaine</span> 1 an inclu - (120€/an) *

                            </label>
                        </div>

                        <div className="container-maintenance">

                            <p className="maintenance_text">
                                Maintenance <span className="orange">(Recommandé).</span>
                            </p>

                            <div className="input__maintenance">
                                {maintenances.map((item) => (
                                    <label key={item.id}>
                                        <input
                                            type="radio"
                                            name="maintenance"
                                            value={item.id}
                                            onChange={() => setMaintenance(item)}
                                        />

                                        {item.label} *
                                    </label>
                                ))}

                            </div>



                        </div>


                    </div>
                </fieldset>




                {/* OPTIONS */}
                <fieldset>
                    <legend>Options facultatives</legend>
                    <div className="option_list">
                        {optionList.map(opt => (
                            <label key={opt.id}>
                                <input
                                    type="checkbox"
                                    checked={options.some(o => o.id === opt.id)}
                                    onChange={() => toggleOption(opt)}
                                />
                                {opt.label}
                            </label>
                        ))}
                    </div>

                </fieldset>
            </form>

            {/* ESTIMATION */}
            <div className="footer_scope">

                <div className="scope__container">
                    <h4>Détails du devis</h4>
                    <div className="scope__header">


                        <p className="column">
                            <strong className="grey_text">Architecture :</strong>
                            <span>{architecture?.label || "Non sélectionnée"}</span>
                        </p>

                        <p className="column none">
                            <strong className="grey_text">Base de données :</strong>
                            <span>{database === "yes" ? "Avec" : database === "no" ? "Sans" : "Non sélectionnée"}</span>
                        </p>

                        <p className="column none">
                            <strong className="grey_text">CMS :</strong>
                            <span>{wordpress === "yes" ? "Wordpress" : wordpress === "no" ? "Développement artisanal" : "Non sélectionnée"}</span>
                        </p>

                        <p className="column none">
                            <strong className="grey_text">Maintenance :</strong>
                            <span>{maintenance?.label || "Non sélectionnée"}</span>
                        </p>

                    </div>

                    <div className="options_list">
                        <strong>Options sélectionnées :</strong>

                        {options.length === 0 ? (
                            <p>Aucune option sélectionnée</p>
                        ) : (
                            <ul>
                                {options.map(opt => (
                                    <li key={opt.id}>{opt.label}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>


                <p className="column final_price">Fourchette indicative : <span className="text_price">{total} €</span></p>
                <p className="form-status" id="formStatus"></p>

                <div className="container_cta">

                    <button
                        type="button"
                        onClick={() => {
                            setShowFormalForm(true);
                            setFormalOpenedAt(Date.now());
                        }}
                    >
                        Être contacté
                    </button>
                    <button type="button" onClick={handleDownloadPDF}>
                        Télécharger en .PDF
                    </button>
                </div>

                {/* Honeypot anti-bot */}
                <div
                    style={{
                        position: "absolute",
                        left: "-9999px"
                    }}
                >

                    <input
                        type="text"
                        name="website_url_8472"
                        value={honeypot}
                        tabIndex="-1"
                        autoComplete="new-password"
                        onChange={(e) => setHoneypot(e.target.value)}
                        aria-hidden="true"
                        style={{
                            position: "absolute",
                            left: "-9999px",
                        }}
                    />

                </div>




                <div className="devis_content">
                    <DevisTemplate
                        emailClient={email}
                        architecture={architecture}
                        wordpress={wordpress}
                        maintenance={maintenance}
                        database={database}
                        options={options}
                        total={total}
                    />
                </div>

                {showFormalForm && (
                    <div className="formal_request">

                        {formError && (
                            <p className="form_error">{formError}</p>
                        )}

                        <label className="container_mail">
                            Votre email :
                            <input
                                type="email"
                                className="mail"
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="email@exemple.com"
                            />
                        </label>

                        <label className="checkbox">
                            <input
                                type="checkbox"
                                checked={acceptCGU}
                                required
                                onChange={() => setAcceptCGU(!acceptCGU)}
                            />
                            J’ai lu et j’accepte les CGU
                        </label>
                        <Link to="/politique-confidentialite" target="_blank" rel="noopener noreferrer">Lire les CGU</Link>

                        <label className="checkbox">
                            <input
                                type="checkbox"
                                checked={acceptContact}
                                required
                                onChange={() => setAcceptContact(!acceptContact)}
                            />
                            J’accepte d’être contacté
                        </label>

                        <div className="formal_buttons">

                            <button type="button" onClick={handleContactRequest}>
                                Envoyer
                            </button>

                            <button type="button" className="close_form" onClick={handleCloseForm}>
                                Fermer
                            </button>

                        </div>

                    </div>
                )}
            </div>




        </div>
    );
}

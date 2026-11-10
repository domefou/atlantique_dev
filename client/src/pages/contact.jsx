import { Helmet } from 'react-helmet-async';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/pages/contact.scss";


const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";


export default function Contact() {

    const handleSubmit = async (e) => {
        console.log("SUBMIT");
        e.preventDefault();

        const formData = new FormData(e.target);

        console.log("FORMDATA", Object.fromEntries(formData));




        e.preventDefault();

        const status = document.getElementById("formStatus");

        // Honeypot
        if (formData.get("website")) {
            return;
        }

        // Temps minimum
        const start = Number(formData.get("formStart"));
        const duration = Date.now() - start;

        console.log({
            start,
            now: Date.now(),
            duration,
        });

        if (duration < 3000) {
            status.textContent = "Veuillez patienter quelques secondes avant l'envoi.";
            return;
        }

        const payload = {
            nom: formData.get("name"),
            mail: formData.get("email"),
            objet: formData.get("classification"),
            message: formData.get("message"),
            website_url_8472: formData.get("website_url_8472"),
            formStart: formData.get("formStart"),
        };


        try {
            const response = await fetch(`${API_URL}/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                status.textContent =
                    "Merci pour votre message. Nous revenons vers vous sous 24h.";
                e.target.reset();
            } else {
                status.textContent =
                    "Nous avons rencontré une erreur, veuillez nous en excuser.";
            }
        } catch {
            status.textContent =
                "Nous avons rencontré une erreur, veuillez nous en excuser.";
        }
    };




    return (

        <>
            <Helmet>
                <title>Contact | Demandez un Devis pour Votre Projet Web</title>

                <meta
                    name="description"
                    content="Contactez Atlantique Dev pour discuter de votre projet web. Réponse rapide et accompagnement personnalisé."
                />

                <link rel="canonical" href="https://atlantiquedev.fr/contact" />

                <meta property="og:title" content="Contact Atlantique Dev" />
                <meta property="og:description" content="Parlons ensemble de votre projet web." />
                <meta property="og:url" content="https://atlantiquedev.fr/contact" />
                <meta name="robots" content="index,follow" />
                <meta name="author" content="Atlantique Dev" />
                <meta name="theme-color" content="#0B1F3A" />
            </Helmet>


            <main className="contact">
                <Navbar />

                <section className="contact__head">
                    <div className="bubble-section__head">
                        <p className="text-accent__secondary">messagerie</p>
                    </div>

                    <article className="contact__title">

                        <h1>Discutons de Votre <span className="orange">Projet Web</span></h1>


                        <div className="text__intro">
                            <p>
                                Vous avez un projet de site web, une refonte ou un besoin
                                spécifique en développement ? Décrivez votre besoin et obtenez
                                une première estimation ainsi qu'un retour personnalisé sur les
                                solutions envisageables.
                            </p>
                        </div>
                    </article>
                </section>

                <div className="contact-container">
                    <div className="contact-left">
                        <h2>Vous souhaitez me contacter ?</h2>
                        <p className="intro">
                            Utilisez le formulaire ci-dessous,je vous recontact sous 24h.
                        </p>

                        <div className="info-block">
                            <p>
                                <strong>Périmètre d'activité :</strong>
                            </p>
                            <p>
                                Vendée(85) - Pays de la Loire - France
                            </p>

                            <p>
                                <strong>Contact :</strong><br />
                                contact@atlantiquedev.fr
                            </p>

                            <p>
                                <strong>Horaire :</strong><br />
                                09h00 → 18h00 CET<br />
                                Cycle standard : Lundi → Vendredi
                            </p>
                        </div>
                    </div>

                    <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
                        <label>Nom</label>
                        <input type="text" name="name" placeholder="votre Nom" required />

                        <label>Email de contact</label>
                        <input type="email" name="email" placeholder="votreMail@mail.com" required />

                        <label>Quel est le motif de votre message ?</label>
                        <select name="classification" required>
                            <option value="information">Je souhaite des informations</option>
                            <option value="projet en cours">J'ai un projet en cours</option>
                            <option value="nouveau projet">Je souhaite préparer un projet</option>
                            <option value="motif inconnu">Autre motif</option>
                        </select>

                        <label>Laisser un message</label>
                        <textarea name="message" rows="6" required></textarea>

                        <button type="submit">Envoyer</button>
                        <p className="form-status" id="formStatus"></p>


                        <input
                            type="text"
                            name="website_url_8472"
                            tabIndex="-1"
                            autoComplete="new-password"
                            aria-hidden="true"
                            style={{
                                position: "absolute",
                                left: "-9999px",
                            }}
                        />

                        <input
                            type="hidden"
                            name="formStart"
                            value={Date.now()}
                        />
                    </form>
                </div>
                <Footer />
            </main>

        </>
    );
}


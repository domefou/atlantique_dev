import { Helmet } from 'react-helmet-async';
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/pages/paiement.scss";

function Paiement() {
    const [contractNumber, setContractNumber] = useState("");
    const [error, setError] = useState("");

    const handlePayment = async (e) => {
        e.preventDefault();

        if (!contractNumber) {
            setError("Veuillez entrer votre numéro de contrat.");
            return;
        }

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/paiement/checkout`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ contractNumber })
            });

            const data = await res.json();

            console.log("Réponse API :", data);

            if (data.error) {
                setError(data.error);
                return;
            }

            // Redirection Stripe
            window.location.href = data.url;

        } catch (err) {
            console.error(err);
            setError("Erreur réseau.");
        }
    };

    return (
        <>
            <Helmet>
                <title>Paiement Sécurisé | Atlantique Dev</title>

                <meta
                    name="description"
                    content="Effectuez votre paiement en toute sécurité pour votre projet web grâce à notre plateforme sécurisée."
                />

                <link rel="canonical" href="https://atlantiquedev.fr/paiement" />

                <meta property="og:title" content="Paiement Sécurisé | Atlantique Dev" />
                <meta property="og:description" content="Paiement sécurisé de vos prestations web." />
                <meta property="og:url" content="https://atlantiquedev.fr/paiement" />
                <meta name="robots" content="index,follow" />
                <meta name="author" content="Atlantique Dev" />
                <meta name="theme-color" content="#0B1F3A" />
            </Helmet>


            <main className="paiement">
                <Navbar />

                <section className="paiement__head">
                    <div className="bubble-section__head">
                        <p className="text-accent__secondary">finalisation</p>
                    </div>

                    <article className="paiement__title">

                        <h1>Finalisez votre <span className="orange">projet</span></h1>

                    </article>


                    <article className="paiement__main">

                        <div className="text__intro">
                            <p>
                                <span className="orange">Derniere étape avant de lancer votre projet web ! </span><br></br>
                                Veuillez entrer votre numéro de contrat pour procéder au paiement.
                            </p>
                            <p>
                                En remplissant ce formulaire vous serez redirigé vers une plateforme de paiement sécurisée <span className="blue_stripe">(Stripe)</span>.
                                Une fois le paiement effectué, un mail de confirmation vous sera envoyé.
                            </p>
                        </div>

                        <form className="paiement-form" onSubmit={handlePayment}>
                            <fieldset>
                                <label>
                                    Numéro de contrat :
                                    <input
                                        type="text"
                                        value={contractNumber}
                                        onChange={(e) => setContractNumber(e.target.value)}
                                        placeholder="Ex : 2026-DEV-001"
                                    />
                                </label>

                                {error && <p className="form_error">{error}</p>}

                                <button type="submit">Procéder au paiement</button>
                            </fieldset>
                        </form>



                    </article>

                </section>



                <Footer />
            </main>
        </>
    );
}

export default Paiement;

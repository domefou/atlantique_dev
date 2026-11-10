import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";



import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";



import "../styles/components/navbar.scss";
import "../styles/components/footer.scss";

import "../styles/pages/paiement.scss"


function Success() {


    return (

        <>
            <Helmet>
                <title>Paiement Confirmé | Atlantique Dev</title>

                <meta
                    name="description"
                    content="Votre paiement a été confirmé avec succès. Merci pour votre confiance."
                />

                <meta name="robots" content="noindex,nofollow" />

                <link rel="canonical" href="https://atlantiquedev.fr/paiement/succes" />
            </Helmet>


            <main className="paiement">
                <Navbar />


                <section className="paiement__head">
                    <div className="bubble-section__head">
                        <p className="text-accent__secondary">finalisation</p>
                    </div>

                    <article className="paiement__title">

                        <h1>Merci pour votre <span className="orange">Confiance</span></h1>

                    </article>


                    <article className="paiement__main">

                        <div className="text__intro">


                            <p>
                                <span className='succes_paiement'>Votre paiement est confirmé.. </span><br />

                                ..Merci pour votre confiance.
                            </p>
                            <p>

                                Votre paiement a bien été pris en compte.
                                Vous allez recevoir un email de confirmation dans les prochaines minutes.
                            </p>
                            <Link className="link_paiement" to="/">Retourner a l'accueil</Link>
                        </div>
                    </article>

                </section>

                <Footer />
            </main>

        </>
    )
}

export default Success;
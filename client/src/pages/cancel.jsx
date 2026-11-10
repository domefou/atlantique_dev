import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";



import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";



import "../styles/components/navbar.scss";
import "../styles/components/footer.scss";

import "../styles/pages/paiement.scss"


function Cancel() {


    return (

        <>
            <Helmet>
                <title>Erreur de Paiement | Atlantique Dev</title>

                <meta
                    name="description"
                    content="Une erreur est survenue lors du traitement du paiement. Vous pouvez réessayer ou nous contacter."
                />

                <meta name="robots" content="noindex,nofollow" />

                <link rel="canonical" href="https://atlantiquedev.fr/paiement/erreur" />
            </Helmet>

            <main className="paiement">
                <Navbar />


                <section className="paiement__head">
                    <div className="bubble-section__head">
                        <p className="text-accent__secondary">finalisation</p>
                    </div>

                    <article className="paiement__title">

                        <h1>Veuillez nous <span className="orange">excuser..</span></h1>

                    </article>


                    <article className="paiement__main">

                        <div className="text__intro">


                            <p>
                                <span className='error_paiement'>Une erreur est survenue.</span><br />

                                Il semblerait que votre paiement est été refusé.
                            </p>
                            <p>
                                Veuillez réessayer dans quelque minutes.
                            </p>
                            <p>
                                Si le problèmes perciste veuillez me contacter via la page
                            </p>
                            <Link className="link_paiement" to="/contact"> Me contacter</Link>
                            <Link className="link_paiement" to="/">Retourner a l'accueil</Link>
                        </div>
                    </article>

                </section>

                <Footer />
            </main>

        </>
    )
}

export default Cancel;
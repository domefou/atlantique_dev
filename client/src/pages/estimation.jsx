import { Helmet } from 'react-helmet-async';
import "../styles/pages/estimation.scss";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Configurateur from "../components/configurateur.jsx"
import Price from "../components/price.jsx";


import "../styles/components/price.scss";



export default function Estimation() {



    return (

        <>
            <Helmet>
                <title>Estimation de Projet Web Gratuite | Atlantique Dev</title>

                <meta
                    name="description"
                    content="Obtenez rapidement une estimation du coût de votre projet web grâce à notre formulaire d'évaluation."
                />

                <link rel="canonical" href="https://atlantiquedev.fr/estimation" />

                <meta property="og:title" content="Estimation de Projet Web | Atlantique Dev" />
                <meta property="og:description" content="Recevez une estimation gratuite pour votre projet." />
                <meta property="og:url" content="https://atlantiquedev.fr/estimation" />
                <meta name="robots" content="index,follow" />
                <meta name="author" content="Atlantique Dev" />
                <meta name="theme-color" content="#0B1F3A" />
            </Helmet>


            <main className="estimation">
                <Navbar />

                <main className="mesh-gradient">
                    <img className="wave" src="/assets/img/wave.svg" alt="Wave"></img>


                    <div className="container">

                        <div className="content_title">
                            <h1>Configurateur de <span className="orange">projet</span></h1>
                            <p>Obtenez une estimation immédiate du coût de votre projet. Aucun engagement, aucun rendez-vous obligatoire, aucune inscription requise.<span className="cursor">█</span></p>


                            <ul>
                                <li>Estimation gratuite</li>
                                <li>Sans engagement</li>
                                <li>Sans e-mail obligatoire</li>
                                <li>vous n'etes contacté que si vous le souhaitez</li>
                            </ul>
                            <small>* Ceci est une estimation brute. Le montant final dépend de l'étude détaillée de votre projet.</small>
                        </div>


                        <Configurateur />
                    </div>

                    <div className="container__C">
                        <div className="offre_title">
                            <h2>Les offres <span className="orange">en détail </span></h2>
                        </div>

                        <div className="hebergement__maintenance">

                            <div className="maintenance__info">

                                <div className="maintenance__content">
                                    <ul>
                                        <p>* Maintenance <span className="orange">Essentielle</span></p>
                                        <li>Mises à jour CMS</li>
                                        <li>Mises à jour extensions</li>
                                        <li>Correctifs de sécurité</li>
                                        <li>Vérification du bon fonctionnement</li>
                                    </ul>

                                </div>
                                <p className="choix__text">OU</p>
                                <div className="maintenance__content">

                                    <ul>
                                        <p>* Maintenance <span className="orange">Standart</span></p>
                                        <li>Tout le contenu de l'offre Essentielle</li>
                                        <li>Assistance prioritaire</li>
                                        <li>Petites interventions techniques incluses</li>
                                        <li>Accompagnement en cas de problème</li>
                                    </ul>
                                </div>





                            </div>


                            <p className="offert">Hébergement 1 an inclu !</p>
                            <p className="hebergement__text"><span className="bold">L'hebergement </span>de votre site web est inclu pour une durée minimum d'un an d'une valeur de <span className="underline">99€ en moyenne</span>. Un renouvellement est possible.
                                Si vous souhaitez heberger votre site chez un autre hebergeur je peux vous accompagner dans vos demarche.</p>



                        </div>

                        <div className="price__container">
                            <div className="price-section">
                                <Price
                                    title="Aucun abonnement imposé"
                                    description="Parfait pour les petits projets."
                                    items={[
                                        "Vous êtes propriétaire du site",
                                        "Hébergement libre",
                                        "Aucune dépendance",
                                        "Pas de frais cachés"
                                    ]}
                                />
                                <Price
                                    title="Développement sur mesure"
                                    description="Pour une présence professionnelle."
                                    items={[
                                        "Pas de template générique",
                                        "Design adapté à votre activité",
                                        "Fonctionnalités selon vos besoins",
                                        "Évolutif dans le temps"
                                    ]}
                                />
                                <Price
                                    title="Accompagnement"
                                    description="Pensée pour TPE et PME."
                                    items={[
                                        "Conseils avant le projet",
                                        "Suivi pendant le développement",
                                        "Mise en ligne",
                                        "Support après livraison"
                                    ]}
                                />
                            </div>

                        </div>

                        <div className="content__info">
                            <h3>Récapitulatif</h3>
                            <p className="content_intro">
                                Toutes les offres comprennent les éléments suivants :
                            </p>
                            <ul className="content_list">
                                <li>
                                    Design personnalisé
                                </li>
                                <li>
                                    Nom de Domaine personnalisé
                                </li>
                                <li>
                                    Hébergement Hostinger 1 an
                                </li>
                                <li>
                                    Sécurité SSL
                                </li>
                            </ul>
                        </div>




                        <div className="content__Footer">
                            <p>Vous pouvez également béneficier d'une offre personnalisée afin de repondre plus précisement a vos besoins en me contactant
                                Via le formulaire de contact :<a href="/contact">cliquez ici</a>
                            </p>
                            <p>ou par mail à l'adresse suivante : <a href="mailto:contact@atlantiquedev.fr" target="_blank" rel="noopener noreferrer">contact@atlantiquedev.fr</a></p>
                        </div>
                    </div>

                </main>




                <Footer />



            </main>

        </>
    );
}

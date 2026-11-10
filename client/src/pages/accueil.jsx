import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";


import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Module from "../components/module.jsx"

import RealisationCard from "../components/realisationCard.jsx"



import "../styles/components/navbar.scss";
import "../styles/components/footer.scss";
import "../styles/components/realisationCard.scss";

import "../styles/pages/accueil.scss";







function Accueil() {


    return (

        <>
            <Helmet>
                <title>Développeur Web Freelance en Vendée | Atlantique Dev</title>

                <meta
                    name="description"
                    content="Développeur web freelance en Vendée. Création de sites internet modernes, performants et optimisés SEO pour indépendants, artisans et PME."
                />

                <link rel="canonical" href="https://atlantiquedev.fr/" />

                <meta property="og:title" content="Développeur Web Freelance en Vendée | Atlantique Dev" />
                <meta property="og:description" content="Création de sites web modernes et performants en Vendée." />
                <meta property="og:url" content="https://atlantiquedev.fr/" />
                <meta property="og:type" content="website" />
                <meta name="robots" content="index,follow" />
                <meta name="author" content="Atlantique Dev" />
                <meta name="theme-color" content="#0B1F3A" />
            </Helmet>


            <main className="accueil">

                <Navbar />

                <section className="Hero-container">

                    <div className="title-hero">
                        <h1>Un site <span className="orange-title">rapide</span>, <span className="orange-title">moderne</span><br></br> et pensé pour mettre en<br></br> valeur votre <span className="orange-title">activité</span>.</h1>
                    </div>

                    <div className="CTA-hero">
                        <div className="CTA-hero__container">
                            <Link className="btn-primary" to="/estimation">Estimer mon projet gratuitement <img src="/assets/icons/new_icon/orange/arrows-Toright.webp" alt="fleche orange direction droite"></img> </Link>
                            <Link className="btn-secondary" to="/contact">Me contacter</Link>
                        </div>
                    </div>

                    <div className="card-hero__container">
                        <div className="card-hero">
                            <p className="card-hero_text">Code propre & responsive</p>
                            <p className="card-hero_accent">100%</p>
                        </div>
                        <div className="card-hero">
                            <p className="card-hero_text">Délai moyen de livraison</p>
                            <p className="card-hero_accent">14-21j</p>
                        </div>
                        <div className="card-hero">
                            <p className="card-hero_text">Performance & Score SEO</p>
                            <p className="card-hero_accent">&gt; 90</p>
                        </div>
                        <div className="card-hero">
                            <p className="card-hero_text">Paiment sécurisé</p>
                            <p className="card-hero_accent">Stripe</p>
                        </div>

                    </div>

                </section>


                <section className="votre-projet">

                    <div className="bubble-section__head">
                        <p className="text-accent__secondary">solution précises</p>
                    </div>
                    <article>
                        <div className="votre-projet__head">

                            <div className="votre-projet__en-tete">
                                <div className="article-title__container">

                                    <h2>Définissez votre projet</h2>
                                </div>

                                <div className="marque">
                                    <p className="marque-primary">par <span className="marque-secondary">Atlantique<br></br>Dev</span><br></br><span className="marque-tertiary">Freelance</span></p>
                                </div>

                            </div>

                            <div className="article-text__container">
                                <p className="text-primary">Avant de parler de site internet, d'application ou de fonctionnalités, il est important de répondre aux deux grandes question :</p>
                            </div>

                        </div>

                        <div className="votre-projet__content">

                            <div className="votre-projet__card">
                                <h3>De quel type de projet avez-vous besoin ?</h3>
                                <p>Que ce soit vitrine, un catalogue ou juste une présence en ligne gràce a une landing page, une solution web existe.</p>
                                <p>Définir votre activité et les besoin qui en découle consiste la base d'un projet solide.</p>
                            </div>

                            <div className="votre-projet__card">
                                <h3>Quel sont les attentes de votre site web ?</h3>
                                <p>Gagner en visibilité ? Obtenir plus de devis ? Vendre vos produits en ligne ? Simplifier votre activité ?</p>
                                <p>Votre activité défini votre présence utile sur le web.</p>
                            </div>

                            <div className="votre-projet__absolute">
                                <img src="/assets/img/new_img/ampoule-sombre.webp" alt="ampoule design eteinte" title="Ampoule design eteinte"></img>
                            </div>

                        </div>

                    </article>



                </section>


                <section className="structure-fonction">

                    <div className="bubble-section__head">
                        <p className="text-accent__secondary">Architecture possible</p>
                    </div>
                    <div className="container-global">



                        <article className="structure__head">




                            <div className="structure-fonction__title">
                                <h2>Quel structure est fait<br></br>pour vous ?</h2>
                                <p>Regardons ensemble quel architecture correspond le mieux a vos besoin.</p>
                            </div>

                            <div className="structure-fonction__citation">
                                <p><span className="citation">"</span>Chaque projet mérite une architecture adaptée.</p>
                            </div>




                        </article>

                        <article className="structure__foot">
                            <div className="structure-fonction__module">

                                <Module />

                            </div>

                        </article>

                    </div>


                </section>


                <section className="realisation">



                    <article className="maquette-container">

                        <div className="maquette__title">
                            <div className="bubble-section__head">
                                <p className="text-accent__secondary">Architecture possible</p>
                            </div>
                            <h2>Maquette & concepts</h2>
                        </div>

                        <div className="maquette-card__container">
                            <RealisationCard
                                bubble="Artisanat & BTP"
                                img="/assets/img/maquette/artisan-hero.png"
                                alt="miniature maquette site vitrine artisan"

                                title="Atelier Bois & Métal"
                                note="99/100"
                                description="Site vitrine pensée pour les artisans haut de gamme. Galerie photo plein écran, sélecteur de matériaux et devis estimatif automatique en 3 clics."
                                items={[
                                    "Next.js",
                                    "CSS",
                                    "Devis Instantané"
                                ]}

                            />

                            <RealisationCard
                                bubble="Restauration"
                                img="/assets/img/maquette/restau-hero.png"
                                alt="miniature maquette site vitrine restaurant"

                                title="Le Front De Mer"
                                note="95/100"
                                description="Application pensée pour les restaurateur, espace client/admin sécurisé, réservation et validation en ligne, suivi et historique des réservations, interface administrateur complet."
                                items={[
                                    "Inscription/connexion",
                                    "Réservation en ligne",
                                    "Interface intuitif"
                                ]}

                            />

                            <RealisationCard
                                bubble="Immobilier"
                                img="/assets/img/maquette/immo-hero.png"
                                alt="miniature maquette site vitrine immobilier"

                                title="Catalogue Immobilier"
                                note="91/100"
                                description="Catalogue ultra-rapide sans usine à gaz. Idéal pour indépendant ou agence immobilière. filtres avancés et interface utilisateur intuitive."
                                items={[
                                    "Intuitif & rapide",
                                    "Filtrage Rapide",
                                    "Ergonomique"
                                ]}

                            />

                        </div>
                    </article>

                    <article className="real-project-container">
                        <div className="real-project__title">
                            <h2>Projet concret &<br></br> fonctionnel</h2>
                        </div>

                        <div className="real-project__working-process">
                            <div className="img__working">
                                <img src="/assets/icons/new_icon/icon_module/blanc/modification.webp" alt="outils indiquant la section en construction" title="section en construction" />
                            </div>

                            <div className="title__container">
                                <h3>Disponnible <span className="orange-items">prochainement</span>.</h3>
                                <p className="text-primary">Cette section est actuellement en cours de construction.</p>
                            </div>

                        </div>

                    </article>


                </section>

                <section className="technologie">
                    <article className="technologie__container">

                        <div className="tech__title">
                            <p className="text-secondary">Technologie maitrisé</p>
                        </div>

                        <div className="items__container">
                            <div className="tech__block">
                                <img src="/assets/icons/new_icon/blue/html.webp" alt="icon html" />
                                <p className="text-secondary text-technology">Next.js 15</p>
                            </div>

                            <div className="tech__block">
                                <img src="/assets/icons/new_icon/blue/css.webp" alt="icon CSS" />
                                <p className="text-secondary text-technology">Tailwind CSS</p>
                            </div>

                            <div className="tech__block">
                                <img src="/assets/icons/new_icon/blue/database.webp" alt="icone database" />
                                <p className="text-secondary text-technology">PostgreSQL & MongoDb</p>
                            </div>

                            <div className="tech__block">
                                <img src="/assets/icons/new_icon/blue/wordpress.webp" alt="icone Wordpress" />
                                <p className="text-secondary text-technology">Wordpress</p>
                            </div>

                            <div className="tech__block">
                                <img src="/assets/icons/new_icon/blue/lock.webp" alt="icone sécurité" />
                                <p className="text-secondary text-technology">Sécurité HTTPS & RGPD</p>
                            </div>


                        </div>



                    </article>
                </section>

                <section className="technologie__citation">
                    <p><span className="citation">"</span>Votre site web mérite une attention particulière.</p>
                </section>



                <section className="freelance">
                    <div className="bubble-section__head">
                        <p className="text-accent__secondary">Aune relation direct & sereine</p>
                    </div>

                    <div className="freelance__container">

                        <article className="freelance-text__intro">
                            <div className="freelance-title">
                                <h2>Pourquoi choisir un indépendant dédié plutôt qu'une grande agence ?</h2>

                                <p>Fini les intermédiaires multiples, les réunions interminables et les
                                    frais de structure répercutés sur votre facture. En direct avec
                                    moi, chaque euro investi sert directement votre résultat en ligne.</p>


                            </div>

                            <div className="freelance-footer">
                                <div className="engagement__container">
                                    <img src="/assets/icons/new_icon/orange/valide.webp" alt="icone certifié valide" />
                                    <p className="egagement-title">
                                        Mon engagement déontologique
                                    </p>
                                </div>

                                <p>
                                    « Si une solution gratuite ou plus simple suffit à votre activité, je
                                    vous le dis honnêtement. L’objectif est votre rentabilité, pas de
                                    vous survendre un projet inutilement complexe. »
                                </p>
                            </div>
                        </article>


                        <article className="freelance-card__container">
                            <div className="agence-card">
                                <div className="agence-head">
                                    <p className="agence-title">En Agence Web</p>
                                    <img src="/assets/icons/new_icon/crows.webp" alt="icone croix rouge" />
                                </div>
                                <ul>
                                    <li>Interlocuteurs changeants
                                        (commercial, chef de projet, stagiaire
                                        dev).</li>
                                    <li>Délais à rallonge causés par des
                                        processus lourds et des dizaines de
                                        dossiers simultanés.</li>
                                    <li>Tarifs majorés pour financer locaux,
                                        commerciaux et frais généraux
                                        d’entreprise.</li>
                                    <li>Jargon nébuleux masquant le manque
                                        d'écoute de vos contraintes réelles.</li>

                                </ul>


                            </div>


                            <div className="atlantique-card">
                                <div className="atlantique-bubble">
                                    <p>100% dedié</p>
                                </div>
                                <div className="atlantique-head">
                                    <p className="atlantique-title">Avec Atlantique Dev</p>
                                    <img src="/assets/icons/new_icon/orange/checked.webp" alt="icone check" />
                                </div>
                                <ul>
                                    <li>1 interlocuteur unique qui code votre
                                        site et répond directement au
                                        téléphone.</li>
                                    <li>Concentration totale : je ne prends
                                        que 2 projets simultanés pour garantir
                                        votre délai.</li>
                                    <li>Tarifs transparents : vous payez
                                        uniquement la conception et
                                        l'expertise technique.</li>
                                    <li>Pédagogie bienveillante : explications
                                        claires et propriété totale de votre site.</li>

                                </ul>



                            </div>
                        </article>
                    </div>
                </section>

                <section className="freelance__citation">
                    <p><span className="citation">"</span>Un site performant commence par une base solide. </p>

                </section>



                <section className="presentation">
                    <article className="presentation__container">

                        <div className="presentation__img">
                            <img src="/assets/img/new_img/ampoule-violette.webp" alt="ampoule violette sombre" />
                            <div className="img__absolute-text">
                                <div className="localisation__head">
                                    <img src="/assets/icons/new_icon/gps.webp" alt="point localisation" />
                                    <p>Ancré en Vendée, actif dans toute la France</p>
                                </div>

                                <p>La proximité d'un interlocuteur local combinée à l'efficacité du
                                    travail moderne à distance.</p>



                            </div>
                        </div>

                        <div className="presentation__text">
                            <div className="bubble-section__head">
                                <p className="text-accent__secondary">derrière l'écran</p>
                            </div>

                            <h2>Qui est Atlantique Dev ?</h2>
                            <p className="text-primary">Atlantique Dev est né d'un constat simple : trop d'entreprises locales et de professionnels
                                paient des fortunes pour des sites internet lents, opaques ou abandonnés par des
                                prestataires introuvables dès la facture réglée.</p>
                            <p className="text-primary">Passionné d’artisanat numérique, je conçois des plateformes taillées comme des outils de
                                précision : code propre, zéro fioriture inutile, rapidité éclair et design élégant qui inspire
                                immédiatement confiance à vos clients.</p>

                            <p className="text-secondary">Mon credo : écouter attentivement votre métier, comprendre votre cible locale, et bâtir
                                exactement ce qui vous fera gagner du temps et des clients.</p>

                            <p className="text-uppercase">compétences de pointe :</p>
                            <ul>

                                <li>Next.js & React</li>
                                <li>TypeScript</li>
                                <li>CSS</li>
                                <li>WordPress Sécurisé</li>
                                <li>SEO Technique & Local</li>
                                <li>API & Stripe</li>
                            </ul>

                        </div>

                    </article>


                </section>


                <section className="etape-projet">
                    <div className="head">
                        <div className="bubble-section__head">
                            <p className="text-accent__secondary">méthode claire & sans friction</p>
                        </div>
                        <h2>Comment se déroule un projet ?</h2>
                        <p className="text-primary">Un parcours balisé de A à Z, sans jargon technique et avec une visibilité totale à chaque étape.</p>
                    </div>

                    <article className="etape__container">

                        <div className="etape__card">
                            <div className="etape__head">
                                <p>étape 01</p>
                                <div className="img__container">
                                    <img src="/assets/icons/new_icon/grey/sms.webp" alt="icone message" />
                                </div>

                            </div>
                            <div className="etape__main">
                                <h3>Échange & Cadrage</h3>
                                <p className="main-text">Appel découverte de 20 min pour cerner vos
                                    objectifs réels, vos besoins clients et définir le
                                    périmètre précis du projet sans engagement.</p>
                            </div>
                            <div className="etape__foot">
                                <img src="/assets/icons/new_icon/orange/clock.webp" alt="icone horloge" />
                                <p className="foot-text">Délai : 24h à 48h</p>
                            </div>
                        </div>

                        <div className="etape__card">
                            <div className="etape__head">
                                <p>étape 02</p>
                                <div className="img__container">
                                    <img src="/assets/icons/new_icon/grey/application.webp" alt="icone message" />
                                </div>
                            </div>
                            <div className="etape__main">
                                <h3>Conception & Maquette
                                    interactive</h3>
                                <p className="main-text">Création de la structure UX et des maquettes UI
                                    haute fidélité. Vous visualisez l'aspect final et
                                    l'expérience mobile avant toute ligne de code.</p>
                            </div>
                            <div className="etape__foot">
                                <img src="/assets/icons/new_icon/orange/css.webp" alt="icone horloge" />
                                <p className="foot-text">Prototype Figma cliquable</p>
                            </div>
                        </div>

                        <div className="etape__card">
                            <div className="etape__head">
                                <p>étape 03</p>
                                <div className="img__container">
                                    <img src="/assets/icons/new_icon/grey/list.webp" alt="icone message" />
                                </div>
                            </div>
                            <div className="etape__main">
                                <h3>Validation & Ajustements</h3>
                                <p className="main-text">Revue détaillée ensemble, prise en compte de vos
                                    retours et itérations jusqu'à validation complète et
                                    formelle du design et de l'arborescence.</p>
                            </div>
                            <div className="etape__foot">
                                <img src="/assets/icons/new_icon/orange/pouce.webp" alt="icone horloge" />
                                <p className="foot-text">Retours illimités inclus</p>
                            </div>
                        </div>

                        <div className="etape__card">
                            <div className="etape__head">
                                <p>étape 04</p>
                                <div className="img__container">
                                    <img src="/assets/icons/new_icon/grey/chaudron.webp" alt="icone message" />
                                </div>
                            </div>
                            <div className="etape__main">
                                <h3>Développement sur-mesure</h3>
                                <p className="main-text">Intégration Next.js 15, animations fluides,
                                    responsive design irréprochable, performances
                                    Lighthouse 95+ et sécurisation maximale.</p>
                            </div>
                            <div className="etape__foot">
                                <img src="/assets/icons/new_icon/orange/compteur.webp" alt="icone horloge" />
                                <p className="foot-text">Code propre & SEO natif</p>
                            </div>
                        </div>

                        <div className="etape__card">
                            <div className="etape__head">
                                <p>étape 05</p>
                                <div className="img__container">
                                    <img src="/assets/icons/new_icon/grey/paiement.webp" alt="icone message" />
                                </div>
                            </div>
                            <div className="etape__main">
                                <h3>Règlement sécurisé via Stripe</h3>
                                <p className="main-text">Paiement transparent et échelonné (ex : 30%
                                    acompte / 70% à la livraison) avec facture officielle
                                    aux normes et protection acheteur Stripe.</p>
                            </div>
                            <div className="etape__foot">
                                <img src="/assets/icons/new_icon/orange/secure.webp" alt="icone horloge" />
                                <p className="foot-text">Échelonné & Sans frais</p>
                            </div>
                        </div>

                        <div className="etape__card">
                            <div className="etape__head">
                                <p>étape 06</p>
                                <div className="img__container">
                                    <img src="/assets/icons/new_icon/grey/deploiement.webp" alt="icone message" />
                                </div>
                            </div>
                            <div className="etape__main">
                                <h3>Recette finale & Déploiement</h3>
                                <p className="main-text">Tests multi-écrans complets, connexion de votre
                                    nom de domaine, indexation Google et remise en
                                    main propre. Possibilité d’obtenir un mini-guide d’utilisation.</p>
                            </div>
                            <div className="etape__foot">
                                <img src="/assets/icons/new_icon/orange/valide.webp" alt="icone horloge" />
                                <p className="foot-text">Mise en ligne & Support 30j</p>
                            </div>
                        </div>
                        <div className="foot">
                            <div className="img__container">
                                <div className="img__content">
                                    <img src="/assets/icons/new_icon/blue/info.webp" alt="icone information" />
                                </div>

                                <div className="img__text">
                                    <p className="text-tertiary">Une question à chaque étape ?</p>
                                    <p className="text-secondary">Accès direct WhatsApp / Téléphone avec moi.</p>
                                </div>
                            </div>
                            <div className="cta__container">
                                <Link to="/contact" className="cta__contact">Démarrer par l'Étape 01</Link>
                            </div>
                        </div>
                    </article>


                </section>


                <section className="savoir-faire">

                    <div className="bubble-section__head">
                        <p className="text-accent__secondary">méthode claire & sans friction</p>
                    </div>

                    <h2>Votre projet mérite un site qui valorise enfin
                        <span className="orange-text"> votre savoir-faire</span>.</h2>
                    <p className="secondary-text">
                        Discutons de vos objectifs pendant 15 minutes. Je vous livre une
                        recommandation honnête, un devis clair et un planning précis sous 24h.

                    </p>
                    <div className="cta__container">
                        <Link to="/contact" className="cta-contact">
                            <img src="/assets/icons/new_icon/calendrier.png" alt="icone agenda" />

                            Planifier un échange gratuit
                        </Link>
                        <Link to="/estimation" className="cta-simulateur">Essayer le simulateur gratuit</Link>
                    </div>

                    <ul>
                        <li>Devis détaillé sans engagement</li>
                        <li>Réponse garantie sous 24H</li>
                        <li>Paiement échelonné possible (3x sans frais)</li>
                    </ul>

                </section>

                <Footer />

            </main >

        </>
    );
}

export default Accueil;

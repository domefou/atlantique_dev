import { Helmet } from 'react-helmet-async';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Accordion from "../components/accordion.jsx";

import "../styles/components/accordion.scss"
import "../styles/pages/faq.scss"

export default function FAQ() {
    return (

        <>
            <Helmet>
                <title>FAQ | Questions Fréquentes sur Nos Services Web</title>

                <meta
                    name="description"
                    content="Retrouvez les réponses aux questions fréquentes concernant la création de site internet, les délais, les tarifs et l'accompagnement."
                />

                <link rel="canonical" href="https://atlantiquedev.fr/faq" />

                <meta property="og:title" content="FAQ Atlantique Dev" />
                <meta property="og:description" content="Toutes les réponses à vos questions sur nos services web." />
                <meta property="og:url" content="https://atlantiquedev.fr/faq" />
                <meta name="robots" content="index,follow" />
                <meta name="author" content="Atlantique Dev" />
                <meta name="theme-color" content="#0B1F3A" />
            </Helmet>

            <main className="faq">
                <Navbar />

                <section className="faq__head">
                    <div className="bubble-section__head">
                        <p className="text-accent__secondary">besoin d'aide ?</p>
                    </div>

                    <div className="content_title">
                        <h1>Foire Aux <span className="orange">Questions</span></h1>
                        <p>Une question ? Verifiez notre F.A.Q vous y trouverez surrement votre réponse.</p>
                    </div>

                </section>





                <section className="faq-list">

                    {/* TYPES DE PROJETS */}

                    <Accordion title="Qu’est-ce qu’une application web ?">
                        <p>
                            Une application web est un <strong>outil interactif</strong> permettant d’exécuter des
                            fonctionnalités avancées : gestion de données, espace client, tableau de bord, automatisations,
                            workflows internes, etc.
                        </p>
                        <p>
                            Elle nécessite une architecture robuste, un backend complet, une base de données et des
                            mécanismes de sécurité renforcés. C’est le choix idéal pour les projets nécessitant
                            <strong>des fonctionnalités sur mesure</strong>.
                        </p>
                    </Accordion>

                    <Accordion title="Qu’est-ce qu’une API Backend ?">
                        <p>
                            Une API est un <strong>serveur dédié</strong> qui gère les données, l’authentification,
                            les permissions et les interactions entre le front et la base de données.
                        </p>
                        <p>
                            Elle est indispensable pour les applications modernes, les systèmes connectés, les apps mobiles
                            ou les plateformes nécessitant une communication sécurisée.
                        </p>
                    </Accordion>

                    <Accordion title="Qu’est-ce qu’un Dashboard / Admin ?">
                        <p>
                            Un dashboard est une interface permettant de <strong>gérer les utilisateurs, les données,
                                les statistiques et le contenu</strong>. Il est souvent couplé à une API et une base de données.
                        </p>
                        <p>
                            C’est un outil essentiel pour les entreprises souhaitant une gestion interne efficace.
                        </p>
                    </Accordion>

                    {/* DEVIS & TARIFS */}
                    <Accordion title="Comment est calculée la fourchette de prix ?">
                        <p>
                            La fourchette de prix dépend de plusieurs critères :
                        </p>
                        <ul>
                            <li>Complexité de l’architecture</li>
                            <li>Nombre de pages ou de modules</li>
                            <li>Présence d’une base de données</li>
                            <li>Fonctionnalités avancées</li>
                            <li>Options sélectionnées</li>
                            <li>Niveau de design et d’animations</li>
                        </ul>
                        <p>
                            L’estimation affichée est une <strong>fourchette indicative</strong> basée sur les choix
                            effectués dans le configurateur.
                        </p>
                    </Accordion>

                    <Accordion title="Pourquoi le prix final peut-il varier ?">
                        <p>
                            Le prix final dépend de l’étude détaillée du projet. Certains éléments peuvent influencer
                            le coût :
                        </p>
                        <ul>
                            <li>Intégrations externes (API, services tiers)</li>
                            <li>Fonctionnalités sur mesure</li>
                            <li>Design spécifique ou animations complexes</li>
                            <li>Normes de sécurité renforcées</li>
                            <li>Optimisations SEO avancées</li>
                        </ul>
                        <p>
                            Chaque projet est unique, c’est pourquoi un devis formel est nécessaire pour obtenir un
                            montant précis.
                        </p>
                    </Accordion>

                    {/* SÉCURITÉ & DONNÉES */}
                    <Accordion title="Le site respecte-t-il le RGPD ?">
                        <p>
                            Oui. Toutes les données sont traitées conformément au <strong>RGPD</strong>. Cela inclut :
                        </p>
                        <ul>
                            <li>Chiffrement des données</li>
                            <li>Stockage sécurisé</li>
                            <li>Aucune revente de données</li>
                            <li>Formulaires protégés</li>
                            <li>Serveurs conformes aux normes européennes</li>
                        </ul>
                    </Accordion>

                    <Accordion title="Comment sont protégées les données ?">
                        <p>
                            Nous appliquons plusieurs mesures :
                        </p>
                        <ul>
                            <li>HTTPS obligatoire</li>
                            <li>Chiffrement des mots de passe</li>
                            <li>Protection contre les injections SQL</li>
                            <li>Protection contre les attaques XSS</li>
                            <li>Audit de sécurité</li>
                            <li>Serveurs sécurisés</li>
                        </ul>
                    </Accordion>

                    {/* DÉLAIS */}
                    <Accordion title="Quels sont les délais moyens ?">
                        <ul>
                            <li>Landing page : à partir de 7 jours</li>
                            <li>Site vitrine : à partir de 3 semaines</li>
                            <li>Application web : à partir de 4 semaines</li>
                        </ul>
                        <p>
                            Chaque projet est différent : le délai varie en fonction de vos attentes, de la complexité
                            et des choix de conception.
                        </p>
                    </Accordion>

                    {/* TARIFS & FORFAITS */}
                    <Accordion title="Qu’est-ce qui est inclus avec mon site web ?">
                        <p>
                            Tous nos sites web incluent un <strong>forfait complet de 1 an</strong> regroupant
                            les services indispensables pour mettre votre site en ligne dans des conditions
                            professionnelles, sécurisées et performantes.
                        </p>

                        <ul>
                            <li>
                                <strong>Nom de domaine : 120 €/an</strong><br />
                                Votre adresse web personnalisée (ex : monentreprise.fr). Elle garantit votre
                                identité numérique, votre visibilité et votre crédibilité en ligne.
                            </li>

                            <li>
                                <strong>Hébergement : 99 €/an</strong><br />
                                Hébergement sécurisé, rapide et optimisé pour les sites modernes. Il inclut
                                la disponibilité 24/7, les mises à jour, la protection contre les attaques
                                et une infrastructure stable.
                            </li>

                        </ul>

                        <p>
                            Ces services sont <strong>indispensables</strong> pour déployer un site web en ligne.
                            Sans nom de domaine ni hébergement, un site ne peut pas être accessible au public.
                        </p>

                        <p>
                            À l’issue de la première année, vous êtes libre de <strong>renouveler ou non</strong>
                            ces abonnements. Nous vous accompagnons si vous souhaitez transférer votre site
                            vers un autre hébergeur ou gérer vos services vous-même.
                        </p>

                        <p>
                            Le forfait inclut également :
                        </p>

                        <ul>
                            <li>Configuration complète du domaine</li>
                            <li>Installation du certificat SSL (HTTPS)</li>
                            <li>Protection anti-spam sur les formulaires</li>
                            <li>Optimisation de la performance</li>
                            <li>Support technique de base</li>
                        </ul>

                        <p>
                            Ce pack garantit un lancement <strong>simple, sécurisé et professionnel</strong> de votre site web.
                        </p>
                    </Accordion>


                    <Accordion title="Pourquoi l’hébergement est-il indispensable ?">
                        <p>
                            L’hébergement est l’espace où votre site est stocké. Sans hébergement, votre site
                            n’existe pas en ligne. Un hébergement professionnel garantit :
                        </p>
                        <ul>
                            <li>Une disponibilité 24/7</li>
                            <li>Une vitesse de chargement optimale</li>
                            <li>Une sécurité renforcée</li>
                            <li>Des sauvegardes régulières</li>
                            <li>Une protection contre les attaques</li>
                        </ul>
                        <p>
                            Un bon hébergement améliore le <strong>SEO</strong>, la performance et l’expérience utilisateur.
                        </p>
                    </Accordion>

                    <Accordion title="Puis-je héberger mon site moi-même ?">
                        <p>
                            Oui, vous pouvez héberger votre site vous-même si vous disposez d’un hébergement
                            compatible et sécurisé. Cependant, cela implique :
                        </p>
                        <ul>
                            <li>Gérer les mises à jour</li>
                            <li>Assurer la sécurité</li>
                            <li>Installer le certificat SSL</li>
                            <li>Configurer les DNS</li>
                            <li>Résoudre les incidents techniques</li>
                        </ul>
                        <p>
                            Pour la majorité des clients, il est plus simple et plus sûr de laisser
                            <strong>AtlantiqueDev</strong> gérer l’hébergement.
                        </p>
                    </Accordion>

                    <Accordion title="Le forfait inclut-il la maintenance ?">
                        <p>
                            Le forfait inclut une <strong>maintenance de base</strong> comprenant :
                        </p>
                        <ul>
                            <li>Mises à jour de sécurité</li>
                            <li>Surveillance de disponibilité</li>
                            <li>Corrections mineures</li>
                            <li>Support technique simple</li>
                        </ul>
                        <p>
                            Pour les projets plus complexes (applications, dashboards, API), une
                            <strong>maintenance avancée</strong> peut être proposée.
                        </p>
                    </Accordion>




                </section>

                <div className="text-info">
                    <p>
                        Vous ne trouvez pas la réponse a votre question ? N'hesitez pas a utiliser le formulaire de contact,je vous repondrais sous 24h, ou par mail
                        : <a href="mailto:contact@atlantiquedev.fr" target="_blank" rel="noopener noreferrer">contact@atlantiquedev.fr</a>
                    </p>

                </div>


                <Footer />
            </main>

        </>
    );
}

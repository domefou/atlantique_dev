
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";


import "../styles/pages/cgu.scss";


function CGU() {
    return (
        <>
            <Helmet>
                <title>Politique de Confidentialité et Cookies | Atlantique Dev</title>

                <meta
                    name="description"
                    content="Consultez notre politique de confidentialité concernant le traitement des données personnelles et l'utilisation des cookies."
                />

                <link rel="canonical" href="https://atlantiquedev.fr/politique-confidentialite" />

                <meta property="og:title" content="Politique de Confidentialité | Atlantique Dev" />
                <meta property="og:description" content="Protection des données personnelles et gestion des cookies." />
                <meta property="og:url" content="https://atlantiquedev.fr/politique-confidentialite" />
                <meta name="robots" content="index,follow" />
                <meta name="author" content="Atlantique Dev" />
                <meta name="theme-color" content="#0B1F3A" />
            </Helmet>



            <main className="CGU">
                <Navbar />
                <div className="content_title">
                    <h1>Politique de <span className="orange">confidentialité</span> &<br />
                        Condition Général <span className="orange">d'Utilisation</span></h1>
                    <p className="cgu-update">Dernière mise à jour : 05 novembre 2026</p>

                </div>
                <div className="container-cgu">


                    {/* 1. Objet */}
                    <section className="cgu-block">
                        <h2>1. Objet des CGU</h2>
                        <p>
                            Les présentes Conditions Générales d’Utilisation (ci-après « CGU »)
                            ont pour objet de définir les modalités d’accès et d’utilisation du
                            site Atlantique Dev (ci-après « le Site »), ainsi que les droits et
                            obligations des utilisateurs et de l’éditeur. Toute utilisation du
                            Site implique l’acceptation pleine et entière des présentes CGU.
                        </p>
                    </section>

                    {/* 2. Mentions légales */}
                    <section className="cgu-block">
                        <h2>2. Mentions légales</h2>
                        <p>
                            <strong>Éditeur du site :</strong> Atlantique Dev – Entreprise
                            individuelle / Micro-entreprise, Talmont-Saint-Hilaire, France.
                        </p>
                        <p>
                            <strong>Email :</strong> contact@atlantiquedev.fr
                        </p>
                        <p>
                            <strong>SIREN / SIRET :</strong> 10083919000012
                        </p>
                        <p>
                            <strong>Responsable de la publication :</strong>LECOULTRE Jean
                        </p>
                        <p>
                            <strong>Hébergement :</strong>HOSTINGER operations, UAB

                            Švitrigailos str. 34, Vilnius 03230 Lithuania
                        </p>
                    </section>

                    {/* 3. Accès au site */}
                    <section className="cgu-block">
                        <h2>3. Accès au site</h2>
                        <p>
                            Le Site est accessible gratuitement à tout utilisateur disposant
                            d’un accès Internet. L’éditeur met en œuvre tous les moyens
                            raisonnables pour assurer un accès de qualité, sans obligation de
                            résultat. L’accès peut être interrompu pour maintenance, mise à jour
                            ou tout autre motif technique.
                        </p>
                    </section>

                    {/* 4. Services proposés */}
                    <section className="cgu-block">
                        <h2>4. Services proposés</h2>
                        <p>
                            Atlantique Dev propose notamment des services de développement
                            Front-End et Back-End sur mesure, de conception d’architectures
                            Cloud natives, d’audit de performance et de sécurité, de création
                            d’interfaces UI/UX haut de gamme et de conseil en conception
                            logicielle. Les informations fournies sur le Site sont indicatives
                            et ne constituent pas un conseil professionnel ou juridique.
                        </p>
                    </section>

                    {/* 5. Obligations de l’utilisateur */}
                    <section className="cgu-block">
                        <h2>5. Obligations de l’utilisateur</h2>
                        <p>
                            L’utilisateur s’engage à utiliser le Site conformément aux lois en
                            vigueur, à ne pas tenter d’accéder aux systèmes internes ou zones
                            protégées, à ne pas porter atteinte au fonctionnement du Site
                            (intrusion, surcharge, injection, scraping massif) et à fournir des
                            informations exactes lorsqu’il utilise un formulaire de contact.
                            Toute utilisation frauduleuse ou abusive pourra entraîner une
                            suspension ou un blocage de l’accès au Site.
                        </p>
                    </section>

                    {/* 6. Propriété intellectuelle */}
                    <section className="cgu-block">
                        <h2>6. Propriété intellectuelle</h2>
                        <p>
                            L’ensemble du contenu du Site (textes, images, logos, vidéos, code,
                            design, structure, base de données) est protégé par le droit
                            d’auteur et les lois relatives à la propriété intellectuelle. Sauf
                            autorisation écrite préalable, il est strictement interdit de
                            reproduire, copier, modifier, redistribuer ou publier tout élément
                            du Site, ainsi que d’utiliser les marques « Atlantique Dev » ou ses
                            logos. Toute violation expose l’utilisateur à des poursuites civiles
                            et pénales.
                        </p>
                    </section>

                    {/* 7. Propriété intellectuelle */}
                    <section className="cgu-block">
                        <h2>7. Média</h2>
                        <p>
                            Les médias sous licence acquis pour les besoins du projet sont
                            intégrés au site du client. Les justificatifs d'acquisition
                            pourront être fournis sur demande.
                        </p>
                    </section>



                    {/* 8. Responsabilité */}
                    <section className="cgu-block">
                        <h2>8. Responsabilité</h2>
                        <p>
                            Atlantique Dev ne garantit pas l’absence totale d’erreurs, la
                            disponibilité continue du Site ni l’exactitude des informations
                            fournies par des tiers. L’utilisateur reconnaît utiliser le Site
                            sous sa seule responsabilité. Atlantique Dev ne pourra être tenu
                            responsable des dommages directs ou indirects liés à l’utilisation
                            du Site, des pertes de données, des intrusions ou attaques
                            informatiques provenant de tiers, ni des incompatibilités
                            matérielles ou logicielles.
                        </p>
                    </section>

                    {/* 9. Données personnelles (RGPD) */}
                    <section className="cgu-block">
                        <h2>9. Données personnelles (RGPD)</h2>
                        <p>
                            Atlantique Dev respecte le Règlement Général sur la Protection des
                            Données (RGPD – UE 2016/679). Les données collectées via les
                            formulaires (nom, email, message, classification du projet) sont
                            strictement nécessaires au traitement de la demande.
                        </p>
                        <p>
                            Elles sont utilisées pour répondre aux demandes de contact, assurer
                            le suivi des projets et la gestion administrative et commerciale.
                            Elles sont conservées au maximum 3 ans après le dernier contact,
                            sauf obligation légale contraire.
                        </p>
                        <p>
                            L’utilisateur dispose des droits d’accès, de rectification,
                            d’opposition, d’effacement, de portabilité et de limitation du
                            traitement. Pour exercer ces droits :{" "}
                            <strong><Link to="/contact" rel="noopener noreferrer">contact@atlantiquedev.fr</Link></strong>.
                        </p>
                    </section>

                    {/* 10. Cookies */}
                    <section className="cgu-block">
                        <h2>10. Cookies</h2>
                        <p>
                            Le Site peut utiliser des cookies techniques nécessaires à son
                            fonctionnement. Aucun cookie publicitaire ou de tracking tiers n’est
                            installé sans consentement explicite. L’utilisateur peut gérer ses
                            préférences via les paramètres de son navigateur.
                        </p>
                    </section>

                    {/* 10.2 Cookies Google analytics */}
                    <section className="cgu-block">
                        <h2>10.2 Cookies statistiques (Google Analytics)</h2>
                        <p>
                            Sous réserve de votre consentement, nous utilisons Google Analytics afin de mesurer l'audience de notre site internet, analyser son utilisation et améliorer nos services.

                            Les données susceptibles d'être collectées comprennent notamment :

                        </p>

                        <ul>
                            <li>les pages visitées ;</li>
                            <li>le nombre de visites ;</li>
                            <li>les parcours de navigation ;</li>
                            <li>le type d'appareil et de navigateur utilisés ;</li>
                            <li>l'origine géographique approximative des visites.</li>
                        </ul>

                        <p>
                            Ces données sont traitées à des fins statistiques uniquement et ne sont pas utilisées pour prendre des décisions automatisées à votre égard.
                        </p>
                        <p>
                            Vous pouvez accepter ou refuser le dépôt de ces cookies lors de votre première visite sur le site et modifier votre choix à tout moment via le gestionnaire de consentement accessible depuis le site.
                        </p>

                        <p>


                            Pour en savoir plus sur le traitement de vos données par Google, consultez :

                        </p>

                        <Link to=" https://policies.google.com/privacy" target="_blank"
                            rel="noopener noreferrer">https://policies.google.com/privacy</Link>
                    </section>


                    {/* 11. Sécurité */}
                    <section className="cgu-block">
                        <h2>11. Sécurité</h2>
                        <p>
                            Atlantique Dev met en œuvre des mesures techniques pour protéger le
                            Site (chiffrement des communications, surveillance des accès,
                            protection contre les attaques courantes, sauvegardes régulières).
                            L’utilisateur reconnaît toutefois les risques inhérents à toute
                            transmission de données sur Internet.
                        </p>
                    </section>

                    {/* 12. Liens externes */}
                    <section className="cgu-block">
                        <h2>12. Liens externes</h2>
                        <p>
                            Le Site peut contenir des liens vers des sites tiers. Atlantique Dev
                            n’est pas responsable du contenu, de la sécurité ou des pratiques de
                            ces sites externes.
                        </p>
                    </section>

                    {/* 13. Modification des CGU */}
                    <section className="cgu-block">
                        <h2>13. Modification des CGU</h2>
                        <p>
                            Atlantique Dev se réserve le droit de modifier les présentes CGU à
                            tout moment. La date de mise à jour figurant en haut de la page
                            permet de connaître la dernière version en vigueur.
                        </p>
                    </section>

                    {/* 14. Droit applicable */}
                    <section className="cgu-block">
                        <h2>14. Droit applicable</h2>
                        <p>
                            Les présentes CGU sont régies par le droit français et le droit
                            européen. En cas de litige, et sauf disposition légale contraire, la
                            compétence est attribuée aux tribunaux du ressort du siège de
                            l’éditeur.
                        </p>
                    </section>

                    {/* 15. Contact */}
                    <section className="cgu-block">
                        <h2>15. Contact</h2>
                        <p>
                            Pour toute question concernant les CGU ou pour signaler un contenu
                            illicite : <strong><Link to="/contact" rel="noopener noreferrer">contact@atlantiquedev.fr</Link></strong>.
                        </p>
                    </section>
                </div>
                <Footer />
            </main>

        </>
    );
};

export default CGU;


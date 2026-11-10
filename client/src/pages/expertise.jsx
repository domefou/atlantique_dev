import { Helmet } from 'react-helmet-async';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/pages/expertise.scss";


export default function Expertise() {
    return (

        <>
            <Helmet>
                <title>Expertise Web | Création de Sites et Applications Sur Mesure</title>

                <meta
                    name="description"
                    content="Découvrez les expertises d'Atlantique Dev : développement web, applications métier, optimisation SEO, automatisation et solutions sur mesure."
                />

                <link rel="canonical" href="https://atlantiquedev.fr/expertise" />

                <meta property="og:title" content="Expertise Web | Atlantique Dev" />
                <meta property="og:description" content="Développement web, SEO et applications sur mesure." />
                <meta property="og:url" content="https://atlantiquedev.fr/expertise" />
                <meta name="robots" content="index,follow" />
                <meta name="author" content="Atlantique Dev" />
                <meta name="theme-color" content="#0B1F3A" />
            </Helmet>


            <main className="expertise">
                <Navbar />

                <section className="expertise__head">
                    <div className="bubble-section__head">
                        <p className="text-accent__secondary">solution précises</p>
                    </div>

                    <img className="ux-design" src="/assets/img/new_img/ux-img.webp" alt="experience utilisateur design" />

                    <article className="expertise__title">

                        <h1>Maîtrise Technique <span className="orange">Profonde</span></h1>

                        <div className="text__intro">
                            <p>
                                Créer un site web réellement performant ne repose jamais
                                sur un seul domaine de compétence.
                                C’est l’équilibre entre développement,
                                architecture cloud, design UI/UX et sécurité qui
                                garantit une plateforme rapide, stable, agréable
                                à utiliser et protégée contre les menaces modernes.
                                Chaque point joue un rôle essentiel dans la qualité finale
                                du projet :
                            </p>
                        </div>

                        <div className="text_absolute">

                            <p>

                                En combinant un développement robuste, une architecture
                                cloud optimisée, un design centré utilisateur
                                et une sécurité avancée, chaque projet bénéficie
                                d’une base solide, évolutive et fiable.
                                C’est cette synergie qui permet de créer des sites modernes, rapides,
                                immersifs et sécurisés, capables de répondre aux exigences du web actuel.
                            </p>
                        </div>


                    </article>

                    <article className="expertise-grid">


                        <div className="expertise-card">
                            <img src="/assets/img/www.png" className="icon"></img>
                            <h3>Développement Web</h3>
                            <p>Frontend haute performance et backend résilient.</p>
                            <ul>
                                <li>Next.js</li>
                                <li>React</li>
                                <li>TypeScript</li>
                                <li>CSS</li>
                            </ul>
                            <a href="#dev-web">En savoir plus →</a>
                        </div>

                        <div className="expertise-card">
                            <img src="/assets/img/cloud.png" className="icon"></img>
                            <h3>Architecture Cloud</h3>
                            <p>Infrastructures évolutives, sécurisées et auto‑adaptatives.</p>
                            <ul>
                                <li>Vercel</li>
                                <li>Supabase</li>
                                <li>Cloudflare</li>
                                <li>Serverless</li>
                            </ul>
                            <a href="#cloud">En savoir plus →</a>
                        </div>

                        <div className="expertise-card">
                            <img src="/assets/img/ufo.png" className="icon"></img>
                            <h3>Design UI/UX</h3>
                            <p>Interfaces minimalistes, immersives et centrées utilisateur.</p>
                            <ul>
                                <li>Design Systeme</li>
                                <li>Figma</li>
                                <li>Google Stitch</li>
                            </ul>
                            <a href="#uiux">En savoir plus →</a>
                        </div>

                        <div className="expertise-card">
                            <img src="/assets/img/locking.png" className="icon"></img>
                            <h3>Sécurité & Systèmes</h3>
                            <p>Audit, monitoring, renforcement des API et protocoles modernes.</p>
                            <ul>
                                <li>SSL/TLS A+</li>
                                <li>OWAP top 10</li>
                                <li>Auth Zero-Trust</li>
                                <li>RGPD Strict</li>
                            </ul>
                            <a href="#security">En savoir plus →</a>
                        </div>

                    </article>

                </section>








                <section className="container__expertise">

                    <h2>En Detail</h2>



                    <img src="/assets/img/black_hole.png" className="img_black-hole"></img>


                    <div id="dev-web" className="expertise-detail">
                        <h3>Développement Web — Le moteur du site</h3>
                        <p>
                            Un développement solide assure la rapidité,
                            la fiabilité et la scalabilité du site.
                            C’est ici que se construisent les fonctionnalités,
                            les interactions, l’optimisation du code et la
                            structure technique qui permettent au site de
                            répondre efficacement aux besoins des utilisateurs.
                            Sans un développement maîtrisé, aucune performance
                            durable n’est possible.
                        </p>
                    </div>
                    <div id="cloud" className="expertise-detail">
                        <h3>Architecture Cloud — La fondation invisible</h3>
                        <p>
                            L’infrastructure cloud détermine la stabilité,
                            la résilience et la capacité d’évolution du site.
                            Une architecture bien pensée garantit des temps de
                            réponse rapides, une disponibilité constante, une
                            gestion intelligente des ressources et une réduction
                            des coûts. C’est ce qui permet au site de rester
                            performant, même sous forte charge.
                        </p>
                    </div>

                    <div id="uiux" className="expertise-detail">
                        <h3>Design UI/UX — L’expérience utilisateur au cœur du projet</h3>
                        <p>
                            Un design réfléchi transforme un site fonctionnel en une expérience
                            fluide et intuitive. L’UI/UX influence directement la satisfaction,
                            la navigation, la compréhension des contenus et le taux de conversion.
                            Un site performant n’est pas seulement rapide : il doit être agréable,
                            clair et cohérent pour que l’utilisateur s’y sente
                            immédiatement à l’aise.
                        </p>
                    </div>

                    <div id="security" className="expertise-detail">
                        <h3>Sécurité & Systèmes — La protection indispensable</h3>
                        <p>
                            La sécurité garantit la confiance, la protection des
                            données et la pérennité du site. Audit, durcissement
                            des API, surveillance des flux et protocoles modernes
                            sont essentiels pour éviter les attaques, les pertes
                            de données ou les interruptions de service. Un site
                            performant est avant tout un site sûr.
                        </p>
                    </div>
                </section>

                <Footer />
            </main>
        </>

    );
}

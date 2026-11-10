import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    // 👉 Script JS pour afficher/cacher le burger selon la taille
    useEffect(() => {
        function handleBurgerVisibility() {
            const burger = document.querySelector(".navbar__burger");
            if (!burger) return;

            if (window.innerWidth <= 768) {
                burger.style.display = "block";
            } else {
                burger.style.display = "none";
                setIsOpen(false); // ferme le menu si on repasse en desktop
            }
        }

        handleBurgerVisibility();
        window.addEventListener("resize", handleBurgerVisibility);

        return () => window.removeEventListener("resize", handleBurgerVisibility);
    }, []);


    return (
        <header>
            <nav className={`navbar ${isOpen ? "is-open" : ""}`}>
                <div className="navbar__container">

                    {/* LOGO */}
                    <div className="navbar__logo">

                        <Link className="item_link" to="/"><img src="/assets/logo/logo_navBar.png" alt="Logo Atlantique Dev" /></Link>
                        <p>Atlantique Dev</p>
                    </div>

                    {/* NAVIGATION DESKTOP */}
                    <ul className="navbar__item">
                        <li><Link className="item_link" to="/">Accueil</Link></li>
                        <li><Link className="item_link" to="/expertise">Expertise</Link></li>
                        <li><Link className="item_link" to="/contact">Contact</Link></li>
                        <li><Link className="item_link" to="/faq">FAQ</Link></li>
                    </ul>

                    {/* CTA DESKTOP */}
                    <Link className="Link_cta" to="/estimation">Estimation</Link>

                    {/* BURGER BUTTON (affiché uniquement en mobile via JS) */}
                    <button
                        className="navbar__burger"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <img
                            src={isOpen ? "/assets/icons/close.webp" : "/assets/icons/menu.webp"}
                            alt={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                            className="navbar__burger-icon"
                        />
                    </button>

                </div>

                {/* MENU MOBILE */}
                <div className="navbar__mobile">
                    <ul className="navbar__item--mobile">
                        <li><Link className="item_link" to="/">Accueil</Link></li>
                        <li><Link className="item_link" to="/expertise">Expertise</Link></li>
                        <li><Link className="item_link" to="/contact">Contact</Link></li>
                        <li><Link className="item_link" to="/faq">FAQ</Link></li>
                    </ul>

                    <Link className="Link_cta_mobile" to="/estimation">Estimation</Link>
                </div>
            </nav>
        </header>
    );
}

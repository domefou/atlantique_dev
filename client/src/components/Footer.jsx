import { Link } from "react-router-dom";

export default function Footer() {
    return (

        <footer className="footer">
            <div className="footer__container">
                <div className="footer__column">
                    <ul>
                        <li>
                            <span className="footer__title">Atlantique Dev</span>
                        </li>
                    </ul>
                </div>

                <div className="footer__column">
                    <ul>
                        <li>
                            <a
                                className="footer__link"
                                href="https://github.com/domefou"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        </li>
                        <li><a className="footer__link" target="_blank" to="#">Fiche Google</a></li>
                        <li><Link className="footer__link" to="/politique-confidentialite">Politique de confidentialité</Link></li>
                        <li><Link className="footer__link" to="/politique-confidentialite">Conditions générales d'utilisation</Link></li>
                    </ul>
                </div>

                <div className="footer__column">
                    <span className="footer__label">Statut</span>
                    <div className="footer__status">
                        <span className="footer__status-dot">
                            <span className="footer__ping"></span>
                            <span className="footer__dot"></span>
                        </span>
                        <span className="footer__status-text">
                            Disponible pour de nouveaux projets
                        </span>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                © 2026 Atlantique Dev. Tout droits réservé. Engineering the deep web.
            </div>
        </footer>


    );
}
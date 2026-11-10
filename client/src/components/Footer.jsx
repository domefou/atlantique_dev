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
                        <li><a className="footer__link" href="#">GitHub</a></li>
                        <li><a className="footer__link" href="#">LinkedIn</a></li>
                        <li><a className="footer__link" href="#">Twitter</a></li>
                        <li><a className="footer__link" href="#">Email</a></li>
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
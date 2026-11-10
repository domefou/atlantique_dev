import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loadAnalytics } from "../utils/analytic.js";

import "../styles/components/cookie.scss";

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");

        if (!consent) {
            setVisible(true);
        }

        if (consent === "accepted") {
            loadAnalytics();
        }
    }, []);

    const accept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        loadAnalytics();
        setVisible(false);
    };

    const refuse = () => {
        localStorage.setItem("cookie-consent", "refused");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="cookie-banner">
            <div className="cookie__head">

                <p>

                    <img src="/assets/icons/new_icon/cookie.png"></img>
                    Ce site utilise des cookies de mesure d’audience afin d’analyser
                    son utilisation et d’améliorer votre expérience. Vous pouvez
                    accepter ou refuser ces cookies.
                </p>


            </div>


            <Link
                to="/politique-confidentialite"
                target="_blank"
                rel="noopener noreferrer"
            >
                En savoir plus sur les cookies et vos données
            </Link>

            <div className="actions">
                <button onClick={accept}>
                    Accepter
                </button>

                <button onClick={refuse}>
                    Refuser
                </button>
            </div>
        </div>
    );
}
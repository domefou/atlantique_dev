export function loadAnalytics() {
    if (window.gtag) return;

    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-915Q11WL1V";
    script.async = true;

    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];

    window.gtag = function () {
        window.dataLayer.push(arguments);
    };

    window.gtag("js", new Date());
    window.gtag("config", "G-915Q11WL1V");
}

/*
🎯 Rôle global : activer Google Analytics sur ton site
Ce code :

ajoute le script officiel de Google Tag Manager

initialise GA4

configure ton identifiant de mesure : G‑915Q11WL1V

prépare dataLayer pour envoyer des événements

👉 C’est la méthode standard pour installer Google Analytics sur un site sans framework.
*/
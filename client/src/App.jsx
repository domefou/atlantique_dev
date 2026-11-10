import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


import "./styles/global.scss";

import Accueil from "./pages/accueil.jsx";
import Estimation from "./pages/estimation.jsx";
import Contact from "./pages/contact.jsx";
import FAQ from "./pages/faq.jsx";
import CGU from "./pages/cgu.jsx";
import Expertise from "./pages/expertise.jsx";
import Paiement from "./pages/paiement.jsx";
import Succes from "./pages/succes.jsx";
import Cancel from "./pages/cancel.jsx";

import CookieBanner from "./components/cookie.jsx";

function App() {

    const location = useLocation();

    useEffect(() => {
        // 1️⃣ Scroll-to-top immédiat AVANT tout
        window.scrollTo(0, 0);

        // 2️⃣ Petit délai pour laisser le scroll se stabiliser
        setTimeout(() => {
            const elements = document.querySelectorAll(".reveal");

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("visible");
                        }
                    });
                },
                {
                    threshold: 0.05,
                    rootMargin: "0px 0px -20% 0px"
                }
            );

            elements.forEach((el) => observer.observe(el));
        }, 80); // ← 80ms = parfait pour éviter le reveal instantané
    }, [location.pathname]);



    useEffect(() => {
        // 1️⃣ Scroll-to-top immédiat AVANT tout
        window.scrollTo(0, 0);

        // 2️⃣ Petit délai pour laisser le scroll se stabiliser
        setTimeout(() => {
            const elements = document.querySelectorAll(".reveal_left, .reveal_right ");

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("visible");
                        }
                    });
                },
                {
                    threshold: 0.05,
                    rootMargin: "0px 0px -35% 0px"
                }
            );

            elements.forEach((el) => observer.observe(el));
        }, 25); // ← 80ms = parfait pour éviter le reveal instantané
    }, [location.pathname]);


    return (
        <>
            <CookieBanner />
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/estimation" element={<Estimation />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/politique-confidentialite" element={<CGU />} />
                <Route path="/expertise" element={<Expertise />} />
                <Route path="/paiement" element={<Paiement />} />
                <Route path="/paiement/succes" element={<Succes />} />
                <Route path="/paiement/cancel" element={<Cancel />} />
            </Routes>
        </>

    );
}

export default App;

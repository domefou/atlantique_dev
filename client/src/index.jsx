import "./styles/global.scss"; // si tu as un fichier de styles global

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from "react-helmet-async";
import App from './App.jsx';

import { loadAnalytics } from "./utils/analytic.js";

const consent = localStorage.getItem("analytics_consent");

if (consent === "granted") {
    loadAnalytics();
}


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
    <React.StrictMode>
        <BrowserRouter>
            <HelmetProvider>
                <App />
            </HelmetProvider>
        </BrowserRouter>
    </React.StrictMode>
);

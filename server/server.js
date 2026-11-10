import express from "express";
import path from "path";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cookieParser from "cookie-parser";
import session from "express-session";
import cors from "cors";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

// CORS
/*
const allowedOrigins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://atlantiquedev.fr",
    "https://www.atlantiquedev.fr"
];

const corsOptions = {
    origin(origin, callback) {

        if (!origin) {
            return callback(null, true);
        }

        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        }

        return callback(new Error("Origin non autorisée par CORS"));
    },

    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,

};

app.use(cors(corsOptions));
*/
app.use((req, res, next) => {
    console.log(req.method, req.path, req.headers.origin);
    next();
});


app.use(cors());

/*
 * Stripe webhook DOIT être avant express.json()
 */
app.use(
    "/stripe/webhook",
    express.raw({ type: "application/json" })
);

// JSON + cookies
app.use(express.json());
app.use(cookieParser());

// Session
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        httpOnly: true,
    }
}));

app.set("trust proxy", 1);

// Sécurité
app.use(helmet());
app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
}));

// Limiteur pour les routes de contact et devis
const devisLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 3,
    message: {
        success: false,
        message: "Trop de demandes de devis, veuillez réessayer plus tard."
    }
});


// UTF-8
app.use((req, res, next) => {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    next();
});

// Static
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "client/dist")));

// Routes
import contactRoutes from "./routes/contact.js";
import paiementRoutes from "./routes/paiement.js";
import stripeRoutes from "./routes/stripe.js";
import devisRoutes from "./routes/devis.js";

app.use("/devis", devisLimiter, devisRoutes);
app.use("/contact", devisLimiter, contactRoutes);

app.use("/paiement", paiementRoutes);
app.use("/stripe", stripeRoutes);



// Front fallback
// app.use((req, res) => {
//     res.sendFile(path.join(__dirname, "client/dist", "index.html"));
// });

// Test
app.get("/", (req, res) => {
    res.json({ message: "Backend opérationnel" });
});

import './startup/sequelizeInit.js';
// ou le chemin correct vers ton fichier


// Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Serveur démarré sur le port ${PORT}`);
});

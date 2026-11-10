# Atlantique Dev

## Vue d'ensemble

Atlantique Dev est un projet de site vitrine et de gestion commerciale pour une agence web freelance. Le projet est divisé en deux parties :

- un frontend React / Vite pour l'interface utilisateur,
- un backend Express / Node.js pour les formulaires, le paiement et la logique métier.

## Structure du dépôt

```text
atlantique_dev/
├── client/                  # application frontend React + Vite
├── server/                  # API backend Express + MySQL + Stripe
├── README.md                # documentation générale du projet
├── package.json             # scripts racine pour lancer le projet
├── package-lock.json
└── LICENSE
```

## Démarrage rapide

1. Installez les dépendances côté client et côté backend.

```bash
cd client && npm install
cd ../server && npm install
```

2. Configurez les fichiers `.env` dans `client` et `server`.

3. Lancez le projet complet depuis la racine :

```bash
npm run dev
```

Le frontend est accessible sur :

```text
http://localhost:5173
```

Le backend est accessible sur :

```text
http://localhost:5000
```

## Documentation

- Frontend : [client/README.md](./client/README.md)
- Backend : [server/README.md](./server/README.md)

## Fonctionnalités principales

- Landing page de présentation de l'agence
- Formulaire de contact pour les demandes de devis
- Configurateur de projet avec estimation de coût
- Formulaire d'estimation personnalisé
- Paiement sécurisé via Stripe
- Webhook Stripe avec mise à jour de facture et de contrat
- Envoi d'emails via Brevo
- Base de données MySQL avec Sequelize
- Sécurité renforcée (CORS, Helmet, rate limiting, anti-spam)

## Stack technique

- Frontend : React, Vite, React Router, Sass
- Backend : Node.js, Express, Sequelize, MySQL, Stripe, Brevo
- Outils : dotenv, Helmet, CORS, rate limiting, PDFKit

## Bonnes pratiques

- garder les fichiers `.env` hors du dépôt,
- ne pas exposer les clés API dans le code,
- respecter la séparation frontend / backend,
- tester les paiements en environnement Stripe de test avant production.

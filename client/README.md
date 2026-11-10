# Frontend Atlantique Dev

## Vue d'ensemble

Le frontend d'Atlantique Dev est une application React construite avec Vite. Il s'agit d'un site vitrine / site de prospection orienté conversion, destiné à présenter les services d'une agence web freelance et à générer des demandes de devis ou des contacts.

Le projet met en avant :

- une landing page d'acquisition,
- une page d'estimation de projet interactive,
- une page de contact,
- une page de paiement et de validation Stripe,
- une navigation fluide avec React Router,
- une optimisation SEO et un design moderne responsive.

## Stack technique

- React 19
- Vite 8
- React Router 7
- Sass
- React Helmet Async
- JSPDF
- Oxlint

## Objectif fonctionnel

Le frontend est la vitrine commerciale de l'agence et remplit plusieurs rôles :

- expliquer les offres et les services,
- présenter les solutions techniques possibles,
- proposer un configurateur de devis interactif,
- permettre le contact client,
- rediriger le client vers la page de paiement sécurisée,
- rassurer sur la qualité du service, la transparence et le design.

## Structure du projet

```text
client/
├── public/
│   └── assets/                 # images, icônes, visuels du site
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── module.jsx
│   │   ├── realisationCard.jsx
│   │   ├── price.jsx
│   │   ├── accordion.jsx
│   │   ├── configurateur.jsx
│   │   ├── cookie.jsx
│   │   ├── devisTemplate.jsx
│   │   └── prestation.jsx
│   ├── pages/
│   │   ├── accueil.jsx
│   │   ├── estimation.jsx
│   │   ├── contact.jsx
│   │   ├── expertise.jsx
│   │   ├── faq.jsx
│   │   ├── cgu.jsx
│   │   ├── paiement.jsx
│   │   ├── success.jsx
│   │   ├── cancel.jsx
│   │   └── data.js
│   ├── styles/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── mixin/
│   │   └── global.scss
│   ├── utils/
│   │   └── analytic.js
│   ├── App.jsx                 # configuration des routes
│   ├── index.jsx               # point d'entrée React
│   └── main.jsx                # bootstrap de l'application
├── .env                        # variables d'environnement locales
├── .oxlintrc.json
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── dist/                       # build de production
```

## Prérequis

- Node.js 18+
- un navigateur moderne
- le backend API fonctionnel sur le port 5000

## Variables d'environnement

Créez un fichier `client/.env` :

```env
VITE_API_URL=http://localhost:5000
```

En production, cette variable pointe vers l'URL publique du backend.

## Installation

Depuis la racine du projet :

```bash
cd client
npm install
```

## Démarrage

Mode développement :

```bash
npm run dev
```

Le site démarre normalement sur :

```text
http://localhost:5173
```

## Scripts disponibles

```bash
npm run dev
```
Démarre le serveur de développement Vite.

```bash
npm run build
```
Génère le bundle de production dans le dossier `dist`.

```bash
npm run preview
```
Prévisualise le build prod localement.

```bash
npm run lint
```
Exécute le contrôle qualité avec Oxlint.

## Routes principales

Le frontend utilise React Router avec ces routes :

- `/` : page d'accueil
- `/estimation` : configurateur de devis
- `/contact` : formulaire de contact
- `/faq` : questions fréquentes
- `/expertise` : présentation des services
- `/politique-confidentialite` : mention légale / politique de confidentialité
- `/paiement` : formulaire de paiement
- `/paiement/success` : page de succès après paiement
- `/paiement/cancel` : page d'annulation ou d'erreur

## Composants importants

### Navbar

Navigation principale du site, avec les liens de section, le parcours de conversion et la navigation mobile / desktop.

### Configurateur

Le coeur du parcours d'estimation :

- choix de l'architecture,
- choix d'un CMS / WordPress,
- base de données,
- options et maintenance,
- calcul du total,
- envoi du devis au backend.

### Contact

Formulaire principal pour les demandes de contact. Il utilise un anti-spam simple avec :

- honeypot,
- validation du temps d'envoi,
- contrôle de message minimal.

### Paiement

La page de paiement :

- demande le numéro de contrat,
- appelle l'API backend,
- redirige vers Stripe Checkout,
- gère la confirmation ou l'annulation.

## SEO et UX

Le projet utilise `react-helmet-async` pour gérer les balises SEO par page :

- title,
- description,
- canonical,
- Open Graph,
- theme color,
- robots.

Le site met aussi en place des effets visuels de révélation (`reveal`, `reveal_left`, `reveal_right`) et des animations CSS pour renforcer l'expérience utilisateur.

## Styles

Le frontend est structuré avec Sass et un ensemble de fichiers par composant ou par page :

- `src/styles/global.scss` : styles globaux
- `src/styles/components` : composants UI
- `src/styles/pages` : styles spécifiques aux pages

## Déploiement

Pour mettre en production :

1. créer le build :

```bash
npm run build
```

2. déployer le dossier `dist` sur un hébergement statique compatible Vite,
3. configurer `VITE_API_URL` pour pointer vers l'API publique,
4. vérifier les redirections et les URLs de retour Stripe.

## Bonnes pratiques

- garder les variables du frontend dans `.env` uniquement,
- ne pas exposer de secrets côté client,
- vérifier les liens de redirection Stripe,
- tester les pages sous différents écrans,
- garder les composants réutilisables et documentés,
- éviter de déporter la logique métier dans le frontend quand elle appartient au backend.

## Résumé rapide

Le frontend Atlantique Dev est un site vitrine React moderne, pensé pour convertir les visiteurs en clients via une expérience claire, une estimation de projet, un formulaire de contact et un parcours de paiement sécurisé.

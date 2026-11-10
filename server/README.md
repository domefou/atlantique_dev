# Backend Atlantique Dev

## Vue d'ensemble

Le backend de Atlantique Dev est une API Node.js / Express dédiée au site vitrine et aux outils de vente et de gestion de projet de l'agence.

Il assure notamment :

- la réception des formulaires de contact et de devis,
- l'envoi d'emails via Brevo,
- la gestion des paiements via Stripe,
- la création de factures et leur suivi,
- la synchronisation avec une base MySQL via Sequelize,
- la sécurisation des endpoints avec CORS, Helmet, session et rate limiting,
- la mise en ligne du front statique buildé côté client.

## Stack technique

- Node.js 18+
- Express.js 5
- Sequelize 6
- MySQL 8 / MariaDB compatible
- Stripe
- Brevo (Sendinblue)
- dotenv
- Helmet
- CORS
- express-rate-limit
- express-session
- cookie-parser
- PDFKit

## Objectif fonctionnel

Le backend sert de couche applicative pour un site web de type agence web / freelance. Il n'est pas un simple boilerplate : il gère les flux de conversion et la relation commerciale :

- un visiteur remplit un formulaire de contact,
- un prospect complète un configurateur de devis,
- le backend valide les données et envoie un email à l'équipe,
- un contrat peut être payé via Stripe selon l'étape du paiement,
- un webhook Stripe met à jour le statut du contrat, crée une facture et envoie le mail associé.

## Structure du projet

```text
server/
├── config/
│   └── sequelize.js            # configuration Sequelize + MySQL
├── mailer/
│   ├── contact.cjs             # envoi email de contact via Brevo
│   └── devis.cjs               # envoi email de devis via Brevo
├── routes/
│   ├── contact.js              # formulaire de contact
│   ├── devis.js                # formulaire de devis
│   ├── paiement.js             # création de session Stripe checkout
│   └── stripe.js               # webhook Stripe + mise à jour factures/contrats
├── services/
│   ├── factureMail.js          # email de facture
│   └── facturePdf.js           # génération de facture PDF
├── startup/
│   └── sequelizeInit.js        # initialisation de la connexion et synchronisation Sequelize
├── .env                        # variables d'environnement locales
├── db.js                       # ancien/backup d'accès MySQL (non principal)
├── package.json                # dépendances et scripts
├── server.js                   # point d'entrée principal de l'API
└── README.md                   # documentation backend
```

## Prérequis

Avant de démarrer le backend, vous devez avoir :

- Node.js installé,
- un serveur MySQL ou MariaDB disponible,
- un compte Stripe avec les clés de test ou de production,
- un compte Brevo avec une clé API valide,
- un fichier `.env` correctement renseigné.

## Variables d'environnement

Créez un fichier `server/.env` avec les variables suivantes :

```env
PORT=5000
NODE_ENV=development

DB_HOST=localhost
DB_PORT=3306
DB_NAME=AtlantiqueDev
DB_USER=root
DB_PASSWORD=votre_mot_de_passe

SECRET_KEY=votre_secret_session
FRONTEND_URL=http://localhost:5173

BREVO_API_KEY=votre_cle_brevo
BREVO_USER=contact@atlantiquedev.fr

STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

Important : ne jamais commiter les vraies clés. Utilisez un fichier local non versionné.

## Installation

Depuis la racine du projet :

```bash
cd server
npm install
```

## Démarrage

Mode développement :

```bash
npm run dev
```

Le serveur démarre par défaut sur le port 5000.

Le point d'entrée principal est :

```text
server/server.js
```

## Endpoints API

### Health check

- GET /
  - réponse : message de disponibilité du backend

### Contact

- POST /contact
  - validation anti-spam (honeypot, temps d'envoi minimum)
  - envoie le message via Brevo

### Devis

- POST /devis
  - validation anti-bot,
  - envoi de la demande de devis par email,
  - retourne un statut success ou error.

### Paiement

- POST /paiement/checkout
  - recherche le contrat via le numéro fourni,
  - calcul le montant selon l'étape : acompte ou solde,
  - crée une session Stripe Checkout,
  - renvoie l'URL de paiement.

### Stripe webhook

- POST /stripe/webhook
  - reçoit les événements Stripe,
  - vérifie la signature webhook,
  - enregistre le paiement,
  - crée une facture,
  - met à jour le contrat,
  - envoie le mail facture au client.

## Sécurité

Le backend applique plusieurs protections :

- CORS restreint aux origines autorisées,
- Helmet pour les en-têtes HTTP sécurisés,
- rate limiting sur les routes sensibles,
- honeypot sur les formulaires,
- validation du temps d'envoi pour limiter le spam,
- vérification de signature sur les webhooks Stripe,
- cookies sécurisés en production.

## Base de données

Le projet utilise Sequelize avec MySQL. La connexion est configurée dans :

```text
server/config/sequelize.js
```

Les modèles sont synchronisés automatiquement à l'initialisation via :

```text
server/startup/sequelizeInit.js
```

La synchronisation actuelle est configurée avec :

```js
sequelize.sync({ force: false })
```

Cela permet de conserver les données existantes et de créer les tables manquantes si nécessaire.

## Gestion des emails

### Contact

Le fichier :

```text
server/mailer/contact.cjs
```
	envoie un message Brevo avec :

- nom,
- email du contact,
- objet,
- message.

### Devis

Le fichier :

```text
server/mailer/devis.cjs
```
	envoie la demande de devis avec les informations suivantes :

- email du client,
- acceptation CGU,
- acceptation du contact,
- architecture choisie,
- CMS / WordPress,
- base de données,
- options,
- montant total estimé.

## Factures et paiements

Le service de paiement est configuré pour le workflow suivant :

1. le client valide le contrat,
2. le backend crée une session Stripe Checkout,
3. le paiement est validé,
4. le webhook Stripe récupère la confirmation,
5. une facture est créée,
6. le contrat est mis à jour,
7. un email de confirmation est envoyé.

## Déploiement

Pour un déploiement réel :

- renseigner les variables d'environnement de production,
- utiliser un processus de type PM2 ou un service système,
- configurer le webhook Stripe avec l'URL publique du backend,
- sécuriser la base de données MySQL et le serveur,
- déployer le frontend buildé sur un hosting compatible Vite / static hosting.

## Dépannage courant

### Erreur de connexion MySQL

Vérifiez :

- le nom de la base,
- l'utilisateur et le mot de passe,
- l'hôte et le port,
- la configuration du mot de passe sur le serveur.

### Stripe webhook non reçu

Vérifiez :

- la bonne URL publique,
- la variable `STRIPE_WEBHOOK_SECRET`,
- l'activation du webhook dans le dashboard Stripe.

### Emails non envoyés

Contrôlez :

- `BREVO_API_KEY`,
- `BREVO_USER`,
- la validité du compte Brevo,
- les logs du backend.

## Bonnes pratiques

- utiliser `.env` uniquement localement,
- ne pas exposer les clés dans les logs,
- limiter les protections anti-spam de façon à ne pas gêner les vrais clients,
- sécuriser les webhooks et valider les métadonnées Stripe,
- surveiller les erreurs de paiement et facturation.

## Résumé rapide

Le backend de Atlantique Dev est une couche d'API sécurisée orientée conversion commerciale : contact, devis, paiement et facturation. Il est conçu pour être robuste, sécurisé et prêt à servir un site web d'agence en ligne.

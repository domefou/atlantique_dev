-- Active: 1745585580420@@127.0.0.1@3306@atlantiquedev
/*  LOCAL */
-- Création de la base

-- Création de l’utilisateur  DROP DATABASE atlantiqueDev;;

CREATE DATABASE IF NOT EXISTS `atlantiqueDev` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

START TRANSACTION;

SET time_zone = "+00:00";

-- Création de l’utilisateur  DROP USER IF EXISTS 'atlantique_admin' @'%';
CREATE USER 'atlantique_admin' @'%' IDENTIFIED BY 'ATD2026';

-- Attribution des privilèges
GRANT ALL PRIVILEGES ON atlantiqueDev.* TO 'atlantique_admin' @'%';

FLUSH PRIVILEGES;

-- Utilisation de la base de données local
USE `atlantiqueDev`;

/* TEST
USE `Atlantique_Dev_test`;
*/

/* EN LIGNE

-- Utilisation de la base de données railway
-- USE `railway`;

*/

/* base de données test */

-- ------------------------------------------------------

CREATE TABLE clients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(120) NOT NULL,
    email VARCHAR(120) NOT NULL UNIQUE,
    telephone VARCHAR(20) NOT NULL,
    entreprise VARCHAR(120) NOT NULL,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE contrats (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT NOT NULL,
    numero_contrat VARCHAR(50) NOT NULL UNIQUE,
    maintenance ENUM(
        'aucune',
        'essentielle',
        'standard'
    ) DEFAULT 'aucune' NOT NULL,
    etape_paiement ENUM('acompte', 'solde') DEFAULT 'acompte' NOT NULL,
    tarif DECIMAL(10, 2) NOT NULL,
    date_debut DATE NOT NULL,
    date_fin DATE NOT NULL,
    valide BOOLEAN DEFAULT FALSE NOT NULL,
    statut ENUM(
        'en_attente',
        'en_cours',
        'paye'
    ) DEFAULT 'en_attente' NOT NULL,
    FOREIGN KEY (client_id) REFERENCES clients (id)
);

CREATE TABLE renouvellements (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT NOT NULL,
    contrat_parent_id INT NULL,
    type ENUM(
        'domaine',
        'hebergement',
        'maintenance_essentielle',
        'maintenance_standard',
        'email_pro'
    ) NOT NULL,
    montant DECIMAL(10, 2) NOT NULL,
    date_debut DATE NOT NULL,
    date_fin DATE NOT NULL,
    statut ENUM('actif', 'expire', 'annule') DEFAULT 'actif',
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (client_id) REFERENCES clients (id),
    FOREIGN KEY (contrat_parent_id) REFERENCES contrats (id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE stripe_payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    contrat_id INT NOT NULL,
    stripe_session_id VARCHAR(120),
    stripe_payment_intent VARCHAR(120),
    etape_paiement ENUM('acompte', 'solde') NOT NULL,
    montant DECIMAL(10, 2),
    devise VARCHAR(10),
    statut VARCHAR(50),
    date_paiement TIMESTAMP,
    raw_json TEXT, -- pour stocker tout l'objet Stripe si tu veux
    FOREIGN KEY (contrat_id) REFERENCES contrats (id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE factures (
    id INT AUTO_INCREMENT PRIMARY KEY,
    contrat_id INT NOT NULL,
    numero_facture VARCHAR(50) NOT NULL UNIQUE,
    etape_paiement ENUM('acompte', 'solde') NOT NULL,
    montant DECIMAL(10, 2) NOT NULL,
    date_facture TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    pdf_path VARCHAR(255),
    FOREIGN KEY (contrat_id) REFERENCES contrats (id)
);
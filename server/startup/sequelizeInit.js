// configuration de Sequelize pour la connexion à MySQL
// Ce script initialise la connexion à la base de données MySQL en utilisant Sequelize
// Assurez-vous d'avoir installé les dépendances nécessaires : npm install sequelize mysql2 dotenv
// Ce script est utilisé pour synchroniser les modèles Sequelize avec la base de données MySQL

import sequelize from '../config/sequelize.js';

(async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Connexion à MySQL réussie !');

        await sequelize.sync({ force: false });
        console.log('📦 Base synchronisée avec Sequelize');
    } catch (err) {
        console.error('❌ Erreur de connexion/synchronisation :', err.message);
    }
})();

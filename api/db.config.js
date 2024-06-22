/********************/
/*** Import des modules nécessaires */
const { Sequelize } = require('sequelize');

/********************/
/*** Connexion à la BDD */
let sequelize = new Sequelize(
  process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false
  }
);

/********************/
/*** Synchronisation des modèles */
sequelize.sync({ alter: true })
  .then(() => {
    console.log('Database sync OK');
  })
  .catch(err => {
    console.log('Database sync error:', err);
  });

module.exports = sequelize;

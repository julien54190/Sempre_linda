const express = require('express');
const cors = require('cors');


/********************/
/*** Import de la connexion à la DB */
let DB = require('./db.config');

/********************/
/*** Initialisation de l'API */
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/********************/
/*** Import des modules de routage */
const user_router = require('./routes/users');
const reservation_router = require('./routes/reservation');
const menu_router = require('./routes/menus');
const entree_router = require('./routes/entrees');
const pizza_router = require('./routes/pizzas');
const pate_router = require('./routes/pates');
const viande_router = require('./routes/viandes');
const poisson_router = require('./routes/poissons');
const boisson_router = require('./routes/boissons');
const dessert_router = require('./routes/desserts');
const auth_router = require('./routes/auth');
//const checkTokenMiddleware = require('./jsonWebToken/check');


/********************/
/*** Mise en place du routage */
app.get('/', (req, res) => res.send("I'm online, Welcome!"));

app.use('/users', user_router);
app.use('/reservations', reservation_router);
app.use('/menus', menu_router);
app.use('/menus/entrees', entree_router);
app.use('/menus/pizzas', pizza_router);
app.use('/menus/pates', pate_router);
app.use('/menus/viandes', viande_router);
app.use('/menus/poissons', poisson_router);
app.use('/menus/boissons', boisson_router);
app.use('/menus/desserts', dessert_router);
app.use('/auth',auth_router )

app.get('*', (req, res) => res.status(501).send('What the hell are you doing?!!!'));

/********************/
/*** Start server avec test DB */
DB.authenticate ()
  .then(() => console.log('DB connection OK'))
  .then(() => {
    app.listen(process.env.SERVER_PORT, () => {
      console.log(`This server is running on port ${process.env.SERVER_PORT}. Have fun`);
    });
  })
  .catch(err => console.log('DB Error', err));

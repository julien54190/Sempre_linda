const express = require('express');
const Menu = require('../models/menu');
const Entree = require('../models/entree')
const Pizza = require('../models/pizza');
const Pate = require('../models/pate');
const Viande = require('../models/viande');
const Poisson = require('../models/poisson');
const Dessert = require('../models/dessert');
const Boisson = require('../models/boisson')

let router = express.Router();

// GET pour récupérer tous les menus avec leurs entrées, plats et pizzas
router.get('/', (req, res) => {
  Menu.findAll({ include: [Entree, Pizza, Pate, Viande, Poisson, Dessert, Boisson] })
    .then(menus => res.json({ data: menus }))
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// GET pour récupérer un menu par ID avec ses entrées, plats et pizzas
router.get('/:id', (req, res) => {
  let menuId = parseInt(req.params.id);

  if (!menuId) {
    return res.status(400).json({ message: "Missing Parameter" });
  }

  Menu.findOne({ where: { id: menuId }, include: [Entree,Pizza, Pate, Viande, Poisson, Dessert, Boisson] })
    .then(menu => {
      if (menu === null) {
        return res.status(404).json({ message: 'This menu does not exist!' });
      }
      return res.json({ data: menu });
    })
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// PUT pour créer un nouveau menu
router.put('/', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'Missing Data' });
  }

  Menu.create(req.body)
    .then(menu => res.json({ message: 'Menu created', data: menu }))
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// PATCH pour modifier un menu
router.patch('/:id', (req, res) => {
  let menuId = parseInt(req.params.id);

  if (!menuId) {
    return res.status(400).json({ message: 'Missing Parameter' });
  }

  Menu.findOne({ where: { id: menuId } })
    .then(menu => {
      if (menu === null) {
        return res.status(404).json({ message: 'This menu does not exist!' });
      }

      Menu.update(req.body, { where: { id: menuId } })
        .then(() => res.json({ message: 'Menu updated' }))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
    })
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// DELETE pour supprimer un menu
router.delete('/:id', (req, res) => {
  let menuId = parseInt(req.params.id);

  if (!menuId) {
    return res.status(400).json({ message: 'Missing Parameter' });
  }

  Menu.destroy({ where: { id: menuId }, force: true })
    .then(() => res.status(204).json({}))
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

module.exports = router;

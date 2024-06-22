const express = require('express');
const Dessert = require('../models/dessert');

let router = express.Router();

// GET toutes les dessert
router.get('/', (req, res) => {
  Dessert.findAll()
    .then(desserts => res.json({ data: desserts }))
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// GET un dessert par ID
router.get('/:id', (req, res) => {
  let dessertId = parseInt(req.params.id);

  if (!dessertId) {
    return res.status(400).json({ message: "Missing Parameter" });
  }

  Dessert.findOne({ where: { id: dessertId } })
    .then(dessert => {
      if (dessert === null) {
        return res.status(404).json({ message: 'This dessert does not exist!' });
      }
      return res.json({ data: dessert });
    })
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// PUT pour créer un nouveau dessert
router.put('/', (req, res) => {
  const { menu_id, nom, ingredients, prix } = req.body;

  if (!menu_id || !nom || !ingredients || !prix) {
    return res.status(400).json({ message: 'Missing Data' });
  }

  Dessert.create(req.body)
    .then(dessert => res.json({ message: 'Dessert created', data: dessert }))
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// PATCH pour modifier un dessert
router.patch('/:id', (req, res) => {
  let dessertId = parseInt(req.params.id);

  if (!dessertId) {
    return res.status(400).json({ message: 'Missing Parameter' });
  }

  Dessert.findOne({ where: { id: dessertId } })
    .then(dessert => {
      if (dessert === null) {
        return res.status(404).json({ message: 'This dessert does not exist!' });
      }

      Dessert.update(req.body, { where: { id: dessertId } })
        .then(() => res.json({ message: 'Dessert updated' }))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
    })
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// DELETE pour supprimer un dessert
router.delete('/:id', (req, res) => {
  let dessertId = parseInt(req.params.id);

  if (!dessertId) {
    return res.status(400).json({ message: 'Missing Parameter' });
  }

  Dessert.destroy({ where: { id: dessertId }, force: true })
    .then(() => res.status(204).json({}))
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

module.exports = router;

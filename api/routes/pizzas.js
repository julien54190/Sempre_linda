const express = require('express');
const Pizza = require('../models/pizza');

let router = express.Router();

// GET toutes les  pizza
router.get('/', (req, res) => {
  Pizza.findAll()
    .then(pizzas => res.json({ data: pizzas }))
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// GET une pizza par ID
router.get('/:id', (req, res) => {
  let pizzaId = parseInt(req.params.id);

  if (!pizzaId) {
    return res.status(400).json({ message: "Missing Parameter" });
  }

  Pizza.findOne({ where: { id: pizzaId } })
    .then(pizza => {
      if (pizza === null) {
        return res.status(404).json({ message: 'This pizza does not exist!' });
      }
      return res.json({ data: pizza });
    })
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// PUT pour créer une nouvelle pizza
router.put('/', (req, res) => {
  const { menu_id, nom, ingredients, prix } = req.body;

  if (!menu_id || !nom || !ingredients || !prix) {
    return res.status(400).json({ message: 'Missing Data' });
  }

  Pizza.create(req.body)
    .then(pizza => res.json({ message: 'Pizza created', data: pizza }))
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// PATCH pour modifier une pizza
router.patch('/:id', (req, res) => {
  let pizzaId = parseInt(req.params.id);

  if (!pizzaId) {
    return res.status(400).json({ message: 'Missing Parameter' });
  }

  Pizza.findOne({ where: { id: pizzaId } })
    .then(pizza => {
      if (pizza === null) {
        return res.status(404).json({ message: 'This pizza does not exist!' });
      }

      Pizza.update(req.body, { where: { id: pizzaId } })
        .then(() => res.json({ message: 'Pizza updated' }))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
    })
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// DELETE pour supprimer une pizza
router.delete('/:id', (req, res) => {
  let pizzaId = parseInt(req.params.id);

  if (!pizzaId) {
    return res.status(400).json({ message: 'Missing Parameter' });
  }

  Pizza.destroy({ where: { id: pizzaId }, force: true })
    .then(() => res.status(204).json({}))
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

module.exports = router;

const express = require('express');
const Entree = require('../models/entree');

let router = express.Router();

// GET toutes les entrées
router.get('/', (req, res) => {
  Entree.findAll()
    .then(entrees => res.json({ data: entrees }))
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// GET une entrée par ID
router.get('/:id', (req, res) => {
  let entreeId = parseInt(req.params.id);

  if (!entreeId) {
    return res.status(400).json({ message: "Missing Parameter" });
  }

  Entree.findOne({ where: { id: entreeId } })
    .then(entree => {
      if (entree === null) {
        return res.status(404).json({ message: 'This entree does not exist!' });
      }
      return res.json({ data: entree });
    })
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// PUT pour créer une nouvelle entrée
router.put('/', (req, res) => {
  const { menu_id, nom, ingredients, prix } = req.body;

  if (!menu_id || !nom || !ingredients || !prix) {
    return res.status(400).json({ message: 'Missing Data' });
  }

  Entree.create(req.body)
    .then(entree => res.json({ message: 'Entree created', data: entree }))
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// PATCH pour modifier une entrée
router.patch('/:id', (req, res) => {
  let entreeId = parseInt(req.params.id);

  if (!entreeId) {
    return res.status(400).json({ message: 'Missing Parameter' });
  }

  Entree.findOne({ where: { id: entreeId } })
    .then(entree => {
      if (entree === null) {
        return res.status(404).json({ message: 'This entree does not exist!' });
      }

      Entree.update(req.body, { where: { id: entreeId } })
        .then(() => res.json({ message: 'Entree updated' }))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
    })
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// DELETE pour supprimer une entrée
router.delete('/:id', (req, res) => {
  let entreeId = parseInt(req.params.id);

  if (!entreeId) {
    return res.status(400).json({ message: 'Missing Parameter' });
  }

  Entree.destroy({ where: { id: entreeId }, force: true })
    .then(() => res.status(204).json({}))
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

module.exports = router;

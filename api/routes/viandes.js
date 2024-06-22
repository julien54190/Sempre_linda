const express = require('express');
const Viande = require('../models/viande');

let router = express.Router();

// GET toutes les viande
router.get('/', (req, res) => {
  Viande.findAll()
    .then(viandes => res.json({ data: viandes }))
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// GET une viande par ID
router.get('/:id', (req, res) => {
  let viandeId = parseInt(req.params.id);

  if (!viandeId) {
    return res.status(400).json({ message: "Missing Parameter" });
  }

  Viande.findOne({ where: { id: viandeId } })
    .then(viande => {
      if (viande === null) {
        return res.status(404).json({ message: 'This viande does not exist!' });
      }
      return res.json({ data: viande });
    })
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// PUT pour créer une nouvelle viande
router.put('/', (req, res) => {
  const { menu_id, nom, ingredients, prix } = req.body;

  if (!menu_id || !nom || !ingredients || !prix) {
    return res.status(400).json({ message: 'Missing Data' });
  }

  Viande.create(req.body)
    .then(viande => res.json({ message: 'Viande created', data: viande }))
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// PATCH pour modifier une viande
router.patch('/:id', (req, res) => {
  let viandeId = parseInt(req.params.id);

  if (!viandeId) {
    return res.status(400).json({ message: 'Missing Parameter' });
  }

  Viande.findOne({ where: { id: viandeId } })
    .then(viande => {
      if (viande === null) {
        return res.status(404).json({ message: 'This viande does not exist!' });
      }

      Viande.update(req.body, { where: { id: viande } })
        .then(() => res.json({ message: 'Viande updated' }))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
    })
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// DELETE pour supprimer une viande
router.delete('/:id', (req, res) => {
  let viandeId = parseInt(req.params.id);

  if (!viandeId) {
    return res.status(400).json({ message: 'Missing Parameter' });
  }

  Viande.destroy({ where: { id: viandeId }, force: true })
    .then(() => res.status(204).json({}))
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

module.exports = router;

const express = require('express');
const Pate = require('../models/pate');

let router = express.Router();

// GET toutes les pates
router.get('/', (req, res) => {
  Pate.findAll()
    .then(pates => res.json({ data: pates }))
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// GET une pate par ID
router.get('/:id', (req, res) => {
  let pateId = parseInt(req.params.id);

  if (!pateId) {
    return res.status(400).json({ message: "Missing Parameter" });
  }

  Pate.findOne({ where: { id: pateId } })
    .then(pate => {
      if (pate === null) {
        return res.status(404).json({ message: 'This pate does not exist!' });
      }
      return res.json({ data: pate });
    })
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// PUT pour créer une nouvelle pate
router.put('/', (req, res) => {
  const { menu_id, nom, ingredients, prix } = req.body;

  if (!menu_id || !nom || !ingredients || !prix) {
    return res.status(400).json({ message: 'Missing Data' });
  }

  Pate.create(req.body)
    .then(pate => res.json({ message: 'Pate created', data: pate }))
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// PATCH pour modifier une pate
router.patch('/:id', (req, res) => {
  let pateId = parseInt(req.params.id);

  if (!pateId) {
    return res.status(400).json({ message: 'Missing Parameter' });
  }

  Pate.findOne({ where: { id: pateId } })
    .then(pate => {
      if (pate === null) {
        return res.status(404).json({ message: 'This pate does not exist!' });
      }

      Pate.update(req.body, { where: { id: pateId } })
        .then(() => res.json({ message: 'Pate updated' }))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
    })
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// DELETE pour supprimer une pate
router.delete('/:id', (req, res) => {
  let pateId = parseInt(req.params.id);

  if (!pateId) {
    return res.status(400).json({ message: 'Missing Parameter' });
  }

  Pate.destroy({ where: { id: pateId }, force: true })
    .then(() => res.status(204).json({}))
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

module.exports = router;

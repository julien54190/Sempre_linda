const express = require('express');
const Boisson = require('../models/boisson');

let router = express.Router();

// GET toutes les Boissons
router.get('/', (req, res) => {
  Boisson.findAll()
    .then(boissons => res.json({ data: boissons }))
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// GET une boisson par ID
router.get('/:id', (req, res) => {
  let boissonId = parseInt(req.params.id);

  if (!boissonId) {
    return res.status(400).json({ message: "Missing Parameter" });
  }

  Boisson.findOne({ where: { id: boissonId } })
    .then(boisson => {
      if (boisson === null) {
        return res.status(404).json({ message: 'This boisson does not exist!' });
      }
      return res.json({ data: entree });
    })
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// PUT pour créer une nouvelle boisson
router.put('/', (req, res) => {
  const { menu_id, nom, prix } = req.body;

  if (!menu_id || !nom || !prix) {
    return res.status(400).json({ message: 'Missing Data' });
  }

  Boisson.create(req.body)
    .then(entree => res.json({ message: 'Boisson created', data: entree }))
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// PATCH pour modifier une boisson
router.patch('/:id', (req, res) => {
  let boissonId = parseInt(req.params.id);

  if (!boissonId) {
    return res.status(400).json({ message: 'Missing Parameter' });
  }

  Boisson.findOne({ where: { id: boissonId } })
    .then(boisson => {
      if (boisson === null) {
        return res.status(404).json({ message: 'This boisson does not exist!' });
      }

      Boisson.update(req.body, { where: { id: boissonId } })
        .then(() => res.json({ message: 'Boisson updated' }))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
    })
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// DELETE pour supprimer une Boisson
router.delete('/:id', (req, res) => {
  let boissonId = parseInt(req.params.id);

  if (!boissonId) {
    return res.status(400).json({ message: 'Missing Parameter' });
  }

  Boisson.destroy({ where: { id: boissonId }, force: true })
    .then(() => res.status(204).json({}))
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

module.exports = router;

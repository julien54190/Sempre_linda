const express = require('express');
const Poisson = require('../models/poisson');

let router = express.Router();

// GET toutes les poissons
router.get('/', (req, res) => {
  Poisson.findAll()
    .then(poissons => res.json({ data: poissons }))
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// GET un poisson par ID
router.get('/:id', (req, res) => {
  let poissonId = parseInt(req.params.id);

  if (!poissonId) {
    return res.status(400).json({ message: "Missing Parameter" });
  }

  Poisson.findOne({ where: { id: poissonId } })
    .then(poisson => {
      if (poisson === null) {
        return res.status(404).json({ message: 'This poisson does not exist!' });
      }
      return res.json({ data: poisson });
    })
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// PUT pour créer un nouveau poisson
router.put('/', (req, res) => {
  const { menu_id, nom, ingredients, prix } = req.body;

  if (!menu_id || !nom || !ingredients || !prix) {
    return res.status(400).json({ message: 'Missing Data' });
  }

  Poisson.create(req.body)
    .then(entree => res.json({ message: 'Poisson created', data: entree }))
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// PATCH pour modifier un Poisson
router.patch('/:id', (req, res) => {
  let poissonId = parseInt(req.params.id);

  if (!poissonId) {
    return res.status(400).json({ message: 'Missing Parameter' });
  }

  Poisson.findOne({ where: { id: poissonId } })
    .then(poisson => {
      if (poisson === null) {
        return res.status(404).json({ message: 'This poisson does not exist!' });
      }

      poisson.update(req.body, { where: { id: poissonId } })
        .then(() => res.json({ message: 'Poisson updated' }))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
    })
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// DELETE pour supprimer un poisson
router.delete('/:id', (req, res) => {
  let poissonId = parseInt(req.params.id);

  if (!poissonId) {
    return res.status(400).json({ message: 'Missing Parameter' });
  }

  Poisson.destroy({ where: { id: poissonId }, force: true })
    .then(() => res.status(204).json({}))
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

module.exports = router;

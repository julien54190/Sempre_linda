const express = require('express');
const Reservation = require('../models/reservation');
const User = require('../models/user');

let router = express.Router();

// GET pour récupérer toutes les réservations avec les informations utilisateur
router.get('/', (req, res) => {
  Reservation.findAll({ include: User })
    .then(reservations => res.json({ data: reservations }))
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// GET pour récupérer une réservation par ID avec les informations utilisateur
router.get('/:id', (req, res) => {
  let reservationId = parseInt(req.params.id);

  if (!reservationId) {
    return res.status(400).json({ message: "Missing Parameter" });
  }

  Reservation.findOne({ where: { id: reservationId }, include: User })
    .then(reservation => {
      if (reservation === null) {
        return res.status(404).json({ message: 'This reservation does not exist!' });
      }
      return res.json({ data: reservation });
    })
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// PUT pour ajouter/créer une réservation
router.put('/', (req, res) => {
  const { user_id, nom, Nb_personne, Date, heure } = req.body;

  if (!user_id || !nom || !Nb_personne || !Date || !heure) {
    return res.status(400).json({ message: 'Missing Data' });
  }

  User.findOne({ where: { id: user_id } })
    .then(user => {
      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }

      Reservation.create(req.body)
        .then(reservation => res.json({ message: 'Reservation created', data: reservation }))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
    })
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// PATCH pour la modification
router.patch('/:id', (req, res) => {
  let reservationId = parseInt(req.params.id);

  if (!reservationId) {
    return res.status(400).json({ message: 'Missing Parameter' });
  }

  Reservation.findOne({ where: { id: reservationId } })
    .then(reservation => {
      if (reservation === null) {
        return res.status(404).json({ message: 'This reservation does not exist!' });
      }

      Reservation.update(req.body, { where: { id: reservationId } })
        .then(() => res.json({ message: 'Reservation updated' }))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
    })
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// POST pour restaurer une réservation supprimée
router.post('/untrash/:id', (req, res) => {
  let reservationId = parseInt(req.params.id);

  if (!reservationId) {
    return res.status(400).json({ message: 'Missing Parameter' });
  }

  Reservation.restore({ where: { id: reservationId } })
    .then(() => res.status(204).json({}))
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// DELETE pour supprimer une réservation mais la mettre en corbeille
router.delete('/trash/:id', (req, res) => {
  let reservationId = parseInt(req.params.id);

  if (!reservationId) {
    return res.status(400).json({ message: 'Missing Parameter' });
  }

  Reservation.destroy({ where: { id: reservationId } })
    .then(() => res.status(204).json({}))
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// DELETE pour supprimer complètement une réservation
router.delete('/:id', (req, res) => {
  let reservationId = parseInt(req.params.id);

  if (!reservationId) {
    return res.status(400).json({ message: 'Missing Parameter' });
  }

  Reservation.destroy({ where: { id: reservationId }, force: true })
    .then(() => res.status(204).json({}))
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

module.exports = router;

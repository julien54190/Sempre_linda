const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { adminCheck } = require('../middleware/auth');

let router = express.Router();

// Route pour créer un utilisateur
router.put('/', async (req, res) => {
  const { nom, prenom, email, password, numero_domicile, rue_domicile, ville_domicile, zip, isAdmin } = req.body;

  if (!nom || !prenom || !numero_domicile || !rue_domicile || !ville_domicile || !zip || !email || !password) {
    return res.status(400).json({ message: 'Missing Data' });
  }

  try {
    const user = await User.findOne({ where: { email: email }, raw: true });
    if (user !== null) {
      return res.status(400).json({ message: `The user ${nom} already exists!` });
    }

    // Vérifier s'il existe déjà un administrateur
    const adminCount = await User.count({ where: { isAdmin: true } });
    if (isAdmin && adminCount > 0) {
      return res.status(400).json({ message: 'An administrator already exists' });
    }

    const hash = await bcrypt.hash(password, parseInt(process.env.BCRYPT_SALT_ROUND));
    const newUser = await User.create({ nom, prenom, email, password: hash, numero_domicile, rue_domicile, ville_domicile, zip, isAdmin });
    res.json({ message: 'User created', data: newUser });
  } catch (err) {
    res.status(500).json({ message: 'Database Error', error: err });
  }
});

// Route pour récupérer tous les utilisateurs
router.get('/', (req, res) => {
  User.findAll()
    .then(users => res.json({ data: users }))
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// Route pour récupérer un utilisateur par ID
router.get('/:id', (req, res) => {
  let userId = parseInt(req.params.id);

  if (!userId) {
    return res.status(400).json({ message: 'Missing Parameter' });
  }

  User.findOne({ where: { id: userId }, raw: true })
    .then(user => {
      if (user === null) {
        return res.status(404).json({ message: 'This user does not exist!' });
      }
      return res.json({ data: user });
    })
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// Route pour modifier un utilisateur
router.patch('/:id', adminCheck, (req, res) => {
  let userId = parseInt(req.params.id);

  if (!userId) {
    return res.status(400).json({ message: 'Missing parameter' });
  }

  User.findOne({ where: { id: userId }, raw: true })
    .then(user => {
      if (user === null) {
        return res.status(404).json({ message: 'This user does not exist!' });
      }

      User.update(req.body, { where: { id: userId } })
        .then(() => res.json({ message: 'User updated' }))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
    })
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// Route pour authentifier l'utilisateur et obtenir un token
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Missing Data' });
  }

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Authenticated', token });
  } catch (err) {
    res.status(500).json({ message: 'Authentication Error', error: err });
  }
});

// Route pour restaurer un utilisateur supprimé
router.post('/untrash/:id', adminCheck, (req, res) => {
  let userId = parseInt(req.params.id);

  if (!userId) {
    return res.status(400).json({ message: 'Missing parameter' });
  }

  User.restore({ where: { id: userId } })
    .then(() => res.status(204).json({}))
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// Route pour supprimer (envoyer à la corbeille) un utilisateur
router.delete('/trash/:id', adminCheck, (req, res) => {
  let userId = parseInt(req.params.id);

  if (!userId) {
    return res.status(400).json({ message: 'Missing Parameter' });
  }

  User.destroy({ where: { id: userId } })
    .then(() => res.status(204).json({}))
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

// Route pour supprimer complètement un utilisateur
router.delete('/:id', adminCheck, (req, res) => {
  let userId = parseInt(req.params.id);

  if (!userId) {
    return res.status(400).json({ message: 'Missing Parameter' });
  }

  User.destroy({ where: { id: userId }, force: true })
    .then(() => res.status(204).json({}))
    .catch(err => res.status(500).json({ message: 'Database Error', error: err }));
});

module.exports = router;

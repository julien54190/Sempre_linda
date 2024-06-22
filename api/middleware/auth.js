const jwt = require('jsonwebtoken');
const User = require('../models/user');



const adminCheck = async (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.id);
    if (!user || !user.isAdmin) {
      return res.status(403).json({ message: 'Requires Admin Role' });
    }
    req.user = user; // Ajouter l'utilisateur à la requête pour une utilisation ultérieure
    next();
  } catch (err) {
    return res.status(500).json({ message: 'Failed to authenticate token', error: err });
  }
};

module.exports = { adminCheck };

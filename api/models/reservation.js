const { DataTypes } = require('sequelize');
const DB = require('../db.config');
const User = require('./user');

const Reservation = DB.define('Reservation', {
  id: {
    type: DataTypes.INTEGER(10),
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER(10),
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  nom: {
    type: DataTypes.STRING(100),
    defaultValue: '',
    allowNull: false
  },
  Nb_personne: {
    type: DataTypes.STRING(100),
    defaultValue: '',
    allowNull: false
  },
  Date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  heure: {
    type: DataTypes.TIME,
    allowNull: false
  }
}, { paranoid: true });

User.hasMany(Reservation, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Reservation.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Reservation;

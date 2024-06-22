const { DataTypes } = require('sequelize');
const DB = require('../db.config');

const User = DB.define('User', {
  id: {
    type: DataTypes.INTEGER(10),
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  nom: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  prenom: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  numero_domicile: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  rue_domicile: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  ville_domicile: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  zip: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true
    },
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(64),
    allowNull: false
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  paranoid: true
});

module.exports = User;

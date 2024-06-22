const { DataTypes } = require('sequelize');
const DB = require('../db.config');

const Menu = DB.define('Menu', {
  id: {
    type: DataTypes.INTEGER(10),
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
}, {
  paranoid: true
});

module.exports = Menu;

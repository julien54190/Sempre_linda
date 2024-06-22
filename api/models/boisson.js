const { DataTypes } = require('sequelize');
const DB = require('../db.config');
const Menu = require('./menu');

const Boisson = DB.define('Boisson', {
  id: {
    type: DataTypes.INTEGER(10),
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  menu_id: {
    type: DataTypes.INTEGER(10),
    allowNull: false,
    references: {
      model: 'Menus',
      key: 'id'
    }
  },
  nom: {
    type: DataTypes.STRING(100),
    defaultValue: '',
    allowNull: false
  },
  prix: {
    type: DataTypes.STRING(100),
    defaultValue: '',
    allowNull: false
  },
}, {
  paranoid: true
});

Menu.hasMany(Boisson, { foreignKey: 'menu_id', sourceKey: 'id' });
Boisson.belongsTo(Menu, { foreignKey: 'menu_id', targetKey: 'id' });

module.exports = Boisson;

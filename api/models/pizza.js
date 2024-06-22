const { DataTypes } = require('sequelize');
const DB = require('../db.config');
const Menu = require('./menu');

const Pizza = DB.define('Pizza', {
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
  ingredients: {
    type: DataTypes.TEXT,
    defaultValue: '',
    allowNull: false,
  },
  prix: {
    type: DataTypes.STRING(100),
    defaultValue: '',
    allowNull: false
  },
}, {
  paranoid: true
});

Menu.hasMany(Pizza, { foreignKey: 'menu_id', sourceKey: 'id' });
Pizza.belongsTo(Menu, { foreignKey: 'menu_id', targetKey: 'id' });

module.exports = Pizza;

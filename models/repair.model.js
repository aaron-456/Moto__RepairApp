const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const Repair = db.define('reeeee', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM(
      'pending',
      'completed',
      'canceled'
    ),
    defaultValue: 'pending',
    allowNull: false,
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
});

module.exports = Repair;

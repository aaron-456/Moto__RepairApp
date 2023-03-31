const { DataTypes } = require('sequelize');
const { db } = require('./../database/config');

const User = db.define('users', {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('user', 'employee'),
    allowNull: false,
    defaultValue: 'user',
  },
  status: {
    type: DataTypes.ENUM('available', 'disable'),
    defaultValue: 'available',
    allowNull: false,
  },
});

module.exports = User;

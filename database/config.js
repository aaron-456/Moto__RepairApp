const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '123456',
  database: 'userandrepairs',
  port: 5432,
  logging: false,
});

module.exports = { db };

const express = require('express');
const authController = require('../controllers/auth.controller');

const routerAuth = express.Router();

routerAuth.post('/login', authController.loginUser);

routerAuth.post('/', authController.create);

module.exports = routerAuth;

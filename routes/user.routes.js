const express = require('express');

const useController = require('../controllers/user.controller');
const userMiddleware = require('../middlewares/user.middleware');
const authMiddleware = require('./../middlewares/auth.middlewares');

const routerUser = express.Router();
routerUser.use(authMiddleware.protect);
routerUser.route('/').get(useController.findAll);

routerUser
  .route('/:id')
  .get(userMiddleware.validExistUser, useController.findOne)
  .patch(
    userMiddleware.validExistUser,
    authMiddleware.protectAccountOwner,
    useController.update
  )
  .delete(
    userMiddleware.validExistUser,
    authMiddleware.protectAccountOwner,
    useController.delete
  );

module.exports = routerUser;

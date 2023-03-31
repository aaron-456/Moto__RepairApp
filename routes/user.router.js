const express = require('express');
const router = express.Router();
const useController = require('./../controllers/user.controller');
const userMiddleware = require('./../middlewares/user.middlewares');

router
  .route('/')
  .get(useController.findAll)
  .post(useController.create);

router
  .route('/:id')
  .get(userMiddleware.validUser, useController.findOne)
  .patch(userMiddleware.validUser, useController.update)
  .delete(userMiddleware.validUser, useController.delete);

module.exports = router;

const express = require('express');
const authMiddleware = require('./../middlewares/auth.middlewares');
const repairController = require('../controllers/repair.controller');
const repairMiddleware = require('../middlewares/repairs.middlewares');
const userMiddleware = require('../middlewares/user.middleware');

const routerRepair = express.Router();

routerRepair.use(authMiddleware.protect);
routerRepair.use(authMiddleware.restrictTo('employee'));

routerRepair
  .route('/')
  .get(repairController.findAllRepairs)
  .post(userMiddleware.validExistUserbyId, repairController.createAppointment);

routerRepair
  .route('/:id')
  .get(repairMiddleware.validRepairByid, repairController.findOneRepair)
  .patch(repairMiddleware.validRepair, repairController.updateRepair)
  .delete(repairMiddleware.validRepair, repairController.deleteRepair);

module.exports = routerRepair;

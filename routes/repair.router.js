const repairController = require('../controllers/repair.controller');
const express = require('express');
const router = express.Router();
const repairMiddleware = require('./../middlewares/repairs.middlewares');

router
  .route('/')
  .get(repairController.findAllRepairs)
  .post(repairController.createAppointment);

router
  .route('/:id')
  .get(
    repairMiddleware.validRepair,
    repairController.findOneRepair
  )
  .patch(
    repairMiddleware.validRepair,
    repairController.updateRepair
  )
  .delete(
    repairMiddleware.validRepair,
    repairController.deleteRepair
  );

module.exports = router;

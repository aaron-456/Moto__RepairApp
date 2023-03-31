const Repair = require('../models/repair.model');

exports.validRepair = async (req, res, next) => {
  const { id } = req.params;

  const repair = await Repair.findOne({
    where: {
      id,
      status: 'pending',
    },
  });

  if (!repair) {
    return res.status(404).json({
      status: 'error',
      message: `this item was not found`,
    });
  }

  req.repair = repair;
  next();
};

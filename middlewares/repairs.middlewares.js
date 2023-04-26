const Repair = require('../models/repair.model');
const User = require('../models/user.model');

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

exports.validRepairByid = async (req, res, next) => {
  const { id } = req.params;

  const repair = await Repair.findOne({
    where: {
      id,
      status: 'pending',
    },

    include: [
      {
        model: User,
        attributes: {
          exclude: ['password', 'status'],
        },
      },
    ],
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

const Repair = require('../models/repair.model');

exports.findAllRepairs = async (req, res) => {
  const repairs = await Repair.findAll({
    where: {
      status: 'pending',
    },
  });

  res.status(200).json({
    status: 'success',
    message: 'Your request has been made successfully',
    results: repairs.length,
    repairs,
  });
};

exports.findOneRepair = async (req, res) => {
  const { repair } = req;

  res.json({
    status: 'success',
    message: 'Your request has been made successfully',
    repair,
  });
};

exports.createAppointment = async (req, res) => {
  const { date, status, userId } = req.body;

  const repairs = await Repair.create({
    date,
    status,
    userId,
  });

  res.status(201).json({
    status: 'success',
    message: 'Your request has been made successfully',
    repairs,
  });
};

exports.updateRepair = async (req, res) => {
  const { id } = req.params;

  const repair = await Repair.findOne({
    where: {
      id,
      status: 'pending',
    },
  });
  // await repair.update({
  //   status,
  // });

  console.log(req.params);
  res.status(200).json({
    status: 'success',
    message:
      'Your application has been updated successfully',
  });

  const { status } = req.body;

  await repair.update({ status: 'completed' });
  res.json({
    status,
  });
};

exports.deleteRepair = async (req, res) => {
  const { repair } = req;

  await repair.update({ status: 'canceled' });
  res.json({
    message: 'you have canceled your repair',
  });
};

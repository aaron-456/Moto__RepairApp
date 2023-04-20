const User = require('./../models/user.model');
const catchAsync = require('../utils/catchAsync');

exports.findOne = catchAsync(async (req, res) => {
  const { user } = req;

  res.status(200).json({
    status: 'Succes',
    message: 'user found✔',
    user: {
      id: user.id,
      name: user.username,
      email: user.email,
      role: user.role,
    },
  });
});

exports.findAll = catchAsync(async (req, res) => {
  const users = await User.findAll({
    where: {
      status: 'available',
    },
    attributes: ['id', 'username', 'email', 'role'], // Excluye la propiedad "password"
  });

  res.status(200).json({
    status: 'success',
    results: users.length,
    users: users,
  });
});

exports.update = catchAsync(async (req, res) => {
  const { username, email } = req.body;
  const { id } = req.params;

  const user = await User.findOne({
    where: {
      id,
      status: 'available',
    },
  });
  await user.update({ username, email });

  return res.status(200).json({
    status: 'success',
    message: 'the user has been updated',
    users: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
});

exports.delete = catchAsync(async (req, res) => {
  const { user } = req;

  await user.update({ status: 'disable' });
  res.json({
    message: 'The user has been deleted',
  });
});

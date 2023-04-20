const User = require('../models/user.model');
const catchAsync = require('../utils/catchAsync');
const generateJWT = require('../utils/jwt');
const bcrypt = require('bcryptjs');

exports.create = catchAsync(async (req, res) => {
  const { username, email, password, role } = req.body;

  console.log(username);

  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    username,
    email: email.toLowerCase(),
    password: encryptedPassword,
    role,
  });

  const token = await generateJWT(user.id);

  return res.status(201).json({
    status: 'succes',
    message: 'The user has been created! ✔',
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
});

exports.loginUser = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: {
      email: email.toLowerCase(),
      status: 'available',
    },
  });

  const token = await generateJWT(user.id);

  res.status(200).json({
    status: 'success',
    message: 'User login ✔',
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
});

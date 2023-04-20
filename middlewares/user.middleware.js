const User = require('../models/user.model');

exports.validExistUser = async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findOne({
    where: {
      id,
      status: 'available',
    },
  });

  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: 'the user not found',
    });
  }
  req.user = user;
  next();
};

exports.validEmail = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: {
      email: email.toLowerCase(),
      status: 'available',
    },
  });

  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: 'the email not found',
    });
  }

  req.user = user;
  next();
};

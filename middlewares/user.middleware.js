const User = require('../models/user.model');
const catchAsync = require('../utils/catchAsync');

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

exports.validExistUserbyId = catchAsync(async (req, res, next) => {
  const { userId } = req.body;

  const user = await User.findOne({
    where: {
      id: userId,
      status: 'available',
    },
  });

  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: `The user ${userId} not found`,
    });
  }

  req.body.userId = userId;
  next();
});

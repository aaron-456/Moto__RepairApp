const User = require('./../models/user.model');

exports.findOne = async (req, res) => {
  const { user } = req;

  res.status(200).json({
    status: 'Succes',
    message: 'user found✔',
    user,
  });
};

exports.findAll = async (req, res) => {
  try {
    const users = await User.findAll({
      where: {
        status: 'available',
      },
    });

    res.status(200).json({
      status: 'success',
      results: users.length,
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong',
      error,
    });
  }
};

exports.create = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await User.create({
      username,
      email,
      password,
    });

    res.status(201).json({
      status: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Your request failed ❌',
    });
  }
};

exports.update = async (req, res) => {
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
  });
};

exports.delete = async (req, res) => {
  const { user } = req;

  await user.update({ status: 'disable' });
  res.json({
    message: 'The user has been deleted',
  });
};

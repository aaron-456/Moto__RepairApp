const express = require('express');
const morgan = require('morgan');
const userRouter = require('./routes/user.routes');
const repairRouter = require('./routes/repair.routes');
const authRouter = require('./routes/auth.routes');
const globalErrorHandler = require('./controllers/error.controller');
const AppError = require('./utils/appError');

const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/repairs', repairRouter);
app.use('/api/v1/auth', authRouter);

app.all('*', (req, res, next) => {
  return next(
    new AppError(`cannot find ${req.originalUrl} on this server!`, 404)
  );
});

app.use(globalErrorHandler);
module.exports = app;

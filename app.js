const express = require('express');
const userRouter = require('./routes/user.routes');
const repairRouter = require('./routes/repair.routes');
const authRouter = require('./routes/auth.routes');

const app = express();

app.use(express.json());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/repairs', repairRouter);
app.use('/api/v1/auth', authRouter);

module.exports = app;

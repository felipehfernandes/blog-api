const express = require('express');

const loginRouter = require('./login.routes');
const userRouter = require('./user.routes');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/user', userRouter);

module.exports = router;
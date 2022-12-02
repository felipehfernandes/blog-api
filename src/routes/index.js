const express = require('express');

const loginRouter = require('./login.routes');
const userRouter = require('./user.routes');
const categoryRouter = require('./category.routes');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/categories', categoryRouter);

module.exports = router;
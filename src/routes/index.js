const express = require('express');

const loginRouter = require('./login.routes');
const userRouter = require('./user.routes');
const categoryRouter = require('./category.routes');
const postRouter = require('./post.routes');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/categories', categoryRouter);
router.use('/post', postRouter);

module.exports = router;
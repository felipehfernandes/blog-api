const express = require('express');

const loginRouter = require('./login.routes');

const router = express.Router();

router.use('/login', loginRouter);

module.exports = router;
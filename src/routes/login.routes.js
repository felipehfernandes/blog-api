const express = require('express');

const loginController = require('../controllers/user.controller');
const loginMiddleware = require('../middlewares/login.middleware');

const router = express.Router();

router.post('/', loginMiddleware, loginController.login);

module.exports = router;
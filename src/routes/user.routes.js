const express = require('express');

const userController = require('../controllers/user.controller');
const authenticationMiddleware = require('../middlewares/authentication.middleware');

const router = express.Router();

router.post('/', userController.createUser);
router.get('/', authenticationMiddleware, userController.getAll);
router.get('/:id', authenticationMiddleware, userController.getById);

module.exports = router;
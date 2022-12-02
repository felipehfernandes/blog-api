const express = require('express');

const categoryController = require('../controllers/category.controller');
const categoryMiddleware = require('../middlewares/categoryName.middleware');
const authenticationMiddleware = require('../middlewares/authentication.middleware');

const router = express.Router();

router.post('/', authenticationMiddleware, categoryMiddleware, categoryController.createCategory);
router.get('/', authenticationMiddleware, categoryController.getAll);

module.exports = router;
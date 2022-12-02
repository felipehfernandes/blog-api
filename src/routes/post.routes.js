const express = require('express');

const postController = require('../controllers/post.controller');
const postMiddleware = require('../middlewares/post.middleware');
const authenticationMiddleware = require('../middlewares/authentication.middleware');

const router = express.Router();

router.post('/', authenticationMiddleware, postMiddleware, postController.createPost);
router.get('/', authenticationMiddleware, postController.getAll);

module.exports = router;
const postService = require('../services/post.services');

const createPost = async (req, res) => {
    const post = req.body;

    const token = req.header('Authorization');

    const { type, message } = await postService.createPost(post, token);

    if (type) {
        return res.status(400).json({ message });
    }

    return res.status(201).json(message);
};

module.exports = {
    createPost,
};
const {
    BlogPost,
    PostCategory,
    sequelize,
    User,
    Category,
} = require('../models');
const { verifyToken } = require('../auth/jsonWebFunc');
const { verifyId } = require('../validations/input.validations');

const createPost = async ({ title, content, categoryIds }, token) => {
  const validateId = await verifyId(categoryIds);
  if (!validateId) return { type: 'NOT_FOUND', message: 'one or more "categoryIds" not found' };

  try {
    const { data: { id } } = verifyToken(token);
    const result = await sequelize.transaction(async (t) => {
      const post = await BlogPost.create({ title, content, userId: id }, { transaction: t });
      const postId = post.dataValues.id;
      const catIds = categoryIds
        .map((categoryId) => PostCategory.create({ postId, categoryId }, { transaction: t }));
      await Promise.all(catIds);
      return post;
    });
    
    return { type: null, message: result };
  } catch (e) {
    console.log(e);
    throw e; 
  }
};

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return posts;
};

module.exports = {
    createPost,
    getAll,
};
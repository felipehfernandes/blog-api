module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('CourseModule', {}, {
    timestamps: false,
    underscored: true,
    tableName: 'posts_categories',
  });

  PostCategory.associate = ({ blogPosts, categories }) => {
    blogPosts.belongsToMany(categories, {
      foreignKey: 'post_id',
      as: 'categories',
      through: PostCategory,
      otherKey: 'category_id',
    });
    categories.belongsToMany(blogPosts, {
      foreignKey: 'category_id',
      as: 'courses',
      through: PostCategory,
      otherKey: 'post_id',
    });
  };
  return PostCategory;
};
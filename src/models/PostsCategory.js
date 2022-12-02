module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {}, {
    timestamps: false,
    underscored: true,
    tableName: 'posts_categories',
  });

  PostCategory.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      foreignKey: 'post_id',
      as: 'categories',
      through: PostCategory,
      otherKey: 'category_id',
    });
    Category.belongsToMany(BlogPost, {
      foreignKey: 'category_id',
      as: 'courses',
      through: PostCategory,
      otherKey: 'post_id',
    });
  };
  return PostCategory;
};
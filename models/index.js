const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// ====================================
// If we have Model A and Model B
// A.hasMany(B, {...}) and B.belongsTo(A) establish the same
//    parent-child relationship in database
// As far as database foreign keys are concerned, using both
//    or just one of them accomplish the same relationship because
//    only B has the foreign key set up to reference A primany key (id)
// As far as sequelize is concerned, there are implications using
//    'include' based on whether you use both or only one of them.
// Look into Sequelize docs for details on how to use 'include'
// ====================================

// Establish many-to-one relationship with Post
// Optional: remove the following statement to simplify the code
User.hasMany(Post, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

// Establish one-to-many relastionship with User
Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

// Establish many-to-one relationship with Comment
// Optional: remove the following statement to simplify the code
User.hasMany(Comment, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

// Establish many-to-one relationship with User
Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

// Establish one-to-many relationship with Comment
Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

// Establish one-to-many relationship with Post
// Optional: remove the following statement to simplify the code
Comment.belongsTo(Post, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

module.exports = {
  User,
  Comment,
  Post
};
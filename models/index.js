const User = require('./User');
const Recipes = require('./Recipes');
const Week = require('./Week');

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
User.hasMany(Recipes, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

// Establish one-to-many relastionship with User
Recipes.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

// Establish many-to-one relationship with Comment
// Optional: remove the following statement to simplify the code
User.hasMany(Week, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

// Establish many-to-one relationship with User
Week.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

// Establish one-to-many relationship with Comment
Week.hasMany(Recipes, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

// Establish one-to-many relationship with Post
// Optional: remove the following statement to simplify the code
Recipes.belongsTo(Week, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

module.exports = {
  User,
  Week,
  Recipes
};
const User = require('./User');
const Recipe = require('./Recipe');
const UserRecipe = require('./UserRecipe');

User.hasMany(UserRecipe, {
  foreignKey: 'userId',
  onDelete: 'SET NULL'
});

Recipe.hasMany(UserRecipe, {
  foreignKey: 'recipeId',
  onDelete: 'SET NULL'
});

UserRecipe.belongsTo(User,{
  foreignKey: 'userId'
});

UserRecipe.belongsTo(Recipe,{
  foreignKey: 'recipeId'
});

module.exports = {
  User,
  Recipe,
  UserRecipe
};
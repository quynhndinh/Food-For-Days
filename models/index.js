const User = require('./User');
const Recipe = require('./Recipe');
const UserRecipe = require('./UserRecipe');

User.hasMany(UserRecipe, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Recipe.hasMany(UserRecipe, {
  foreignKey: 'recipe_id',
  onDelete: 'SET NULL'
});

UserRecipe.belongsTo(User,{
  foreignKey: 'user_id'
});

UserRecipe.belongsTo(Recipe,{
  foreignKey: 'recipe_id'
});

module.exports = {
  User,
  Recipe,
  UserRecipe
};
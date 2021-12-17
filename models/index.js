const User = require('./User');
<<<<<<< HEAD
const Recipe = require('./UserRecipe');
const UserRecipe = require('./UserRecipe')
=======
const Recipe = require('./Recipe');
const UserRecipe = require('./UserRecipe');
>>>>>>> 9d66d42fd4912039f871aa92036ad781ff2adab5

User.hasMany(UserRecipe, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Recipe.hasMany(UserRecipe, {
  foreignKey: 'recipe_id',
  onDelete: 'SET NULL'
});

UserRecipe.belongsTo(User,{
  foreignKey: 'user_id' // never care about onDelete with children, just parents
});

UserRecipe.belongsTo(Recipe,{
  foreignKey: 'recipe_id'
});

module.exports = {
  User,
  Recipe,
  UserRecipe
};
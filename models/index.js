const User = require('./User');
const Recipes = require('./Recipes');

Recipes.belongsTo(User, {
  foreignKey: 'user_id',
})

User.hasMany(Recipes, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

module.exports = {
  User,
  Recipes
};
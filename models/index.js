const User = require('./User');
const Recipes = require('./Recipes');
const Week = require('./Week');

// Recipes belong to many Weeks
// week have many Recipes
// weeks belongs to a user
// user has one week 

Recipes.belongsToMany(Week, {
  foreignKey: 'week_id',
  onDelete: 'SET NULL'
})

Week.hasMany(Recipes, {
  foreignKey: 'week_id'
})

Week.belongsTo(User, {
  foreignKey: 'week_planner_id',
  onDelete: 'SET NULL'
})

User.HasOne(Week, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

module.exports = {
  User,
  Week,
  Recipes
};
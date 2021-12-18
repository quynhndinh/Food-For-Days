const sequelize = require("../config/config");
const { User, Recipe, UserRecipe } = require("../models");

const UserSeedData = require("./userData.json");
const RecipesSeedData = require("./recipesData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(UserSeedData, {
    individualHooks: true,
    returning: true,
  });

  const recipes = await Recipe.bulkCreate(RecipesSeedData);

  for (let i = 0; i < 10; i++) {
    await UserRecipe.create({
      userId: users[Math.floor(Math.random() * users.length)].id,
      recipeId: recipes[Math.floor(Math.random() * recipes.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();

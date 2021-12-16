const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Recipes extends Model {}

Recipes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    img: {
    },
    ingredients: {
    },
    dietary: {
    },
    readyinminutes: {
    },
    pairingText: {
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "recipes",
  }
);

module.exports = Recipes;

// {
//   cuisine: "italian",
//   title: "Meata balls",
//   image_url: "image.com"
//   recipe_url: "recipe.com"
//   servings: 4,
//   ready_in: 25
// }
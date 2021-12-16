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
    cuisine: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    source_url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    servings: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ready_in: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    calories: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // week_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "week",
    //     key: "id",
    //     unique: false
    //   }
    // }
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
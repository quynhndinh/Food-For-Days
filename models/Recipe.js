const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

class Recipe extends Model {}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
    sourceUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    servings: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    readyIn: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    calories: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "recipe",
  }
);

module.exports = Recipe;
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Week extends Model {}

Week.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    sunday_recipes_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references:{
        model: "recipes",
        key: "id",
        unique: false
      },
    },
    monday_recipes_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references:{
        model: "recipes",
        key: "id",
        unique: false
      },
    },
    tuesday_recipes_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references:{
        model: "recipes",
        key: "id",
        unique: false
      },
    },
    wednesday_recipes_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references:{
        model: "recipes",
        key: "id",
        unique: false
      },
    },
    thursday_recipes_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references:{
        model: "recipes",
        key: "id",
        unique: false
      },
    },
    friday_recipes_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references:{
        model: "recipes",
        key: "id",
        unique: false
      },
    },
    saturday_recipes_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references:{
        model: "recipes",
        key: "id",
        unique: false
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
        unique: true
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "week",
  }
);

module.exports = Week;

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
    sunday_recipes_id: {},
    monday_recipes_id: {},
    tuesday_recipes_id: {},
    wednesday_recipes_id: {},
    thursday_recipes_id: {},
    friday_recipes_id: {},
    saturday_recipes_id: {},
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

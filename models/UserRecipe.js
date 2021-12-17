const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

class UserRecipe extends Model {}

UserRecipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
        unique: false
      }
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
        unique: false
    },
  },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: "user",
    }
  );

module.exports = UserRecipe;
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

class UserRecipe extends Model {}

UserRecipe.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		userId: {
			type: DataTypes.INTEGER,
			references: {
				model: 'user',
				key: 'id',
				unique: false
			}
		},
		recipeId: {
			type: DataTypes.INTEGER,
			references: {
				model: 'recipe',
				key: 'id',
				unique: false
			}
		}
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'user_recipe'
	}
);

module.exports = UserRecipe;
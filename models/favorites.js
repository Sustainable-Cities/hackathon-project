"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favorites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Favorites.belongsTo(models.User, {
        foreignKey: "user_id",
      });

      Favorites.belongsTo(models.Property, {
        foreignKey: "property_id",
      });
    }
  }
  Favorites.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      property_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "properties",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Favorites",
      tableName: "favorites",
    }
  );
  return Favorites;
};

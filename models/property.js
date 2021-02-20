"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Property.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      address: DataTypes.STRING,
      zip: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Property",
      tableName: "properties",
    }
  );
  return Property;
};

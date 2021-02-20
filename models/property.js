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
      Property.hasMany(models.Favorites, {
        foreignKey: "property_id",
      });
    }
  }
  Property.init(
    {
      ranking: DataTypes.STRING,
      owner_name: DataTypes.STRING,
      prop_name: DataTypes.STRING,
      prop_type: DataTypes.STRING,
      prop_use: DataTypes.STRING,
      year_built: DataTypes.STRING,
      address: DataTypes.STRING,
      zip: DataTypes.STRING,
      area_sqft: DataTypes.STRING,
      site_energy_usage_kbtu_sf: DataTypes.STRING,
      total_energy_usage_kbtu: DataTypes.STRING,
      percentage_elec: DataTypes.STRING,
      ghg_intensity: DataTypes.STRING,
      onsite_renewable_kwh: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Property",
      tableName: "properties",
    }
  );
  return Property;
};

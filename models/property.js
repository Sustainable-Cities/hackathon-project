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
      property_name: DataTypes.STRING,
      property_type: DataTypes.STRING,
      property_uses: DataTypes.STRING,
      year_built: DataTypes.STRING,
      address: DataTypes.STRING,
      zip: DataTypes.STRING,
      gross_area_sqft: DataTypes.STRING,
      site_energy_usage_kBTU_sf: DataTypes.STRING,
      total_site_energy_kBTU: DataTypes.STRING,
      percentage_electricity: DataTypes.STRING,
      ghg_intensity_kgCO2_sf: DataTypes.STRING,
      onsite_renewable_kWh: DataTypes.STRING,
      kbtu_from_electric: DataTypes.STRING,
      kwh_annual_usage: DataTypes.STRING,
      kwh_daily_usage: DataTypes.STRING,
      customer_btu_rank: DataTypes.STRING,
      customer_sqft_rank: DataTypes.STRING,
      customer_kwh_annual_rank: DataTypes.STRING,
      customer_kwh_daily_rank: DataTypes.STRING,
      customer_percent_electric_rank: DataTypes.STRING,
      customer_emissions_rank: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Property",
      tableName: "properties",
    }
  );
  return Property;
};

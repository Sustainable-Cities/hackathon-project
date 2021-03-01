"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("properties", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      property_name: {
        type: Sequelize.STRING,
      },
      property_type: {
        type: Sequelize.STRING,
      },
      property_uses: {
        type: Sequelize.STRING,
      },
      year_built: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      zip: {
        type: Sequelize.STRING,
      },
      lat: {
        type: Sequelize.STRING,
      },
      lng: {
        type: Sequelize.STRING,
      },
      gross_area_sqft: {
        type: Sequelize.STRING,
      },
      site_energy_usage_kbtu_sf: {
        type: Sequelize.STRING,
      },
      total_site_energy_kbtu: {
        type: Sequelize.STRING,
      },
      percentage_electricity: {
        type: Sequelize.STRING,
      },
      ghg_intensity_kgco2_sf: {
        type: Sequelize.STRING,
      },
      onsite_renewable_kwh: {
        type: Sequelize.STRING,
      },
      kbtu_from_electric: {
        type: Sequelize.STRING,
      },
      kwh_annual_usage: {
        type: Sequelize.STRING,
      },
      kwh_daily_usage: {
        type: Sequelize.STRING,
      },
      customer_btu_rank: {
        type: Sequelize.STRING,
      },
      customer_sqft_rank: {
        type: Sequelize.STRING,
      },
      customer_kwh_annual_rank: {
        type: Sequelize.STRING,
      },
      customer_kwh_daily_rank: {
        type: Sequelize.STRING,
      },
      customer_percent_electric_rank: {
        type: Sequelize.STRING,
      },
      customer_emissions_rank: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("properties");
  },
};

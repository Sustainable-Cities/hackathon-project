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
      ranking: {
        type: Sequelize.STRING,
      },
      owner_name: {
        type: Sequelize.STRING,
      },
      prop_name: {
        type: Sequelize.STRING,
      },
      prop_type: {
        type: Sequelize.STRING,
      },
      prop_use: {
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
      area_sqft: {
        type: Sequelize.STRING,
      },
      site_energy_usage_kbtu_sf: {
        type: Sequelize.STRING,
      },
      total_energy_usage_kbtu: {
        type: Sequelize.STRING,
      },
      percentage_elec: {
        type: Sequelize.STRING,
      },
      ghg_intensity: {
        type: Sequelize.STRING,
      },
      onsite_renewable_kwh: {
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

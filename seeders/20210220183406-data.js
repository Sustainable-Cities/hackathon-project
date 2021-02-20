"use strict";
const json = require("../data.json");
const obj = JSON.parse(json);

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return obj.values().map((el) => {
      // get lat and lon
      // set it too
      queryInterface.insertOne({
        name: el.PropertyName,
        type: el.PropertyType,
        address: el.Address,
        zip: el.ZIP,
        // lat:
        // lon:
      });
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

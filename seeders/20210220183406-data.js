"use strict";
const json = require("../data.json");
// const obj = JSON.parse(json);
// console.log(json);

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let arr = [];
    let val = Object.values(json);
    val.map((el) => {
      let obj = JSON.parse(el);
      // get lat and lon
      // set it too
      arr.push({
        name: obj.property_name,
        type: obj.property_type,
        address: obj.address,
        zip: obj.ZIP,
      });
      // lat:
      // lon:
    });
    queryInterface.bulkInsert("properties", arr);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("properties");
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

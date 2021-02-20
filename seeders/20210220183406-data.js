"use strict";
const json = require("../data.json");
const { geocodeAddress } = require("../geocoding");

const getLatLong = async (address) => {
  const geoCoded = await geocodeAddress(address);
  return { lat: geoCoded[0].latitude, lng: geoCoded[0].longitude };
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let arr = [];
    let val = Object.values(json);
    val.map((el) => {
      let obj = JSON.parse(el);
      // get lat and lon
      // set it too
      const latLong = getLatLong(obj.address);
      arr.push({
        name: obj.property_name,
        type: obj.property_type,
        address: obj.address,
        zip: obj.ZIP,
        lat: latLong.lat,
        lng: latLong.lng,
      });
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

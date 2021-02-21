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
      const latLong = getLatLong(obj.address);
      arr.push({
        ranking: obj.customer_rank,
        owner_name: obj.owner,
        lat: latLong.lat,
        lng: latLong.lng,
        prop_name: obj.property_name,
        prop_type: obj.property_type,
        prop_use: obj.property_use,
        year_buit: obj.year_buit,
        address: obj.address,
        zip: obj.ZIP,
        area_sqft: obj.gross_area_sqft,
        site_energy_usage_kbtu_sf: obj.site_energy_usage_kBTU / sf,
        total_energy_usage_kbtu: total_site_energy_kBTU,
        percentage_elec: percentage_electricity,
        ghg_intensity: GHG_intensity_kgCO2 / sf,
        onsite_renewable_kwh: onsite_renewable_kWh,
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

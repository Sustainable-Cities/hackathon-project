"use strict";
const json = require("../data.json");
const { geocodeAddress } = require("../geocoding");

const getLatLong = async (address) => {
  const geoCoded = await geocodeAddress(address);
  // console.log(geoCoded);
  if (geoCoded.length > 0) {
    return { lat: geoCoded[0].latitude, lng: geoCoded[0].longitude };
  }
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let arr = [];
    let val = Object.values(json);
    for (let i = 1660; i < 1700; i++) {
      let obj = JSON.parse(val[i]);
      const latLong = await getLatLong(obj.address);
      arr.push({
        ranking: obj.customer_BTU_rank,
        owner_name: obj.owner,
        lat: latLong ? latLong.lat : null,
        lng: latLong ? latLong.lng : null,
        prop_name: obj.property_name,
        prop_type: obj.property_type,
        prop_use: obj.property_uses,
        year_built: obj.year_built,
        address: obj.address,
        zip: obj.ZIP,
        area_sqft: obj.gross_area_sqft,
        site_energy_usage_kbtu_sf: obj.site_energy_usage_kBTU_sf,
        total_energy_usage_kbtu: obj.total_site_energy_kBTU,
        percentage_elec: obj.percentage_electricity,
        ghg_intensity: obj.GHG_intensity_kgCO2_sf,
        onsite_renewable_kwh: obj.onsite_renewable_kWh,
      });
    }
    await queryInterface.bulkInsert("properties", arr);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("properties");
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

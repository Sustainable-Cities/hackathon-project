"use strict";
const json = require("../data.json");
const { geocodeAddress } = require("../geocoding");

const getLatLong = async (address, zip) => {
  const geoCoded = await geocodeAddress(address, zip);
  console.log(geoCoded);
  if (geoCoded.length > 0) {
    return {
      lat: geoCoded[0].latitude,
      lng: geoCoded[0].longitude,
      address: geoCoded[0].formattedAddress,
    };
  }
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let arr = [];
    let val = Object.values(json);
    for (let i = 0; i < 20; i++) {
      let obj = JSON.parse(val[i]);
      const latLong = await getLatLong(obj.address, obj.ZIP);
      arr.push({
        property_name: obj.property_name,
        property_type: obj.property_type,
        property_uses: obj.property_uses,
        year_built: obj.year_built,
        address: latLong ? latLong.address : obj.address,
        zip: obj.ZIP,
        lat: latLong ? latLong.lat : null,
        lng: latLong ? latLong.lng : null,
        gross_area_sqft: obj.gross_area_sqft,
        site_energy_usage_kbtu_sf: obj.site_energy_usage_kBTU_sf,
        total_site_energy_kbtu: obj.total_site_energy_kBTU,
        percentage_electricity: obj.percentage_electricity,
        ghg_intensity_kgco2_sf: obj.GHG_intensity_kgCO2_sf,
        onsite_renewable_kwh: obj.onsite_renewable_kWh,
        kbtu_from_electric: obj.kBTU_from_electric,
        kwh_annual_usage: obj.kWh_annual_usage,
        kwh_daily_usage: obj.kWh_daily_usage,
        customer_btu_rank: obj.customer_BTU_rank,
        customer_sqft_rank: obj.customer_sqft_rank,
        customer_kwh_annual_rank: obj.customer_kWh_annual_rank,
        customer_kwh_daily_rank: obj.customer_kWh_daily_rank,
        customer_percent_electric_rank: obj.customer_percent_electric_rank,
        customer_emissions_rank: obj.customer_emissions_rank,
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

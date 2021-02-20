require("dotenv").config();
const NodeGeocoder = require("node-geocoder");
const googleKey = process.env.GOOGLEMAPS_KEY;
const geocoderOptions = {
  provider: "google",
  apiKey: `${googleKey}`,
};

const geocoder = NodeGeocoder(geocoderOptions);

const geocodeAddress = async (address) => {
  const resp = await geocoder.geocode(address);
  return resp;
};

module.exports = { geocodeAddress };

const { Property } = require("../models");

const GetData = async (req, res) => {
  try {
    const data = await Property.findAll();
    res.send(data);
  } catch (error) {
    throw error;
  }
};

module.exports = { GetData };

const { Favorites, User } = require("../models");

const CreateFav = async (req, res) => {
  try {
    const fav = await Favorites.create({
      user_id: req.params.user_id,
      property_id: req.params.property_id,
    });
    res.send(fav);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateFav,
};

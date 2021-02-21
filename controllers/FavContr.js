const { Favorites } = require("../models");

const CreateFav = async (req, res) => {
  try {
    const fav = await Favorites.create({
      user_id: req.params.user_id,
      property_id: req.params.prop_id,
    });
    res.send(fav);
  } catch (error) {
    throw error;
  }
};

const DeleteFav = async (req, res) => {
  try {
    await Favorites.destroy({ where: { id: parseInt(req.params.fav_id) } });
    res.send({ msg: "fav was deleted" });
  } catch (error) {
    throw error;
  }
};

const GetFavs = async (req, res) => {
  try {
    const favs = await Favorites.findAll({
      where: { user_id: parseInt(req.params.user_id) },
    });
    res.send(favs);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateFav,
  DeleteFav,
  GetFavs,
};

const Router = require("express").Router();
const contr = require("../controllers/FavContr");

Router.get("/:user_id", contr.GetFavs);
Router.post("/:user_id/:prop_id", contr.CreateFav);
Router.delete("/:fav_id", contr.DeleteFav);

module.exports = Router;

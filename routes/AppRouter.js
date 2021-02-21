const Router = require("express").Router();
const UserRouter = require("./UserRouter");
const PropRouter = require("./PropertiesRouter");
const FavRouter = require("./FavsRouter");

Router.use("/user", UserRouter);
Router.use("/properties", PropRouter);
Router.use("/fav", FavRouter);

module.exports = Router;

const Router = require("express").Router();
const UserRouter = require("./UserRouter");
const PropRouter = require("./PropertiesRouter");

Router.use("/user", UserRouter);
Router.use("/properties", PropRouter);

module.exports = Router;

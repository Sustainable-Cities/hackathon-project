const Router = require("express").Router();
const contr = require("../controllers/PropertiesContr");

Router.get("/", contr.GetData);

module.exports = Router;

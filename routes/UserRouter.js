const Router = require("express").Router();
const contr = require("../controllers/UserContr");
const { readToken, verifyJwt } = require("../middleware");

Router.post("/register", contr.CreateUser);
Router.post("/login", contr.LoginUser);
Router.get("/refresh/session", readToken, verifyJwt, contr.RefreshSession);

module.exports = Router;

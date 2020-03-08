const routes = require("express").Router();
const UserController = require("./controllers/UserController.js");

routes.post("/register", UserController.store);

module.exports = routes;

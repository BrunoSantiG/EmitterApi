const routes = require("express").Router();
const UserController = require("./app/controllers/UserController.js");

routes.post("/register", UserController.store);

module.exports = routes;

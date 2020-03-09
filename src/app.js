require("dotenv").config({
	path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});
const express = require("express");

function AppController() {
	this.middlewares = () => {
		this.app.use(express.json());
	};

	this.routes = () => {
		this.app.use(require("./routes"));
	};

	this.app = express();
	this.middlewares();
	this.routes();
}

module.exports = new AppController().app;

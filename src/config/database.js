require("dotenv").config({
	path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

module.exports = {
	host: process.env.HOST,
	username: process.env.USERNAME,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
	port: process.env.DB_PORT,
	dialect: process.env.DB_DIALECT || "mysql",
	storage: "./__tests__/database.sqlite",
	define: {
		timestamps: true,
		underscored: true,
		underscoredAll: true
	}
};

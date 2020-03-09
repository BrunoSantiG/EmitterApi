const { Users } = require("../app/models");

module.exports = {
	store: async data => {
		console.log(data);
		return Users.create(data);
	}
};

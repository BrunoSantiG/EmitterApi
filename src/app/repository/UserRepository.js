const { Users } = require("../models");

module.exports = {
	store: async data => {
		return Users.create(data);
	}
};

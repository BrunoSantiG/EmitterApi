const { Users } = require("../models");

module.exports = {
	store: async data => {
		return await Users.create(data);
	}
};

const { Users } = require("../app/models");

module.exports = {
	store: async data => {
		return Users.create(data);
	}
};

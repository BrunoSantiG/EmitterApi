const { Users } = require("../app/models");
const UserRepository = require("../repository/UserRepository.js");

module.exports = {
	store: async user => {
		const { name, email, password } = user;

		const error = [];
		if (!name || name === "") {
			error.push("Name can't be null.");
		}

		if (!email || email === "") {
			error.push("Email can't be null.");
		}

		if (!password || password === "") {
			error.push("Password can't be null.");
		}

		const emailExists = Users.findOne({ where: { email } });
		if (emailExists) {
			error.push("Email is already in use.");
		}

		if (error.length > 0) {
			return { success: false, error };
		}
		const data = UserRepository.store({ name, email, password });
		return { success: true, data };
	}
};

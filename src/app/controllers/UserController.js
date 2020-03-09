const UserService = require("../service/UserService.js");

module.exports = {
	store: async (req, res) => {
		const data = await UserService.store(req.body);

		if (data.success) {
			return res.status(201).json(data.data);
		}

		return res.status(422).json({ error: data.error });
	}
};

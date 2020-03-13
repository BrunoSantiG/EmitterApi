const UserService = require("../service/UserService.js");
const ServiceBusSend = require("../ServiceBus/send/send");
const ServiceBusListen = require("../ServiceBus/listen/listen");

module.exports = {
	store: async (req, res) => {
		const data = await UserService.store(req.body);
		if (data.success) {
			data.data.password = undefined;
			await ServiceBusSend.send("Create a new User", data.data);
			ServiceBusListen.listen();
			return res.status(201).json(data.data);
		}
		return res.status(422).json({ error: data.error });
	}
};

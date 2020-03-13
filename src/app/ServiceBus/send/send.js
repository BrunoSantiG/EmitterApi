const { ServiceBusClient } = require("@azure/service-bus");
require("dotenv").config({
	path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});
// Define connection string and related Service Bus entity names here
const connectionString = process.env.SB_CONECTION;
const queueName = process.env.SB_QUEUE;

module.exports = {
	send: async (namespace, message) => {
		const sbClient = ServiceBusClient.createFromConnectionString(
			connectionString
		);
		const queueClient = sbClient.createQueueClient(queueName);
		const sender = queueClient.createSender();
		try {
			const content = {
				namespace: namespace,
				message: message
			};
			await sender.send(content);

			await queueClient.close();
		} finally {
			await sbClient.close();
		}
	}
};

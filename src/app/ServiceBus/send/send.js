const { ServiceBusClient } = require("@azure/service-bus");

// Define connection string and related Service Bus entity names here
const connectionString =
	"Endpoint=sb://testeoper.servicebus.windows.net/;SharedAccessKeyName=user-send;SharedAccessKey=jgI5ujdWPVqXYuiFN031ghb3ktPxe348XkmD++7wgu4=;EntityPath=user_queue";
const queueName = "user_queue";

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

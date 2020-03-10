const { ServiceBusClient, ReceiveMode } = require("@azure/service-bus");

// Define connection string and related Service Bus entity names here
const connectionString =
	"Endpoint=sb://testeoper.servicebus.windows.net/;SharedAccessKeyName=user-listen;SharedAccessKey=4f0fyzAaOr7jb+aqizGnaCYS2Z0Upz5e8x4JAFCzkOQ=;EntityPath=user_queue";
const queueName = "user_queue";

module.exports = {
	listen: async () => {
		const sbClient = ServiceBusClient.createFromConnectionString(
			connectionString
		);
		const queueClient = sbClient.createQueueClient(queueName);
		const receiver = queueClient.createReceiver(ReceiveMode.receiveAndDelete);
		try {
			const messages = await receiver.receiveMessages(10);
			console.log("Received messages:");
			console.log(messages.map(message => message.data));

			await queueClient.close();
		} finally {
			await sbClient.close();
		}
	}
};

const request = require("supertest");
const faker = require("faker");
const truncate = require("../utils/truncate");

const app = require("../../src/app");

describe("User CRUD", () => {
	beforeEach(async () => {
		await truncate();
	});

	it("should create a new User", async () => {
		const response = await request(app)
			.post("/register")
			.send({
				name: faker.name.findName(),
				email: faker.internet.email(),
				password: faker.internet.password()
			});
		expect(response.status).toBe(201);
	});
	it("should not create a User with null name", async () => {
		const response = await request(app)
			.post("/register")
			.send({
				name: null,
				email: faker.internet.email(),
				password: faker.internet.password()
			});
		expect(response.status).toBe(422);
	});
	it("should not create a User with null email", async () => {
		const response = await request(app)
			.post("/register")
			.send({
				name: faker.name.findName(),
				email: null,
				password: faker.internet.password()
			});
		expect(response.status).toBe(422);
	});
	it("should not create a User with null password", async () => {
		const response = await request(app)
			.post("/register")
			.send({
				name: faker.name.findName(),
				email: faker.internet.email(),
				password: null
			});
		expect(response.status).toBe(422);
	});
});

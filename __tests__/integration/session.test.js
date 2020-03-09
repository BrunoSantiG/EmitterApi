const request = require("supertest");

const app = require("../../src/app");

describe("User CRUD", () => {
	it("should create a new User", async () => {
		const User = {
			name: "nome de",
			email: "teste@email.com",
			password: "123456"
		};
		const response = await request(app)
			.post("/register")
			.send({
				name: User.name,
				email: User.email,
				password: User.password
			});

		expect(response.status).toBe(201);
	});
});

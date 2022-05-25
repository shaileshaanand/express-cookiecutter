const supertest = require("supertest");

const app = require("../../app");
const MoisturePing = require("../../models/MoisturePing");

require("dotenv").config();

const client = supertest(app);
const { connectTestDb, disconnectTestDb, clearDb } = require("./helpers");

describe("MoisturePing", () => {
  beforeAll(connectTestDb);
  afterAll(disconnectTestDb);

  beforeEach(clearDb);

  it("should create a new User", async () => {
    const user = {
      name: "{{cookiecutter.author_name}}",
      password: "{{cookiecutter.author_name}}@1234",
    };

    const response = await client.post("/api/v1/user").send(user);

    expect(response.status).toBe(201);
    expect(await User.find({}).countDocuments()).toBe(1);
  });
});

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

  it("should create a new MoisturePing", async () => {
    const moisturePing = {
      value: 90,
      sensorId: 1,
    };

    const response = await client.post("/api/v1/moisture-ping").send(moisturePing);

    expect(response.status).toBe(201);
    expect(await MoisturePing.find({}).countDocuments()).toBe(1);
    const createdMoisturePing = await MoisturePing.findOne({});
    expect(createdMoisturePing.value).toBe(90);
    expect(createdMoisturePing.sensorId).toBe(1);
  });
});

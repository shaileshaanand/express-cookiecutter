const mongoose = require("mongoose");

const dbConnect = require("../../helpers/dbConnect");
const MoisturePing = require("../../models/MoisturePing");

const connectTestDb = async () => {
  await dbConnect(process.env.MONGO_TEST_URI);
};

const disconnectTestDb = async () => {
  await mongoose.connection.close();
};

const clearDb = async () => {
  await MoisturePing.deleteMany({});
};

module.exports = { connectTestDb, disconnectTestDb, clearDb };

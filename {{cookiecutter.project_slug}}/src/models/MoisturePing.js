const mongoose = require("mongoose");

const MoisturePingSchema = new mongoose.Schema({
  value: {
    type: Number,
    required: true,
    max: 4095,
    min: 0,
  },
  sensorId: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const MoisturePing = mongoose.model("MoisturePing", MoisturePingSchema);

module.exports = MoisturePing;

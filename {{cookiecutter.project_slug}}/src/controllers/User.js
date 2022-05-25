const Joi = require("joi");

const { sanitize } = require("../helpers/utils");
const MoisturePing = require("../models/MoisturePing");

const newMoisturePing = async (req, res) => {
  const bodyValidator = Joi.object({
    value: Joi.number().max(4095).min(0).required(),
    sensorId: Joi.number().required(),
  });
  Joi.assert(req.body, bodyValidator);
  await MoisturePing.create(req.body);
  res.status(201).send();
};

const listMoisturePings = async (req, res) => {
  const validator = Joi.object({
    sensorId: Joi.number().required(),
    start: Joi.date().timestamp("unix").required(),
    end: Joi.date().timestamp("unix").required(),
  });
  Joi.assert(req.query, validator);
  const events = (
    await MoisturePing.find({
      timestamp: {
        $gte: new Date(parseInt(req.query.start)),
        $lt: new Date(parseInt(req.query.end)),
      },
      sensorId: req.query.sensorId,
    })
      .sort({ timestamp: "asc" })
      .lean()
  ).map((event) => {
    return sanitize(event);
  });
  res.status(200).send(events);
};

module.exports = { newMoisturePing, listMoisturePings };

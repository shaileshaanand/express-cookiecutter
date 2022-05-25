const express = require("express");

const { newMoisturePing, listMoisturePings } = require("../controllers/MoisturePing");

const router = express.Router();
router.post("", newMoisturePing);
router.get("", listMoisturePings);

module.exports = router;

const mongoose = require("mongoose");

const dbConnect = (mongo_uri) => {
  return mongoose.connect(mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = dbConnect;

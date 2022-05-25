/* eslint-disable no-console */

const app = require("./app");
const dbConnect = require("./helpers/dbConnect");

const start = async () => {
  const mongo_uri = process.env.MONGO_URI;
  const port = process.env.PORT || 3000;
  console.log(`Connecting to MongoDB at ${mongo_uri}`);
  await dbConnect(mongo_uri);
  console.log(`Connected to MongoDB at ${mongo_uri}`);
  await app.listen(port);
  console.log(`Server started on port ${port}`);
};

start();

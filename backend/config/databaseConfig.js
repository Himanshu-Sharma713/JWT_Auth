const mongoose = require("mongoose");

const MONGODB_URL =
  process.env.MONGODB_URL || "mongodb://localhost:27017/pw_database";

const databaseConnect = () => {
  mongoose
    .connect(MONGODB_URL)
    .then((conn) => console.log(`Connected to DB: ${conn}`))
    .catch((err) => console.error(`Error -> ${err}`));
};

module.exports = databaseConnect;

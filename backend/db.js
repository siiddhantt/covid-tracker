const mongoose = require("mongoose");
const connectToMongo = () => {
  mongoose.connect(process.env.MONGODB_URI, { dbName: "covid-tracker" }, () => {
    console.log("Connected Successfully!");
  });
};

module.exports = connectToMongo;

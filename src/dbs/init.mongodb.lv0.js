"use strict";
const mongoose = require("mongoose");
//file init.mongodb
const {
  db: { host, port, name },
} = require("../configs/config.mongodb");
// const connectDB = `mongodb://localhost:27017/test`;
const connectDB = `mongodb://${host}:${port}/${name}`;
//check connect to server
const { countConnect } = require("../helpers/check.connect");

mongoose
  .connect(connectDB)
  .then((_) => console.log(`Connected success`))
  .catch((err) => console.log(`Error Connect`));

//dev
if (1 === 1) {
  mongoose.set("debug", true);
  mongoose.set("debug", { color: true });
}

module.exports = mongoose;

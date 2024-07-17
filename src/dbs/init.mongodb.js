"use strict";
const mongoose = require("mongoose");
const {
  db: { host, port, name },
} = require("../configs/config.mongodb");
const { countConnect } = require("../helpers/check.connect");
const connectDB = `mongodb://${host}:${port}/${name}`;
console.log("connectString:", connectDB);
class Database {
  constructor() {
    this.connect();
  }

  connect(type = "mongodb") {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }
    mongoose
      .connect(connectDB, {
        maxPoolSize: 50,
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
      })
      .then((_) => {
        console.log("Number connect", countConnect);
      })
      .catch((err) => console.log(`Error Connect: ${err.message}`));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;

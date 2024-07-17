require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const { default: helmet } = require("helmet");
const compression = require("compression");

// console.log(`Process::`, process.env);
//init middlewares
app.use(morgan("dev"));
// app.use(morgan("combined"));
app.use(helmet());
app.use(compression);
//init db
require("./dbs/init.mongodb.lv0");
// const countConnect = require("./helpers/check.connect");
// const { checkOverload } = require("./helpers/check.connect");
// checkOverload();

//init routes
app.get("/", require("./routes"));

//handling error

module.exports = app;

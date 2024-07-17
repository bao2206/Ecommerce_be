"use strict";

const express = require("express");
//function
const router = express.Router();

// router.get("", (req, res, next) => {
//   //const strCompress = "Hello";
//   return res.status(200).json({
//     message: "Welcome",
//     //metadata: strCompress.repeat(1000),
//   });
// });
router.use("/v1/api", require("./access"));
module.exports = router;

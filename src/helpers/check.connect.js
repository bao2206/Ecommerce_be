"use strict";
const mongoose = require("mongoose");
const _SECONDS = 5000; // kiem tra moi 5s

const os = require("os");
const process = require("process");
const countConnect = () => {
  const numConnection = mongoose.connections.length;
  console.log(`Number of connections: ${numConnection}`);
};
//check over load
const checkOverload = () => {
  setInterval(() => {
    //kiểm tra số lượng người kết nối
    const numConnection = mongoose.connections.length;
    //kiểm tra sử dụng bao nhiêu nhân của cpu
    const numCores = os.cpus().length;
    //kiểm tra số lượng ram đã sử dụng
    const memoryUsage = process.memoryUsage().rss;

    const maxConnections = numCores * 5;

    if (numConnection > maxConnections) {
      console.log("Connect detected");
    }
    console.log(`Connect activation: ${numConnection}`);
    console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`);
  }, _SECONDS);
  // ví dụ về số lượng kết nối tối đa trên 1 nhân của cpu
};
module.exports = {
  countConnect,
  checkOverload,
};

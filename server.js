// khai báo port để khởi động server
const app = require("./src/app");
const port = process.env.PORT || 3056;

const server = app.listen(port, () => {
  console.log(`Ecommerce start with port: ${port}`);
});

// process.on("SIGINT", () => {
//   server.close(() => console.log("Exit server"));
// });
//query run server: node --watch server.js
// NODE_ENV=pro node -- watch server.js  ** lưu ý NODE_ENV = dev||pro
//npm run dev

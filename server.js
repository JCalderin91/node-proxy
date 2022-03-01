const http = require("http");
const httpProxy = require("http-proxy");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const PORT = process.env.PORT || 8080;
const target = process.env.TARGET_URL;
console.log({ target });
httpProxy.createProxyServer({ target }).listen(PORT);
console.log("Running");

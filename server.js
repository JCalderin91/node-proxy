const http = require("http");
const httpProxy = require("http-proxy");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const PORT = process.env.PORT || 8080;
const target = process.env.TARGET_URL;

var proxy = new httpProxy.createProxyServer({target, ws: true});

var proxyServer = http.createServer(function (req, res) {
  proxy.web(req, res);
});

proxyServer.on('upgrade', function (req, socket, head) {
  proxy.ws(req, socket, head);
});
 
proxyServer.listen(PORT);


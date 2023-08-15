var http = require("http");
var dt = require("./mydatemodule");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello World!" + dt.dateTime());
    res.end();
  })
  .listen(8080);

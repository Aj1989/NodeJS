var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    fs.readFile("fsmodule.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/HTML" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);

var express = require('express');

var fs=require("fs");
var app = express.createServer(express.logger());

var content = fs.readFileSync("index.html","utf8");

var buffer = new Buffer(content.length);
buffer.write(content, "utf8");

app.get('/', function(request, response) {
  response.send(buffer.toString("utf8"));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

// var bufferstuff = fs.readFileSync('index.html');
// var buffertext = Buffer.toString( bufferstuff );

var bufferjam = fs.readFileSync('index.html').toString();

// console.log(bufferjam);

app.use(express.static(__dirname + '/'));

app.get('/', function(request, response) {
  response.send(bufferjam);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

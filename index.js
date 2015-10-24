var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

var fs = require("fs");
var inputdata = fs.readFileSync("index.html",'utf8');
console.log(inputdata);
//var buf = new Buffer(100);

//buf = fs.readFileSync("index.html");
//var inputdata = buf.toString(buf);
//console.log(inputdata);


app.get('/', function(request, response) {
  response.send(inputdata);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});


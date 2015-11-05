var express = require('express');
var app = express();
var fs = require('fs');
var contents = fs.readFileSync('index.html').toString('utf-8');
app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))
 
app.get('/', function(request, response) {
  response.send(contents)
});
 
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});

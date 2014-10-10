var config = require('./config');

var express = require('express');
var app = express();

var server = require('http').createServer(app);

app.use(express.static(__dirname + '/public'));

server.listen(config.port, function(){
	console.log("Express server listening on port " + server.address().port + " in " + app.settings.env + " mode");
});
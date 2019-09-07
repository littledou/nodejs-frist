//Express
var express = require('express');
var app = express();

app.get('/', function(request, response) {
	res.send('hello');
});

app.listen(8080, function() {
	console.log('Express example listening on port 8080');
});

//koa 1.0
var koa = require('koa');
var app = koa();

app.use('/test', function *() {
	yield doReadFile();
	var data = yield doReadFile2();
	this.body = data;
})
app.listen(8080);


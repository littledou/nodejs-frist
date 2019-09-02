'use strict'

var http = require('http')
var util = require('util');
var url = require('url');

var server = http.createServer(function (request, response) {
    console.log(request.method+': '+request.url);
    response.writeHead(200,{'Content-Type':'text/html'});
    var params = url.parse(request.url, true).query;
    response.write('name: '+ params.name);
    response.write('url: '+params.url);
    response.end();
});

server.listen(3000);


'use strict'

var url = require('url');

console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));

var path = require('path');

var workDir = path.resolve('.');
console.log('workDir:'+workDir);

var filePath = path.join(workDir, 'html','index.html');
console.log('filePath:'+filePath);

var fs=require('fs'),http=require('http');

var root = path.resolve(process.argv[2]||'.');

console.log('static root dir:'+root);

var server = http.createServer(
	function (request, response) {
		var pathName = url.parse(request.url).pathname;
		
		var filePath = path.join(root, pathName);

		fs.stat(filePath, function (err, stats) {
			if(!err&&stats.isFile()){
				console.log('200 '+request.url);
				response.writeHead(200);
				fs.createReadStream(filePath).pipe(response);
			}else{
				console.log('404 notfound '+ request.url);
				response.writeHead(404);
				response.end('404 NOTFOUND');
			}
		});
	}
);
server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/');

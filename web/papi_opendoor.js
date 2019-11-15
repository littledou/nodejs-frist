var http = require("http"), querystring = require('querystring');

var options = {
  "method": "POST",
  "hostname": "10.1.14.211",
  "port": "8090",
  "path": "/v1/device/open_door",
  "headers": {
    "content-type":  "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
    // 'Content-Type':'application/x-www-form-urlencoded',
    "cache-control": "no-cache",
    'Content-Length': data.length  
  }

};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write("------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"password\"\r\n\r\n12345678\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--");
req.end();
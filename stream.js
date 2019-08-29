'use strict'

var fs = require('fs')

var rs = fs.createReadStream('hello.js', 'utf-8');

rs.on('data', function (chunk){
    console.log('DATA:\n'+ chunk);
});

rs.on('end', function () {
    console.log('END');
});

rs.on('error', function (err) {
    console.log('ERROR: \n'+err);
});

var wsl = fs.createWriteStream("out.txt", "utf-8");


//pipe


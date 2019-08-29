'use strict'

//从流中读数据
var fs = require('fs')

var readStream = fs.createReadStream('hello.js', 'utf-8');

readStream.on('data', function (chunk){
    console.log('DATA:\n'+ chunk);
});

readStream.on('end', function () {
    console.log('END');
});

readStream.on('error', function (err) {
    console.log('ERROR: \n'+err);
});

//写入流
var writerStream = fs.createWriteStream("out.txt", "utf-8");

writerStream.write('data','UTF8');
writerStream.end();
writerStream.on('finish', function(){
    console.log('finish');
});
writerStream.on('error', function(){
    console,log('error');
});
//pipe管道流

readStream.pipe(writerStream);

//链式流
var zlib = require('zlib');
    //文件压缩
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));

    //文件解压
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt'));


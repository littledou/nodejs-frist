//Node.js内置的fs模块就是文件系统模块，负责读写文件。

'use strict'

var fs = require('fs');

fs.readFile('hello.js', 'utf-8', function (err,data) {
    if(err){
        console.log('readFile err: '+err);
    }else{
        console.log('readFile async: \n'+data);
    }
});
try {
    var data = fs.readFileSync('hello.js','utf-8');
    console.log("readFile sync: \n"+data);
} catch (error) {
    
}

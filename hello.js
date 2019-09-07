'use strict'

var s = 'Hello';

console.log(s);
console.log('s: %s', s);
console.log('s: ${s}');


function greet(name) {
    console.log(s+','+name+'!');
}

function hello() {
    console.log('Hello, world!');
}


module.exports.greet = greet;

module.exports.hello = hello;

// var server = require('./server');
// var router = require('./router');

// server.start(router.route)

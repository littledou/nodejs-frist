'use strict'

var funs = require('./hello');

var s = 'MMM';

funs.greet(s);

funs.hello();

process === global.grocess;

console.log('process version: '+process.version);

function iNextTick() {
    console.log('nextTick callback');
}

process.nextTick(iNextTick);

console.log('next Tick was set!');

process.on('exit', function (code) {
    console.log('about to exit with code: ' + code);
});


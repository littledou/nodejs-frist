//事件循环

var events = require("events");

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
    console.log("连接成功");
    eventEmitter.emit("data_received");
}

eventEmitter.on("connection", connectHandler);

eventEmitter.on("data_received", function () {
    console.log("接收数据成功");
});
eventEmitter.emit("connection");

console.log("执行完毕");
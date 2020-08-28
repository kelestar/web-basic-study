var events = require('events');

//EventEmitter类--核心就是事件触发与事件监听器功能的封装
var eventEmitter = new events.EventEmitter();

eventEmitter.on('some_event', () => {
  console.log('some_event事件触发');
})

setTimeout(() => {
  eventEmitter.emit('some_event');
}, 4000);
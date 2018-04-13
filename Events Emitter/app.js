var events = require('events');

var event = new events.EventEmitter();

event.on('say', function() {
    console.log('Hi there, I am custom event');
});

event.on('call', function(caller, calledPerson) {
    console.log(`Hi ${calledPerson}, I am ${caller}`);
});

event.emit('say');
event.emit('call', 'shl', 'ss');
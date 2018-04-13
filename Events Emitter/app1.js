var events = require('events');
var util = require('util');

// Object
var Person = function (name) {
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var jomes = new Person('jomes');
var people = [james, mary, jomes];

people.forEach(function(person) {
    person.on('speak', function(mssg){
        console.log(person.name + ' said: ' + mssg);
    });
});

james.emit('speak', 'I want to go outside');
mary.emit('speak', 'I want to visit to Shan State');
jomes.emit('speak', 'I want to eat Pizza');

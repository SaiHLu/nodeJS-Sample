var countArr = function (arr) {
    return 'There are ' + arr.length + ' elements in the array.';
};

// Messaging
var Greeting = function (name, send) {
    return send + ' ' + name;
};

var Responding = function (name, respond) {
    return respond + ' ' + name;
};

// varirable
var pi = 3.142;

// export the modules we want to use
// module.exports.countArr = countArr;
// module.exports.Greeting = Greeting;
// module.exports.Responding = Responding;
// module.exports.pi = pi;

module.exports = {
    countArr: countArr,
    Greeting: Greeting,
    Responding: Responding,
    pi: pi
};
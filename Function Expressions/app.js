// normal function statement
function normal() {
    console.log('I am normal function');
}

// function expressions
var callMe = function (var1, var2) {
    console.log('My name is ' + var1 + ' and I like to visit ' + var2);
};
callMe('shl', 'ygn');

// taking function as argument or parameter
function callFunction (func) {
    func('sai', 'mandalay');
}
callFunction(callMe);
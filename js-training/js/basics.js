/**
 *
 */


console.log(typeof var1);

/**
 * this will trigger an error
 */
//console.log(var1);

/**
 * this will not, the window object always exists, and it will just alert undefined
 */
//alert(window.var1);

/**
 * functions are first-class citizens
 */

function someFunction() {
}

someFunction.someVar = "asddd";
//alert(someFunction.someVar);

/**
 * a function can return another function to it's caller
 */
function createFunction() {
    return function () {
        alert('this was returned from createFunction()');
    };
}

//TODO: how to display the alert message by using createFunction ?


var Object1 = {
    name: 'test',
    someProperty: 'someProp'
};

console.log(Object1.name);
console.log(Object1['name']);

var prop = 'someProperty';
console.log(Object1[prop]);
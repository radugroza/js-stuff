/**
 * Created by Radu on 10.08.2015.
 */

/**
 * object constructor - convention -> first letter always big
 * @constructor
 */
function MyObject(name, type) {
    this.name = name;
    this.type = type;
}

console.log(MyObject.prototype);

/**
 * defining methods in objects
 */
MyObject.prototype.sayHello = function () {
    /**
     * this refers to the CONTEXT of the function. CONTEXT of a function = the object on which the function is called
     */
    alert('IN THE OBJECT PROTOTYPE: this.name = ' + this.name);
};

var obj = new MyObject('test', 'abc');

//obj.sayHello();

/**
 * prototype methods can be overridden on the object
 */
obj.sayHello = function () {
    /**
     * TODO: how to call the prototype's sayHello method from here ?
     */
    alert('this is in the object instance');
};
obj.sayHello();

var obj1 = new MyObject('aaa', 'bbb');
obj1.sayHello();
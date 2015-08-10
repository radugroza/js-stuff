var object1 = {
    /**
     * string, the name of the object
     */
    name: 'object1',
    sayHello: function () {
        alert('hello from ' + this.name);
    }
};

var object2 = {
    name: 'object2'
};

object1.sayHello();

console.log(object1.sayHello.call);
console.log(object1.sayHello.apply);

object1.sayHello.call(object2);

object1.sayHello.call({name: 'anonymous object created on the fly'});


function consoleLogContext()
{
    console.log(this);
}

consoleLogContext.call(object1);
consoleLogContext.apply(object2);
consoleLogContext();

function setter(property, value)
{
    this[property] = value;
}

setter.call(object1, 'someProperty', 'someValue');

var args = ['someOtherProperty', 'someOtherValue'];

setter.apply(object1, args);
console.log(object1);
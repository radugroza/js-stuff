/**
 *
 */
//
//var obj = {
//    a: 1,
//    b: 2,
//    fnName1: function (param1, param2) {
//        alert('in object');
//    },
//    fnName2: function (param1, param2) {
//        alert('in object');
//    }
//};
//
//function MyClass(name) {
//    // initialization code
//    this.name = name;
//
//    this.anotherField = Math.random();
//}
//
//MyClass.prototype.sayHello = function () {
//    alert(this.name);
//};
//
//
//var eu = new MyClass("Radu");
//var corina = new MyClass("Corina");
//
//corina.sayHello();
//eu.sayHello();

// context = this

//console.log(this);

function globalFunction(param) {
    console.log('I am global Function. received param: ' + param);
    console.log(this);
}

var objectRadu = {
    name: 'Radu',
    age: '19',
    describe: function () {
        console.log(this);
    }
};

//globalFunction();

//var arr = getMyParameters();

globalFunction.call(objectRadu, 'Param1', 'akjsdgjkasd', 'asdsd', 'asdsd'); //<==> globalFunction('Param1', 'aksdkhasd');
globalFunction.apply(objectRadu, []); //<==> globalFunction('Param1', 'aksdkhasd');

//objectRadu.describe();




//var radu = "a string";
//console.log(window.radu);
//
//function fn1() {
//    var field1 = 'field1';
//
//    var fn2 = function () {
//        alert(field1);
//    };
//
//    return {
//        call_me: function () {
//            fn2();
//        }
//    };
//}
//
//
//var result = fn1();
//result.call_me();

//fn1.fn2();

//
//radu = fn1();
//radu();

//public function MyClass(name) {
//    this.name = name;
//}

//public function sayHello() {
//    System.out.write(this.name);
//}

//obj.fnName();

//var a = prompt('Enter function name to be called on obj: ');
//obj[a]

//obj[a]();
//obj['fnName']
//
//console.log(obj.a);

// single line commane
//
///* */
//function fnName(param1, param2) {
//
//}
//
//fnName(1, 2, 3, 4, 5);
//
//var x = function (param1, param2) {
//    alert('in function x');
//};
//x.aProperty = "aValue";
//
//console.log(x.aProperty);
//
//
////x(1, 2);
//
//
//var obj1 = {
//    name: "RAdu",
//    sayHello: function () {
//        alert(this.name);
//    }
//};
//
//
///**
// * this calls bla bla
// */
//function a() {
//    var i = 0, ceva = 10, found = false;
//    do {
//        found = (i % 2 == 0);
//        i++;
//    } while (found);
//}
//
//console.log(obj['a']);
//
//console.log(typeof var1);
//
///**
// * this will trigger an error
// */
////console.log(var1);
//
///**
// * this will not, the window object always exists, and it will just alert undefined
// */
////alert(window.var1);
//
///**
// * functions are first-class citizens
// */
//
//function someFunction() {
//}
//
//someFunction.someVar = "asddd";
////alert(someFunction.someVar);
//
///**
// * a function can return another function to it's caller
// */
//function createFunction() {
//    return function () {
//        alert('this was returned from createFunction()');
//    };
//}
//
////TODO: how to display the alert message by using createFunction ?
//
//
//var Object1 = {
//    name: 'test',
//    someProperty: 'someProp'
//};
//
//console.log(Object1.name);
//console.log(Object1['name']);
//
//var prop = 'someProperty';
//console.log(Object1[prop]);
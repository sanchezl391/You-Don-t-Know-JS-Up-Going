var obj = {a : 10};
var myObj = Object.create(obj);
//Going up the prototype chain!
console.log(myObj.a);

function nothingSpecial(){
  console.log("Dont mind me");
}
var a = nothingSpecial;

//delegation
var obj = {a:10};
var obj2 = Object.create(obj);
console.log(obj2.a);
//"Inheritance"
var obj = new func();
obj.prototype = 10;
obj.a = 10;

var obj2 = {};
var obj2 = Object.create(obj);
console.log("Before Changing value: " + obj2.prototype);
obj2.prototype = 20;
console.log("After Changing Value: " + obj2.a);
console.log(obj.isPrototypeOf(obj2));

console.log(obj);
console.log(obj2);

function func(){
  //returns empty object if called with 'new'
}

console.log(Object.getPrototypeOf(obj2));

"use strict";

var obj = {
  a: 10 ,
  foo:foo
};
function foo(){
  console.log(this.a);
}
obj.foo();//Implicit Binding

//Only works if not using strict.
//var a = 20;
//foo();//Default Binding

//Implicitly lost. When passing as args or assignment.
// var bar = obj.foo;//gets reference to foo
// bar();

//Explicit Binding
foo.call(obj);

//Hard Binding. Binding done by storing a function, which assigns this to an object
var bind = function(){
  foo.call(obj);
};
bind();
/*
  To pass arguments you can use apply function and 'arguments' keyword
  var bind = function(){
    foo.apply(obj , arguments);
  };
  foo(aruguments){...return something;}
*/
//ES5 provides a better way to bind
var c = foo.bind(obj);//Now the c returns a new function in which this refers to it
c();

//new binding
var a = new foo();

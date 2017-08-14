//Definition of closure: When a function is able to remember and access
//its lexical scope even when the function is outside of it's scope.

//Example 1
function example1(){

  function func(){
    var tempValue = 10;//This value should not exist outside func()
    function rememberScope(){//Has closure over func
      console.log(tempValue);//Has closure over rememberScope and func
    }
    return rememberScope;
  }
  var funcScopeHolder = func();//Scope is kept alive
  funcScopeHolder();//tempValue =10

}

//Example 2
function example2(){
  //Main Concept: Function References also
  //keep their closure when passed as references.
  //Inside the built in setTimeout()
  //there is a function that invokes
  //our inner function doSomething(),
  //doSomething() was passed as an
  //argument but the scope of doSomething is kept
  //This is how the scope is kept alive
  function wait(time){
      console.log("wait() is being executed");
      setTimeout(function doSomething(){
        alert("Time is out!");
      } , time);
  }
  var scopeHolder1 = wait(1000);

}
example2();

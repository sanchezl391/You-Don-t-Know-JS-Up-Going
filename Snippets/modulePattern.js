//This is a module pattern that uses
//closure. For this to be a module pattern
//1.there must be a function/object returned and
//2.there must be an outer enclosing function that
//is called at least once

function example1(){
  function mod(val){
      function Display(){console.log(val);}
      function Increase(){val++;}
      publicAPI = {
        display:Display,
        increase:Increase
      };
      return publicAPI;
    }

    var access1 = mod(1);
    var access2 = mod(2);

    access1.display();//1
    access2.display();//2
    access1.increase();
    access2.increase();
    access1.display();//2
    access2.display();//3
}

function example2(){
  //Main Idea of Dependency Managers:If you are painting a canvas,
  //the application of the oil paint is one activity.
  //And preparing the canvas is another.
  //You can’t use the paint unless
  // the surface has been brushed with the primer.
  //Thus one activity is dependent on the other.
  var MyModules = (function Manager() {
  	var modules = {};

  	function define(name, deps, impl) {
  		for (var i=0; i<deps.length; i++) {
  			deps[i] = modules[deps[i]];
  		}
  		modules[name] = impl.apply( impl, deps );
  	}

  	function get(name) {
  		return modules[name];
  	}

  	return {//return scope access to functions
  		define: define,
  		get: get
  	};
  })();
  //after 1st define(), modules["bar"] = hello; Not dependent
  //after 2nd define(), Dependent on "bar"
    //deps["bar"] = modules["bar"]; =>hello;
    //modules["foo"] = function(deps)..=>awesome;
  MyModules.define( "bar", [], function(){
  	function hello(who) {
  		return "Let me introduce: " + who;
  	}

  	return {
  		hello: hello
  	};
  } );

  MyModules.define( "foo", ["bar"], function(bar){
  	var hungry = "hippo";

  	function awesome() {
  		console.log( bar.hello( hungry ).toUpperCase() );
  	}

  	return {
  		awesome: awesome
  	};
  } );
  //var bar = MyModules.get( "bar" );=>modules["bar"]=>hello
  var bar = MyModules.get( "bar" );
  //var foo = MyModules.get( "foo" );=>modules["foo"]=>awesome
  var foo = MyModules.get( "foo" );

  console.log(
  	bar.hello( "hippo" )
  ); // Let me introduce: hippo

  foo.awesome(); // LET ME INTRODUCE: HIPPO
}

function example3(){
  //Modern Modules using import and export.
  //Using same scoping patterns we export
  //and import a module with its scope


  {//bar.js
    function hello(who) {
  	   return "Let me introduce: " + who;
     }
  }
   export hello;//<----End of bar.js


   { //foo.js
       // import only `hello()` from the "bar" module
      import hello from "bar";

      var hungry = "hippo";

      function awesome() {
      	console.log(
      		hello( hungry ).toUpperCase()
      	);
      }
    }
  export awesome;//-->End of foo.js


  {//Another file
    // import the entire "foo" and "bar" modules
    module foo from "foo";
    module bar from "bar";

    console.log(
    	bar.hello( "rhino" )
    ); // Let me introduce: rhino

    foo.awesome(); // LET ME INTRODUCE: HIPPO
  }

}

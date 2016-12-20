"use strict";//Strict mode
var sum = addTax(100);//--> function calculateTax() with x passed in as a value
function addTax(x){
  function calculateTax(y){
    return x + x * y;
  };
  return calculateTax;
}

console.log(sum);

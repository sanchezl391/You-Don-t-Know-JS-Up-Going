function out(){
  var a = 10;
  function i(){
    console.log(a);
  }
  return i;
}
var obj = out();
obj();

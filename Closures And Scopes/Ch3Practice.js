var obj = {
  printOdd:function(max){
    for(var i =0;i <= max;i++){
      console.log(i);
    }
  }
};
obj.printOdd(20);
(function createAnArray(){
  var bar = 2;
  var arr = [ 1 , 2 , 3];
  console.log(arr);
}());


console.log(bar);

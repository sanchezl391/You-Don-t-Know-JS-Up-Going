var obj = {a:"cheese"};
var obj2 = obj;
console.log(obj);
//The object is not copied, the reference is
obj.a = 'chicken';
console.log(obj2);  //chicken

var newArr = [10];
obj.arr = newArr[0];
var newObj = Object.assign({} , obj);
console.log(newObj);
obj.a = "This should not be copied";
newArr[1] = 20;
console.log(newObj);

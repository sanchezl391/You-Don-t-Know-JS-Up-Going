var obj = {a:"cheese"};
var obj2 = obj;
console.log(obj);
//The object is not copied, the reference is
obj.a = 'chicken';
console.log(obj2);  //chicken

var newObj = Object.assign({} , obj);
console.log(newObj);
obj.a = "This should not be copied";
console.log(newObj);

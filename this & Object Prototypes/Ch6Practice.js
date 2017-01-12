//Propert Delegation.Badass!!!!!
var obj = {
  createObj:function(name , age){
    this.age = age;
    this.name = name;
  }
};
var functionality = Object.create(obj);
functionality.extra =
  function(){
      this.ageInTen = this.age + 10;
  };

var obj2 = Object.create(functionality);
obj2.createObj("George" ,47);
obj2.extra();
console.log(obj2.ageInTen);

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

//Practing OOLO
var Parent = {
  name: 'add name here:',
  setName(name){
    this.name+= name;
  },
  getName(){
    return this.name;
  }
}

var Child = {
  setAge(age){
    this.age = age;
  },
  getAge(){
    return this.age;
  },
  incrementAge(){
    this.age+=5;
  }
};

Object.setPrototypeOf(Child , Parent);
Child.setName("Luis");
console.log(Child.getName());

//Checking for Connections.
console.log("Parent->Child: " + Parent.isPrototypeOf(Child));
console.log("Child->Parent: "  + (Object.getPrototypeOf(Child) == Parent));

const me = {
  talk() {
    return "Talking";
  }
};

const you = {
  talk() {
    return "Talking";
  }
};

console.log(me.talk());
console.log(you.talk());

class Person {
  talk() {
    return "Talking";
  }
}

const meWithInheritance = new Person();
const youWithInheritance = new Person();

console.log(meWithInheritance.talk(), meWithInheritance.talk());

console.log(meWithInheritance); // meWithInheritance does not contain the TALK method.
console.log(Person); // It is stored in the Person "Class"

// But it has PROTOTYPE.
// INHERITANCE ARE PROTOTYPE BASED
// console.log(Person.prototype);
//WICH HAS THE TALK METHOD.

//  NOW LET'S SEE HOW JAVASCRIPT CLASSES WORK
//THAT'S WHAT THEY DO.
// IT CREATES A FUNCTION
// function Person (){

// }
// GO INTO THE FUNCTION PROTOTYPE AND DEFINES AN FUNCTION FOR IT
// Person.prototype.talk = function () {
//   return 'Talking';
// }

// function Person() {
//   this.talk = function () {
//     return 'Talking';
//   }
// }
// const x = new Person();

// console.log(x.talk());
// console.log(x)

// NOW THE FUNCTION BINDED TO THIS ARE A PROPERTY
// AND THE FUNCTION GETS COPPIED TO THE NEW OBJECT
// THIS IS CALLED SIDE-EFFECT

// function Person() {
//   this.age = 12;
// }

// const me = new Person();

// me.age
// 12
// Person.age
// does not exist
// It's just a f**n property

// So if you want to add reusable methods into functions
// U better use .prototype.methodyouwantoouse

// AND IF YOU USE CLASSES, THEY CAN BE EXTENDED

// INHERITANCE CHAIN ( PURE OBJECTS)

// const person = {
//   talk() {
//     return 'Talking';
//   }
// }

// const me = Object.create(person);

// console.log(me.talk())

// OR YOU CAN USE

// const me = {}

// Object.setPrototypeOf(me, person);

// console.log(me.talk())

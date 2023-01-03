"use strict";

/*function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = ` ${firstName} You are${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = "Steven";
      const str = `oh and you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      //const output = "New output";
    }
    console.log(output);
    //console.log(add(2, 3));
  }
  printAge();
  return age;
}

const firstName = "Jonas";
calcAge(1991);
//console.log(age);
//printAge();*/
/*
//Variables
console.log(me);
//console.log(job);
//console.log(year);
var me = "Jonas";
let job = "Teacher";
const year = 1991;

//Functions
console.log(addDecl(2, 3));
//console.log(addExpr(2, 3));
console.log(addArrow); // przy var undefined
//console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCard();
var numProducts = 10;

function deleteShoppingCard() {
  console.log("All product deleted!");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false*/

/*console.log(this); //window

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); //undefined
};
calcAge(1991);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this); //window
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // this object
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();*/

/*var firstName = "Matilda";

const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);*/

/*const self = this; //self or that
    const isMilenial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
    };*/
//const self = this; //self or that
/*const isMilenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMilenial();
  },

  greet: () => console.log(`hey ${this.firstName}`),
};

jonas.greet();
jonas.calcAge();

const addExp = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExp(2, 5);
addExp(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);*/

/*let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: "Jonas",
  age: 30,
};

const friend = me;
friend.age = 27;
console.log(friend);
console.log(me);*/

//Prymitive types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

//Reference types
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";

console.log("Before marriage:", jessica);
console.log("After marriage", marriedJessica);

//marriedJessica = {};

//Copying types
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");
console.log(jessicaCopy);
console.log("Before marriage:", jessica2);
console.log("After marriage", jessicaCopy);

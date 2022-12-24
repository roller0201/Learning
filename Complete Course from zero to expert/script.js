/*let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
let firstName = "Jonas";
console.log(firstName);*/

/*true;

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "String");
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);*/

/*let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990; // type error
var job = "programmer";
job = "teacher";*/
// Math operation
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageSarah, ageJonas);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

let x = 10 + 5; //15
x += 10; //25
x *= 4; //100
x++;
x--;
console.log(x);

//comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18); // true

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2019);
console.log(25 - 10 - 5);
let z, y;
z = y = 25 - 10 - 5;
console.log(z, y);

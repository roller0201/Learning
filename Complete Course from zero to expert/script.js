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
/*const now = 2037;
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
console.log(z, y);*/

/*let marksMass = 78;
let marksHeights = 1.69;
let johnsMass = 92;
let johnsHeights = 1.95;

let bodyMassIndexmarks = marksMass / marksHeights ** 2;
console.log(bodyMassIndexmarks);

let bodyMaxIndexJohns = johnsMass / johnsHeights ** 2;
console.log(bodyMaxIndexJohns);

let marksMass2 = 95;
let marksHeights2 = 1.88;
let johnsMass2 = 85;
let johnsHeights2 = 1.76;

let bodyMassIndexmarks2 = marksMass2 / marksHeights2 ** 2;
console.log(bodyMassIndexmarks2);

let bodyMaxIndexJohns2 = johnsMass2 / johnsHeights2 ** 2;
console.log(bodyMaxIndexJohns2);

markHigherBMI = bodyMassIndexmarks > bodyMaxIndexJohns;
console.log(markHigherBMI);
markHigherBMI2 = bodyMassIndexmarks2 > bodyMaxIndexJohns2;
console.log(markHigherBMI2);

/*const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I' m ${firstName}, ${year - birthYear} years old ${job}! `;
console.log(jonasNew);

console.log(`String with \n\ 
multiple \n\
lines`);*/

/*const age = 15;
const isOldEnough = age >= 18;

if (age >= 18) {
  console.log("Sarah can start driving licence");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);*/

/*if (bodyMassIndexmarks > bodyMaxIndexJohns) {
  console.log(
    `Mark's BMI ${Math.floor(
      bodyMassIndexmarks
    )} is higher than John's ${Math.floor(bodyMaxIndexJohns)}`
  );
} else
  `John's BMI ${Math.floor(
    bodyMaxIndexJohns
  )} is higher than Mark's ${Math.floor(bodyMassIndexmarks)}`;

if (bodyMassIndexmarks2 > bodyMaxIndexJohns2) {
  console.log(
    `Mark's BMI ${Math.floor(
      bodyMassIndexmarks2
    )} is higher than John's ${Math.floor(bodyMaxIndexJohns2)}`
  );
} else
  console.log(
    `John's BMI ${Math.floor(
      bodyMaxIndexJohns2
    )} is higher than Mark's ${Math.floor(bodyMassIndexmarks2)}`
  );*/
// type conversion
/*const inputyear = "1991";
console.log(Number(inputyear));
console.log(inputyear + 18);
console.log(Number(inputyear) + 18);

console.log(String(23));
// type coercian

console.log(" I am " + 23 + "years old");
console.log("I am" + "23" + "years old");
console.log("23" - "10" - 3); //10
console.log("23" / "2"); //11.5
console.log("23" * "2"); //46

let n = "1" + 1; //11
n = n - 1; //11-1
console.log(n); //10*/
// 5 falsy values
/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money = 100;
if (money) {
  console.log("Dont spend it all");
} else {
  console.log("You should get a job");
}

let height;
if (height) {
  console.log("Ya, Height is defined");
} else {
  console.log("height is undefined!");
}*/

/*const age = "18";
if (age === 18) {
  console.log("you just became an adult (strict)");
}
if (age == 18) {
  console.log("you just became an adult(loose)");
}

//prompt("What is your favourite number?"); // wywołanie okna z zapytaniem

const favourite = Number(prompt("What is your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is amazing number");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

if (favourite !== 23) {
  console.log("Why not 23?");
}*/

/*const hasDriversLincese = true;
const hasGoodVision = true;

console.log(hasDriversLincese && hasGoodVision); //true
console.log(hasDriversLincese || hasGoodVision); // true
console.log(!hasDriversLincese); // false

const shouldDrive = hasDriversLincese && hasGoodVision;

/*if (shouldDrive) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive");
}*/

/*const isTired = false;
console.log((hasDriversLincese && hasGoodVision) || isTired);

if (hasDriversLincese && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive");
}*/

/*const scoreDoplhins1 = 96;
const scoreDoplhins2 = 108;
const scoreDoplhins3 = 89;

const scoreKoalas1 = 88;
const scoreKoalas2 = 91;
const scoreKoalas3 = 110;

const resultDolphins = scoreDoplhins1 + scoreDoplhins2 + scoreDoplhins3;
const resultKoalas = scoreKoalas1 + scoreKoalas2 + scoreKoalas3;

if (resultDolphins === resultKoalas) {
  console.log("It is a draw");
} else if (resultDolphins > resultKoalas) {
  console.log(" The winner is Doplhins team");
} else resultDolphins < resultKoalas;
console.log("The winner is Koala team");*/

/*const resultDolphins2 = (97 + 112 + 101) / 3;
const resultKoalas2 = (109 + 95 + 106) / 3;
console.log(resultDolphins2, resultKoalas2);
if (resultDolphins2 < resultKoalas2 && resultKoalas2 >= 100) {
  console.log("The winner is Koala team");
} else if (resultDolphins2 > resultKoalas2 && resultDolphins2 >= 100) {
  console.log(" The winner is Doplhins team");
} else resultDolphins2 === resultKoalas2;
console.log("It is a draw");*/

/*const day = "friday";
switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepary theory video");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepary theory video");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "sunday" || day === "saturday") {
  console.log("Enjoy the weekend");
} else console.log("Not a valid day");*/

/*const age = 15;
age >= 18
  ? console.log(" I like to drink wine")
  : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}

console.log(drink2);
console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);*/
/*
const bill1 = 275;
const bill2 = 40;
const bill3 = 430;

const tip1 = bill1 > 50 && bill1 < 300 ? 0.15 : 0.2;
console.log(
  `The bill was ${bill1} the tip was ${(total =
    tip1 * bill1)} and the total value ${bill1 + total} `
);

const tip2 = bill2 > 50 && bill2 < 300 ? 0.15 : 0.2;
console.log(
  `The bill was ${bill2} the tip was ${(total1 =
    tip2 * bill2)} and the total value ${bill2 + total1} `
);
const tip3 = bill3 > 50 && bill3 < 300 ? 0.15 : 0.2;
console.log(
  `The bill was ${bill3} the tip was ${(total2 =
    tip3 * bill3)} and the total value ${bill3 + total2} `
);*/



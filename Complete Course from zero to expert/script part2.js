/*"use strict";

let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log("I can drive");

//const interface = "Audio";

//const private = 534;

//const if = 23;*/

/*function logger() {
  console.log("My name is Jonas");
}
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
const applejuice = fruitProcessor(5, 0);
console.log(applejuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);*/
// function declaration
/*function calcAge1(birthYear) {
  const age = 2037 - birthYear;
  return age;
}
const age1 = calcAge1(1991);
console.log(age1);
// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age1, age2);*/

//arrow function

/*const calcAge3 = (birthyear) => 2037 - birthyear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthyear, firstName) => {
  const age = 2037 - birthyear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, "jonas"));
console.log(yearsUntilRetirement(1980, "bob"));*/

/*function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} piece of apples and ${orangePieces}pieces of  orange`;
  return juice;
}

console.log(fruitProcessor(2, 3));*/

/*const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }

  // return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));*/

/*const calcAverage = (a, b, c) => (a + b + c) / 3;
const dolphinScore1 = calcAverage(44, 23, 71);
const koalasScore1 = calcAverage(65, 54, 49);
console.log(dolphinScore1, koalasScore1);
const dolphinScore2 = calcAverage(85, 54, 41);
const koalasScore2 = calcAverage(23, 34, 27);
console.log(dolphinScore2, koalasScore2);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgDolphins * 2 < avgKoalas) {
    console.log(`Koalas win (${avgDolphins} vs ${avgKoalas} )`);
  } else console.log("No winner");
};

checkWinner(dolphinScore1, koalasScore1);
checkWinner(dolphinScore2, koalasScore2);*/

/*const friends = ["Micheal", "Steven", "Peter"];
console.log(friends);
const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const year = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[year.length - 1]);
console.log(age1, age2, age3);*/

/*const friends = ["Micheal", "Steven", "Peter"];
friends.push("Jay");

const newLength = friends.push("Jay");
console.log(newLength);
console.log(friends);

friends.unshift("John");
console.log(friends);

friends.pop();
friends.pop();
console.log(friends);
friends.shift();
console.log(friends);

friends.push(23);
console.log(friends.indexOf("Steven"));
console.log(friends.includes("Steven"));
console.log(friends.includes("23"));

if (friends.includes("Peter")) {
  console.log("You have a friend Peter");
}*/

/*const calcTip = (bill) => {
  return bill >= 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
};
console.log(calcTip(100));
const tip1 = calcTip(125);
const tip2 = calcTip(555);
const tip3 = calcTip(44);

const bills = new Array(125, 555, 44);
const tips = new Array(tip1, tip2, tip3);
console.log(tips);

const total = new Array(tip1 + bills[0], tip2 + bills[1], tip3 + bills[2]);
console.log(total);*/

/*const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Micheal", "Peter", "Steven"],
];

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Micheal", "Peter", "Steven"],
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

/*const interestedIn = prompt(
  "what do you want to know about Jonas? Choose beetween firstName, lastName, age, job, and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose beetween firstName, lastName, age, job, and friends"
  );
}*/
/*
jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);*/

/*const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Micheal", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function () {
    return 2037 - this.birthYear;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license `;
  },
};
console.log(jonas.calcAge(1991));
console.log(jonas["calcAge"](1991));
console.log(jonas.getSummary()); */

/*const mark = {
  firstName: "Mark",
  lastName: "Miller",
  weight: 78,
  height: 1.69,

  calcBMI: () => {
    return mark.weight / mark.height ** 2;
  },
};
const markBMI = Math.floor(mark.calcBMI());
Math.floor(markBMI);
const john = {
  firstName: "John",
  lastName: "Smitch",
  weight: 92,
  height: 1.95,
  calcBMI: () => {
    return john.weight / john.height ** 2;
  },
};
const johnBMI = Math.floor(john.calcBMI());

if (johnBMI > markBMI) {
  console.log(
    `${john.firstName}'s BMI ${johnBMI} is higher than ${mark.firstName}'s ${markBMI}`
  );
} else if (johnBMI < markBMI) {
  console.log(
    `${mark.firstName}'s BMI ${markBMI} is higher than ${john.firstName}'s ${johnBMI}`
  );
}*/

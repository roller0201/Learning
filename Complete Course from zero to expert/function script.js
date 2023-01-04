"use strict";

/*const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  //numPassengers = numPassengers || 1;
  //price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);

createBooking("LH123", undefined, 1000);*/

/*const flight = "LH234";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 132113232321,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr." + passenger;
  if (passenger.passport === 132113232321) {
    alert("Check in");
  } else alert("Wrong passport");
};
//checkIn(flight, jonas);
//console.log(flight);
//console.log(jonas);

// Is the same as doin..
//const flightNum = flight;
//const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(jonas);
checkIn(flight, jonas);*/

/*const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};
//Higher-order function
const transformer = function (str, fn) {
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Oryginal string: ${str}`);
  console.log(`Transformed by: ${fn.name}`);
};
transformer("JavaScript is the best!", oneWord);

const high5 = function () {
  console.log("like");
};
document.body.addEventListener("click", high5);

["Jonas", "Martha", "Adam"].forEach(high5);*/

/*const greet = function (greeting) {
  return function (name) {
    //console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Jonas");
greeterHey("Steven");

greet("Hello")("Jonas");

const greet1 = (greeting1) => {
  return (name1) => {
    console.log(`${greeting1} ${name1}`);
  };
};
const greeterHey1 = greet1("Hey");
greeterHey1("Jonas");
greeterHey1("Steven");
greet1("Hello")("Steven");*/

/*const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push(
      {
        flight: `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
      },
      name
    );
  },
};

lufthansa.book(239, "Jonas");
lufthansa.book(635, "John Smith");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;
//Does not work
//book(23, "Sarah Williams");
// Call method
book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper");

const swiss = {
  airline: "Swiss airlines",
  iataCode: "LX",
  bookings: [],
};
book.call(swiss, 583, "Mary Cooper");
console.log(swiss);

// Apply method
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);
//Call method
//book.call(swiss, ...flightData);
//Bind Method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, "Steven Wiliams");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Jonas Schmedtmann");
bookEW23("Martha Cooper");

//With Event Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
//lufthansa.buyPlane();
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
console.log(addVat(100));

const addTat1 = (rate, value) => {
  return value + value * rate;
};

const addVat1 = addTat1.bind(null, 0.23);
console.log(addVat1(100));
console.log(addVat1(23));*/

/*const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n ${this.options.join("\n")}\n (Write option number)`
      )
    );
    console.log(answer);

    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults();
    this.displayResults("String");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string");
    console.log(`Poll results are ${this.answers.join(", ")}`);
  },
};
//poll.registerNewAnswer();
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] });*/

/*const runOnce = (function () {
  console.log("This will never run again");
  const isPrivate = 23;
})();

(function () {
  console.log("This will never run again");
})();
(() => console.log("This will ALSO never run again"))();*/

/*const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);*/

/*let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);
h();
f();
console.dir(f);

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in${wait} seconds`);
};

boardPassengers(180, 3);*/

/*(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();*/

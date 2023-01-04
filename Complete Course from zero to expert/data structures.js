"use strict";
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Foccacia", "Bruschetta", "Garlic bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console
      .log
      //`order received${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
      ();
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    //console.log(mainIngredient);
    //console.log(otherIngredients);
  },
};
restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Via del sole,21",
  starterIndex: 1,
});
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

console.log(flights.split("+"));

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : " "}${type.replace(
    /_/g,
    " "
  )} 
  from  ${from.slice(0, 3).toUpperCase()} to  ${to
    .toUpperCase()
    .slice(0, 3)} (${time.replace(":", "h")})`;

  console.log(output);
}
/*
// Split and join
console.log("a+very+nice+string".split("+"));
console.log("Jonas Schmedtmann".split(" "));
const [firstName, lastName] = "Jonas Schmedtmann".split(" ");

const newName = ["mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(" "));
};
capitalizeName("jessica ann smith davis");
capitalizeName("jonas schmedtmann");

//Padding
const message = "Go to gate 23!";
console.log(message.padStart(20, "+").padEnd(30, "+"));
console.log("Jonas".padStart(20, "+").padEnd(30, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};
console.log(maskCreditCard(43335443));
console.log(maskCreditCard("43232443223443"));

// Repeat
const message2 = "Bad weather... All departures Delayed";
console.log(message2.repeat(5));
const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${" ".repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);*/
/*
const airline = "Tap air Portugal";
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitilization in name

const passenger = "jOnAS";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing email
const email = "hello@jonas.io";
const loginEmail = "    Hello@Jonas.Io \n";

//const lowerEmail = loginEmail.toLowerCase();
//const trimmedEmail = lowerEmail.trim();
//console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// replacing
const priceUS = "288,97$";
const priceZŁ = priceUS.replace("$", "ZŁ").replace(",", ".");
console.log(priceZŁ);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";
console.log(announcement.replace(/door/g, "gate"));

//Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Air"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("part of the New Airbus family");
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("you are not allowed on board");
  } else console.log("Welcome aboard");
};
checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socke and camera");
checkBaggage("Got some snacks and a gun for protection");
*/
/*const plane = "A320";
console.log(plane[0]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("portugal"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("you got the middle set");
  else console.log("You got lucky");
};
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("jonas"));
console.log(typeof new String("jonas"));*/

/*const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again"],
]);

console.log(question);
//Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt("Your answer"));
console.log(question.get(question.get("correct") === answer));
// Convert map to array
console.log([...question]);*/
/*const rest = new Map();
rest.set("Name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, Portugal");
console.log(rest);
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");

console.log(rest.get("Name"));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get("Open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
console.log(rest.size);

rest.set([1, 2], "Test");
rest.get([1, 2]);*/

/*const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Rissoto",
  "Pasta",
  "Pizza",
]);
console.log(orderSet);

console.log(orderSet.size);
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Bread"));
orderSet.add("Garlic Bread");
orderSet.delete("Rissoto");
console.log(orderSet);

for (const order of orderSet) console.log(order);

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

const staffUnique = new Set(staff);
console.log(staffUnique);*/
/*const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:`;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);
const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
//console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}*/
/*if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//with optimal chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

// Arrays
const users = [{ name: "Jonas", email: "hello@jonas.eu" }];

console.log(users[0]?.name ?? "User array empty");*/

/*const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect); //0

const rest1 = {
  name: "Capri",
  //numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};
// OR assigment operator
//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;

//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;

//nullis assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//rest1.owner = rest1.owner && "<Anonymous";
//rest2.owner = rest2.owner && "<Anonymous";
rest1.owner &&= "<Anonymous";
rest2.owner &&= "<Anonymous";
console.log(rest1);
console.log(rest2);*/

/*
// Spread, because on right side of =
const arr = [1, 2, ...[3, 4]];
// Rest, because on Left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
// Restructing
const [pizza, , risotto, ...other] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, other);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
//Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
restaurant.orderPizza("mushrooms", "onion", "Olives", "Spinach");
restaurant.orderPizza("mushrooms");

console.log("------------------OR----------------------");
// Use any data type, return any data type, short-circuting
console.log(3 || "Jonas"); //3
console.log("" || "Jonas"); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); //10

const guests2 = restaurant.numGuests || 10;
console.log(guests2); //10
console.log("--------------------AND-------------------");

console.log(0 && "Jonas"); //0
console.log(7 && "Jonas"); // Jonas
console.log("Hello" && 23 && null & "jonas");

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}
restaurant.orderPizza && restaurant.orderPizza("mushrooms", "Spinach");*/
/*const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
//default values
const { menu, starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);*/

////////////////////
//Spread operator(...)
/*const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy array
const mainManyCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu1 = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu1);

//Iterables: arrays, strings, maps, sets, NOT objects

const str = "Jonas";
const letters = [...str, "", "S."];
console.log(letters);
console.log(...str);
console.log("j", "o");
//Real world example
const ingredients = [
  prompt("let's make pasta! Ingridient 1? "),
  prompt("let's make pasta! Ingridient 2? "),
  prompt("let's make pasta! Ingridient 3? "),
];
console.log(ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//objects
const newRestaurant = { founderIn: 1998, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);*/
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//switch variables
//const temp = main;
//main = secondary;
//secondary = temp;
//console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested destructuring
const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
//console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);*/

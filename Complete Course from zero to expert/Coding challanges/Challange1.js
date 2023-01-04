/*const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const players1 = game.players[0];
const players2 = game.players[1];
console.log(players1);
console.log(players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
const players1final = [...players1, "Thiago", "Couthinio", "Perisic"];
console.log(players1final);

const teamodds1 = game.odds.team1;
const draw = game.odds.x;
const teamodds2 = game.odds.team2;
console.log(teamodds1, draw, teamodds2);

const printGoal = function (...players) {
  console.log(`${players.length} goals were scored`);
};
printGoal("Davies", "Muller", "Lewandowski", "Kimmich");
printGoal(...game.scored);

teamodds1 < teamodds2 && console.log("Team 1 is more likely to win");
teamodds1 > teamodds2 && console.log("Team 2 is more likely to win");

for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

const odds = Object.values(game.odds);
let average = 0;
for (const odd of Object.values(game.odds)) average += odd;
average /= odds.length;
console.log(average);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamString = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamString}  ${odd}`);
}*/

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

const events = new Set(gameEvents.values());
console.log(events);
gameEvents.delete(64);
console.log(gameEvents);

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes `
);

const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes `
);

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "First" : "Second";
  console.log(`[${half} Half] ${min}: ${event}`);
}

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  console.log(text);
  const rows = text.split("\n");
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20, " ")}${"✅".repeat(i + 1)}`);
  }
});

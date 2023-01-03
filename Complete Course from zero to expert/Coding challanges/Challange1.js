const game = {
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
}

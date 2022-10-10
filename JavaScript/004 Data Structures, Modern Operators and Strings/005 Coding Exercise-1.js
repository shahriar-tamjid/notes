"use strict";

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

// Destructuring "players1" and "players2" from "game.players" array
const [players1, players2] = game.players;
console.log(`players1 array: ${players1}`);
console.log(`players2 array: ${players2}`);
// Output:
// players1 array: Neuer,Pavard,Martinez,Alaba,Davies,Kimmich,Goretzka,Coman,Muller,Gnarby,Lewandowski
// players2 array: Burki,Schulz,Hummels,Akanji,Hakimi,Weigl,Witsel,Hazard,Brandt,Sancho,Gotze

// First player should be goal-keeper and remaining players should be on another array from "players1"
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
// Output:
// Neuer (10) ['Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski']

// Combining all players of two arrays into a single array
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// Output:
// (22) ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski', 'Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze']

// Adding 3 players into "players1" array
const players1Final = [...players1, "Thiago", "Coutinho", "Periscic"];
console.log(players1Final);
// Output:
// (14) ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski', 'Thiago', 'Coutinho', 'Periscic']

// Destructure the "game.odd" object into 3 variables: team1, draw, team2
// Note: here we have "x" but we need "draw", so we must further destructure it
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);
// Output:
// 11.33 3.25 6.5

// Create a function that tells number of goals scored and who scored goal just by accepting the parameters
const printGoals = function (...players) {
  console.log(`${players.length} goals scored`);
  // Goal details
  for (let i = 0; i < players.length; i++) {
    console.log(`Goal ${i + 1} scored by ${players[i]}`);
  }
};

printGoals(...game.scored);

// Output:
// 4 goals scored
// Goal 1 scored by Lewandowski
// Goal 2 scored by Gnarby
// Goal 3 scored by Lewandowski
// Goal 4 scored by Hummels

// Lower odds equals to better chance to win (Short Circuiting)
team1 < team2 && console.log(`Team 1 is more likely to win!`);
team1 > team2 && console.log(`Team 2 is more likely to win!`);
// Output:
// Team 1 is more likely to win!

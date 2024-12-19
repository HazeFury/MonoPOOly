const Player = require("./src/Player");
const Building = require("./src/Building");
const readline = require("readline-sync");

const playerName = readline.question("What is your name ? => ");

const player1 = new Player(playerName);

const appartement = new Building("appartement", 100000, 10000);
const house = new Building("maison", 300000, 50000);

console.log(player1);

player1.buyBuilding(appartement);
player1.buyBuilding(house);

console.log(player1);
let monthlyIncome = 0;

// biome-ignore lint/complexity/noForEach: <explanation>
player1.places.forEach((place) => {
  monthlyIncome += place.monthIncome;
});

for (let i = 0; i <= 12; i++) {
  console.log(`mois n=${i}`);
  player1.wallet += monthlyIncome;
  console.log(`vous avez touché ${monthlyIncome}$ ce mois-ci`);
  console.log(`votre fortune s'élève maintenant à : ${player1.wallet}`);
}

import Player from "./src/Player.js";
import readline from "readline-sync";
import Building from "./src/Building.js";
import { input, select, Separator } from "@inquirer/prompts";

const playerName = await input({ message: "Enter your name" });

const answer = await select({
  message: "Select a package manager",
  choices: [
    {
      name: "npm",
      value: "npm",
      description: "npm is the most popular package manager",
    },
    {
      name: "yarn",
      value: "yarn",
      description: "yarn is an awesome package manager",
    },
    new Separator(),
    {
      name: "jspm",
      value: "jspm",
      disabled: true,
    },
    {
      name: "pnpm",
      value: "pnpm",
      disabled: "(pnpm is not available)",
    },
  ],
});

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

// for (let i = 0; i <= 12; i++) {
//   console.log(`mois n=${i}`);
//   player1.wallet += monthlyIncome;
//   console.log(`vous avez touché ${monthlyIncome}$ ce mois-ci`);
//   console.log(`votre fortune s'élève maintenant à : ${player1.wallet}`);
// }

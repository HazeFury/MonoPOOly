import Player from "./classes/Player.ts";
import Building from "./classes/Building.ts";
import Screen from "./classes/Screen.ts";
import Game from "./classes/Game.ts";
import { input, confirm } from "@inquirer/prompts";
import chalk from "chalk";

const screen = new Screen();
const game = new Game();
const log = console.log;

// ************************  INITIALIZATION  ************************ //
await screen.launchStarter();
await game.menu();

const numberOfPlayer = await game.selectPlayers();

const players: Player[] = [];

const existingColors: string[] = [];

for (let i = 0; i < numberOfPlayer; i++) {
	const name = await input({ message: `Enter name of player ${i + 1}` });

	const color = await game.chooseColor(i, existingColors);
	// on each iteration, send an array with colors already taken by previous users
	//  to disable these colors
	existingColors.push(color);

	players.push(new Player(`Player ${i + 1}`, name, color));
}

log(chalk.bgGreen.bold("Summary :\n"));
screen.showPlayers(players);
const gameIsReadyToStart = await confirm({ message: "Continue ?" });

// if (gameIsReadyToStart === true) {
// 	// launch the game
// }

// ************************  LAUNCH THE GAME  ************************ //

// const player1 = new Player("marco");

// const appartement = new Building("appartement", 100000, 10000);
// const house = new Building("maison", 300000, 50000);

// console.log(player1);
// console.log(appartement);
// console.log(house);

// player1.buyBuilding(appartement);
// player1.buyBuilding(house);

// console.log(player1);
// let monthlyIncome = 0;

// // biome-ignore lint/complexity/noForEach: <explanation>
// player1.places.forEach((place: Building) => {
// 	monthlyIncome += place.monthIncome;
// });

// for (let i = 0; i <= 12; i++) {
// 	console.log(`mois n=${i}`);
// 	player1.wallet += monthlyIncome;
// 	console.log(`vous avez touché ${monthlyIncome}$ ce mois-ci`);
// 	console.log(`votre fortune s'élève maintenant à : ${player1.wallet}`);
// }

import { input, select, Separator } from "@inquirer/prompts";
import Screen from "./Screen.ts";
import chalk from "chalk";

// Game class is used to define the game logic !
class Game {
	screen: Screen;
	constructor() {
		this.screen = new Screen();
	}
	async menu() {
		let choice = -1;
		while (choice < 1) {
			choice = await select({
				message: "Select an option",
				choices: [
					{
						name: "Start a new game",
						value: 1,
					},
					{
						name: "Read rules",
						value: 0,
						description:
							"Is it the first time you play MonoPOOly ? Read the rules before start a new game",
					},
					new Separator(),
				],
			});
			if (choice === 0) {
				await this.screen.showRules();
			}
		}
	}

	async selectPlayers() {
		const numberOfPlayer: number = await select({
			message: "Select number of players :",
			choices: [
				{
					name: "2",
					value: 2,
				},
				{
					name: "3",
					value: 3,
				},
				{
					name: "4",
					value: 4,
				},
				{
					name: "5",
					value: 5,
				},
				{
					name: "6",
					value: 6,
				},

				new Separator(),
			],
		});
		if (numberOfPlayer < 2 && numberOfPlayer > 6) {
			throw new Error("Unauthorized number of players. Please try again");
		}
		return numberOfPlayer;
	}

	async chooseColor(index: number, existingColors: string[]) {
		const color: string = await select({
			message: `Select color of player ${index + 1} :`,
			choices: [
				{
					name: chalk.red("Red"),
					value: "#FF5C57",
					disabled: existingColors.some((el) => el === "#FF5C57"),
				},
				{
					name: chalk.green("Green"),
					value: "#5AF78E",
					disabled: existingColors.some((el) => el === "#5AF78E"),
				},
				{
					name: chalk.blue("Blue"),
					value: "#57C7FF",
					disabled: existingColors.some((el) => el === "#57C7FF"),
				},
				{
					name: chalk.yellow("Yellow"),
					value: "#edff63",
					disabled: existingColors.some((el) => el === "#edff63"),
				},
				{
					name: chalk.magenta("Magenta"),
					value: "#FE6AC1",
					disabled: existingColors.some((el) => el === "#FE6AC1"),
				},
				{
					name: chalk.cyan("Cyan"),
					value: "#9AEDFF",
					disabled: existingColors.some((el) => el === "#9AEDFF"),
				},

				new Separator(),
			],
		});
		if (
			color !== "#FF5C57" &&
			color !== "#5AF78E" &&
			color !== "#57C7FF" &&
			color !== "#edff63" &&
			color !== "#FE6AC1" &&
			color !== "#9AEDFF"
		) {
			throw new Error("You picked unexisting color. Please try again");
		}
		return color;
	}
}

export default Game;

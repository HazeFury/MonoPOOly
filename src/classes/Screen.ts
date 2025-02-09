import figlet from "figlet";
import chalk from "chalk";
import { table } from "console-table-without-index";
import type Player from "./Player";

// Screen class is used to display the gameplay in the terminal !
class Screen {
	async launchStarter() {
		const log = console.log;

		await figlet.text(
			"MonoPOOly !",
			{
				font: "Standard",
				horizontalLayout: "fitted",
				verticalLayout: "fitted",
				width: 100,
				whitespaceBreak: true,
			},
			(err, data) => {
				if (err) {
					log("Something went wrong...");
					console.dir(err);
					return;
				}
				log(chalk.black.bgYellow.bold(data));
				log("\n");
				log(
					chalk.blue(
						"______________________________________________________version 0.1\n",
					),
				);
				log(chalk.red.bold.underline.italic("Welcome on MonoPOOly Game !\n"));
				log(
					chalk.black.bgWhite(
						"=> Start a new game now or read the rules of the game if you play for the first time.\n",
					),
				);
				log(chalk.green("Enjoy ;)"));
				this.printHyphens();
			},
		);
	}

	showRules() {
		const log = console.log;
		log(chalk.white.bgRed.bold("RULES OF THE GAME\n"));
		// TODO : edit the rules of the game
		log(
			"Lorem ipsum dolor sit amet. Et molestiae facere et sapiente harum et omnis asperiores qui sunt aliquam aut tenetur nostrum qui odio dolor. Est odit maiores et similique totam id omnis dolorem ut fuga officia. Sit molestias omnis aut sint natus et itaque consequatur est eligendi vero est atque recusandae qui dolor magni! Non beatae ipsum cum inventore iusto id temporibus magni. Eos molestiae eius aut quidem quidem est repudiandae perspiciatis et laboriosam excepturi aut expedita consequatur et laudantium mollitia et voluptatem enim. Qui odit sapiente et accusamus iusto ut quasi iure. In Quis corporis qui eaque nemo est ducimus fuga ab unde eaque non reprehenderit maiores sed odit autem.",
		);
		this.printHyphens();
	}

	printHyphens() {
		console.log(
			"\n-----------------------------------------------------------------------\n",
		);
	}

	showPlayers(players: Player[]) {
		players.forEach((player) => {
			const toto = [];
			toto.push(player);
			// console.table(chalk.red(toto));
			console.log(
				chalk.hex(player.color)(
					table(toto, ["id", "name", "wallet", "places"]),
				),
			);
		});
		this.printHyphens();
		console.log(
			chalk.bgGreen.bold(
				"==> Press ENTER to start the game or 'n' to change settings\n",
			),
		);
	}
}

export default Screen;

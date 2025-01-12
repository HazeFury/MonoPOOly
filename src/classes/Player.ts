import type Building from "./Building";

class Player {
	name: string;
	wallet: number;
	places: Building[];
	constructor(name: string) {
		this.name = name;
		this.wallet = 400000;
		this.places = [];
	}
	buyBuilding(building: Building) {
		if (building.price <= this.wallet) {
			this.places.push(building);
			this.wallet -= building.price;
			console.log(`vous venez d'acheter ${building.name}`);
		} else {
			console.log("vous n'avez pas assez d'argent");
		}
	}
}

export default Player;

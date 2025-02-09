import type Building from "./Building";

class Player {
	id: string;
	name: string;
	wallet: number;
	places: Building[];
	color: string;
	constructor(id: string, name: string, color: string) {
		this.id = id;
		this.name = name;
		this.wallet = 400000;
		this.places = [];
		this.color = color;
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

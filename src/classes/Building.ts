class Building {
	name: string;
	price: number;
	monthIncome: number;
	constructor(name: string, price: number, income: number) {
		this.name = name;
		this.price = price;
		this.monthIncome = income; // le revenu mensuel d'un buildings
	}
}

export default Building;

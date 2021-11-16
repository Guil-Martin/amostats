let amosList;
let userList;
let locList;
let eventList;

export const numAmosPerTypes = (amosList) => {
	// "mammal": "#F887B0",
	// "bird": "#7EDCE6",
	// "fish": "#3289F6",
	// "amphibian": "#63BC55",
	// "reptile": "#2D8159",
	// "invertebrate": "#783BB6"

	const types = {
		mammal: 0,
		bird: 0,
		fish: 0,
		amphibian: 0,
		reptile: 0,
		invertebrate: 0,
	};

	for (const key in amosList) {
		const amos = amosList[key];
		switch (amos.amos_type) {
			case "mammal":
				types.mammal += 1;
				break;
			case "bird":
				types.bird += 1;
				break;
			case "fish":
				types.fish += 1;
				break;
			case "amphibian":
				types.amphibian += 1;
				break;
			case "reptile":
				types.reptile += 1;
				break;
			case "invertebrate":
				types.invertebrate += 1;
				break;
			default:
		}
	}

	return types;
};

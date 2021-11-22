import { isSameYear, isSameMonth, isSameDay } from "date-fns";

export const numAmosPerTypes = (amosList) => {
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

export const occurencesPerDay = (dataSet) => {
	const dates = dataSet.map((item) => new Date(item.created_at));

	dates.sort((a, b) => {
		return a - b;
	});

	let dateOccurences = [];

	dates.forEach((dateElt) => {
		let iCorrespond = { same: false, index: 0 };
		let occLength = dateOccurences.length;
		for (let i = 0; i < occLength; i++) {
			iCorrespond.same =
				isSameYear(dateElt, dateOccurences[i].x) &&
				isSameMonth(dateElt, dateOccurences[i].x) &&
				isSameDay(dateElt, dateOccurences[i].x);
			iCorrespond.index = i;
		}
		if (!iCorrespond.same) {
			dateOccurences = [...dateOccurences, { x: Date.parse(dateElt), y: 1 }];
		} else {
			dateOccurences[iCorrespond.index].y += 1;
		}
	});

	return dateOccurences;
};

export const getCreatedDates = (dataSet) => {
	return dataSet.map((item) => Date.parse(item.created_at));
};

export const dateInterval = (dateStrStart, dateStrEnd) => {
	const dateStartParsed = new Date(Date.parse(dateStrStart));
	const dateEndParsed = new Date(Date.parse(dateStrEnd));
	return { dateStart: dateStartParsed, dateEnd: dateEndParsed };
};

import { getUniqueStatesSet } from "./getUniqueStatesSet";

export const getAreaDescMAP = alertAreaDescSTR => {
	if (alertAreaDescSTR === null || alertAreaDescSTR === undefined) return;

	const areaDescARR = alertAreaDescSTR.split(/(?:;\s)/gm);
	const areaDescMAP = new Map();

	areaDescARR.forEach(affectedArea => {
		const [alertArea, state] = affectedArea.split(/\,\s/);

		if (areaDescMAP.get(state) === undefined) {
			areaDescMAP.set(state, new Array(alertArea));
		} else {
			areaDescMAP.set(state, [...areaDescMAP.get(state), alertArea]);
		}
	});

	// *********************************
	// __TESTING__
	console.log("///////////////////////////////////////////");

	// for (const [state, areas] of areaDescMAP) {
	// 	console.log(state);
	// 	console.log(areas);
	// }

	// areaDescMAP.forEach((areas, state, areaDescMAP) => {
	// 	console.log(state);
	// 	console.log(areas);
	// });

	const testArr = Array.from(areaDescMAP.entries());
	testArr.map(([state, areas]) => {
		// console.log(state);
		// console.log(areas.join(", "));
	});

	// og string not modified
	console.log(areaDescMAP);
	console.log(alertAreaDescSTR);

	console.log("///////////////////////////////////////////");
	// *********************************

	return areaDescMAP;
};

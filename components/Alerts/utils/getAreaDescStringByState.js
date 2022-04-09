import { getUniqueStatesSet } from "./getUniqueStatesSet";

export const getAffectedAreasStringByState = alertAreaDescSTR => {
	if (alertAreaDescSTR === null || alertAreaDescSTR === undefined) return;
	// --------------------------------------------------
	// unique state abbreviations Set
	// --------------------------------------------------
	const areaDescSET = getUniqueStatesSet(alertAreaDescSTR);
	// --------------------------------------------------

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
	for (const state of areaDescMAP.keys()) {
		console.log(state);
		console.log(areaDescMAP.get(state));
	}
	console.log("///////////////////////////////////////////");
	// *********************************

	return areaDescARR;
};

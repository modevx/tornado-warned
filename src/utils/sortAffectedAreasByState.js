export const sortAffectedAreasByState = (areaDesc) => {
	const affectedAreasARR = createAffectedAreasArray(areaDesc);
	const affectedAreasMAP = new Map();

	affectedAreasARR.forEach((areaState) => {
		const [area, state] = areaState.split(/\,\s/);
		assignAreaToState({ map: affectedAreasMAP, area, state });
		// if (affectedAreasMAP.get(state) === undefined) {
		// 	affectedAreasMAP.set(state, new Array(area));
		// } else {
		// 	affectedAreasMAP.set(state, [...affectedAreasMAP.get(state), area]);
		// }
	});

	return affectedAreasMAP;
};

const createAffectedAreasArray = (areaDescSTR) => {
	return areaDescSTR.split(/(?:;\s)/gm);
};

const assignAreaToState = ({ map, area, state }) => {
	if (map.get(state) === undefined) {
		map.set(state, new Array(area));
	} else {
		map.set(state, [...map.get(state), area]);
	}
};

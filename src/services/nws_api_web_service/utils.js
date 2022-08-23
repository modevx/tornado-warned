export const getAreaDescMAP = (alertAreaDescSTR) => {
	if (alertAreaDescSTR === null || alertAreaDescSTR === undefined) return;

	const areaDescARR = alertAreaDescSTR.split(/(?:;\s)/gm);
	const areaDescMAP = new Map();

	areaDescARR.forEach((affectedArea) => {
		const [alertArea, state] = affectedArea.split(/\,\s/);

		if (areaDescMAP.get(state) === undefined) {
			areaDescMAP.set(state, new Array(alertArea));
		} else {
			areaDescMAP.set(state, [...areaDescMAP.get(state), alertArea]);
		}
	});

	return areaDescMAP;
};

// ex: 'NWS Charlotte NC' --> 'Charlotte, NC'
export const formatSenderNameSTR = (senderName) => {
	return senderName
		.slice(4)
		.split(/\s(?=[A-Z]{2})/)
		.join(", ");
};

export const parseLocation = (WMOidentifier) => {
	const splitWmoId = WMOidentifier.split(" ");
	const station = splitWmoId.slice(1, 2)[0];
	return station.slice(1);
};

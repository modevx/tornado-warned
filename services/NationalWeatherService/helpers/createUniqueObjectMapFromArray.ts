export const createUniqueAlertArraysObject = (alertObjectArray: object[]) => {
	const uniqueAlertArraysObject = Object.create({});

	alertObjectArray.forEach(alertObject => {
		const event = alertObject.properties.event;

		if (!uniqueAlertArraysObject.hasOwnProperty(event)) {
			uniqueAlertArraysObject[event] = [];
			uniqueAlertArraysObject[event].push(alertObject);
		}
		uniqueAlertArraysObject[event].push(alertObject);
	});

	return uniqueAlertArraysObject;
};

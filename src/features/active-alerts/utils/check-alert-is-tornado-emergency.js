import { checkStringForPhrase } from "utils";

export const checkAlertIsTornadoEmergency = (alert) => {
	const { description } = alert.properties;
	return checkStringForPhrase(description, "Tornado Emergency");
};

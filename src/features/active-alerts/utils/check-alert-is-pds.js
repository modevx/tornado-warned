import { checkStringForPhrase } from "utils";

export const checkAlertIsPDS = (alert) => {
	const { description } = alert.properties;
	return checkStringForPhrase(description, "Particularly Dangerous Situation");
};

import { ENDPOINTS } from "services/national-weather-service";
import {
	NATIONAL_WEATHER_SERVICE,
	getFromService,
} from "services/http-client.js";

export const fetchActiveTornadoAlerts = async () => {
	const responseData = await getFromService(
		NATIONAL_WEATHER_SERVICE,
		ENDPOINTS.active_tornado_alerts
	);

	return responseData.features;
};
export const fetchActiveTornadoWarnings = async () => {
	const responseData = await getFromService(
		NATIONAL_WEATHER_SERVICE,
		ENDPOINTS.active_tornado_warnings
	);

	return responseData.features;
};
export const fetchTornadoWatches = async () => {
	const responseData = await getFromService(
		NATIONAL_WEATHER_SERVICE,
		ENDPOINTS.active_tornado_watches
	);

	return responseData.features;
};
// used to get PRELIM DAMAGE ASSESSMENTS
export const fetchPublicInformationStatements = async () => {
	// get last 2 weeks tornado warnings

	// parse locations (station call signs) from WMOidentifiers

	// get PNS (Public Info Statements) for tornado-warned locations

	//

	return null;
};

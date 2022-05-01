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

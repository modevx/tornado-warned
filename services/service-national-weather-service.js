import { NATIONAL_WEATHER_SERVICE as AXIOS } from "./client";
import { NATIONAL_WEATHER_SERVICE as ENDPOINTS } from "./endpoints";

const fetchFromNationalWeatherService = async (axiosInstance, endpoint) => {
	const raw = await axiosInstance.get(endpoint);
	return await raw.data.features;
};

export const fetchActiveTornadoAlerts = async () => {
	return await fetchFromNationalWeatherService(
		AXIOS,
		ENDPOINTS.active_tornado_alerts
	);
};
export const fetchActiveTornadoWarnings = async () => {
	return await fetchFromNationalWeatherService(
		AXIOS,
		ENDPOINTS.active_tornado_warnings
	);
};
export const fetchTornadoWatches = async () => {
	return await fetchFromNationalWeatherService(
		AXIOS,
		ENDPOINTS.active_tornado_watches
	);
};

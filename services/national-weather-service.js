import { NATIONAL_WEATHER_SERVICE as AXIOS } from "./constants/axios";
import { NATIONAL_WEATHER_SERVICE as ENDPOINTS } from "./constants/endpoints";

const fetchFromNationalWeatherService = async (axiosInstance, endpoint) => {
	const raw = await axiosInstance.get(endpoint);
	return await raw.data.features;
};

export const fetchActiveTornadoAlerts = async () => {
	return await fetchFromNationalWeatherService(
		AXIOS,
		ENDPOINTS.allTornadoAlerts
	);
};
export const fetchActiveTornadoWarnings = async () => {
	return await fetchFromNationalWeatherService(
		AXIOS,
		ENDPOINTS.tornadoWarnings
	);
};
export const fetchTornadoWatches = async () => {
	return await fetchFromNationalWeatherService(AXIOS, ENDPOINTS.tornadoWatches);
};

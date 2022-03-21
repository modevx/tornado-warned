import {
	API_PATHS as URLS,
	AXIOS_CONFIG as NWS,
	QUERY_PARAMS as PARAMS,
} from "../NationalWeatherService";
import { ACTIVE_ALERT, CANCELLED_ALERT } from "./types";

const fetchAlerts = async alertTypePath => {
	const raw = await NWS.get(alertTypePath);
	const features = await raw.data.features;

	console.log("fetchAlerts", alertTypePath, features);

	return features.map(alert => {
		const { areaDesc, effective, expires } = alert.properties;
		return { areaDesc, effective, expires };
	});
};
// -- ACTIVE ALERTS
export const fetchTornadoWarnings = async () => {
	return await fetchAlerts(URLS.tornadoWarnings);
};
export const fetchTornadoWatches = async () => {
	return await fetchAlerts(URLS.tornadoWatches);
};
export const fetchCancelledAlerts = async () => {
	const raw = await NWS.get(URLS.cancelledAlerts);
	const features = await raw.data.features;
	const currentTime = new Date();

	const recentCancels = await features.filter(alert => {
		const { event, areaDesc, effective, description } = alert.properties;
		const effectiveTime = new Date(effective);
		const dateDiff = currentTime.getTime() - effectiveTime.getTime();
		const hourDiff = dateDiff / (1000 * 60 * 60);
		console.log("fetchCancelledAlerts", hourDiff);

		if (hourDiff < 60) {
			return { event, areaDesc, effective, description };
		}
	});

	return recentCancels;
};
// -- TEST REQUESTS
export const fetchTornadoWarningsTest = async () => {
	return await fetchAlerts(URLS.tornadoWarningsTest);
};
export const fetchTornadoWatchesTest = async () => {
	return await fetchAlerts(URLS.tornadoWatchesTest);
};
export const fetchCancelledAlertsTest = async () => {
	const raw = await NWS.get(URLS.cancelledAlertsTest);
	return await raw.data.features;
};

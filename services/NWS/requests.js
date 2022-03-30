import { NWS_URLS } from "../../constants";
import { NWS_CONFIG } from "../configs";

const fetchAlerts = async alertTypePath => {
	const raw = await NWS_CONFIG.get(alertTypePath);
	const features = await raw.data.features;

	console.log("fetchAlerts", alertTypePath, features);

	return features.map(alert => {
		const { areaDesc, effective, expires } = alert.properties;
		return { areaDesc, effective, expires };
	});
};
// -- ACTIVE ALERTS
export const fetchTornadoWarnings = async () => {
	return await fetchAlerts(NWS_URLS.tornadoWarnings);
};
export const fetchTornadoWatches = async () => {
	return await fetchAlerts(NWS_URLS.tornadoWatches);
};
export const fetchCancelledAlerts = async () => {
	const raw = await NWS_CONFIG.get(NWS_URLS.cancelledAlerts);
	const features = await raw.data.features;
	// const currentTime = new Date();

	return await features.map(alert => {
		const { event, areaDesc, effective, description } = alert.properties;

		return { event, areaDesc, effective, description };

		// const effectiveTime = new Date(effective);
		// const dateDiff = currentTime.getTime() - effectiveTime.getTime();
		// const hourDiff = dateDiff / (1000 * 60 * 60);
		// console.log("fetchCancelledAlerts", hourDiff);

		// if (hourDiff < 60) {
		// 	return { event, areaDesc, effective, description };
		// }
	});

	// return recentCancels;
};
// -- TEST REQUESTS
export const fetchTornadoWarningsTest = async () => {
	return await fetchAlerts(NWS_URLS.tornadoWarningsTest);
};
export const fetchTornadoWatchesTest = async () => {
	return await fetchAlerts(NWS_URLS.tornadoWatchesTest);
};
export const fetchCancelledAlertsTest = async () => {
	const raw = await fetchAlerts(NWS_URLS.cancelledAlertsTest);
	return await raw.data.features;
};

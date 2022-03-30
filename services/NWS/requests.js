import { NWS_URLS } from "../../constants";
import { NWS_CONFIG } from "../configs";

const fetchAlerts = async endpoint => {
	const raw = await NWS_CONFIG.get(endpoint);
	return await raw.data.features;
};
// -- ACTIVE ALERTS
export const fetchTornadoWarnings = async () => {
	return await fetchAlerts(NWS_URLS.tornadoWarnings);
};
export const fetchTornadoWatches = async () => {
	return await fetchAlerts(NWS_URLS.tornadoWatches);
};
export const fetchCancelledAlerts = async () => {
	// const raw = await NWS_CONFIG.get(NWS_URLS.cancelledAlerts);
	// return await raw.data.features;
	return await fetchAlerts(NWS_URLS.cancelledAlerts);
	// const currentTime = new Date();

	// return await features.map(alert => {
	// 	const { event, areaDesc, effective, description } = alert.properties;

	// 	return { event, areaDesc, effective, description };

	// const effectiveTime = new Date(effective);
	// const dateDiff = currentTime.getTime() - effectiveTime.getTime();
	// const hourDiff = dateDiff / (1000 * 60 * 60);
	// console.log("fetchCancelledAlerts", hourDiff);

	// if (hourDiff < 60) {
	// 	return { event, areaDesc, effective, description };
	// }
	// });

	// return recentCancels;
};

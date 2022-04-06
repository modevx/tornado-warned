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
	return await fetchAlerts(NWS_URLS.cancelledAlerts);
};
export const fetchTestAlerts = async () => {
	return await fetchAlerts(NWS_URLS.tornadoWarningsTest);
};

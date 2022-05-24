import { useQuery } from "react-query";
import { NATIONAL_WEATHER_SERVICE as KEYS } from "site_data";
import {
	fetchActiveTornadoAlerts,
	// fetchActiveTornadoWarnings,
	// fetchTornadoWatches,
} from "services";

export const useActiveTornadoAlerts = () => {
	return useQuery(KEYS.active_tornado_alerts, fetchActiveTornadoAlerts);
};
// export const useActiveTornadoWarnings = () => {
// 	return useQuery(KEYS.active_tornado_warnings, fetchActiveTornadoWarnings);
// };
// export const useActiveTornadoWatches = () => {
// 	return useQuery(KEYS.active_tornado_watches, fetchTornadoWatches);
// };

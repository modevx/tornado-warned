import { URLS } from "./config";
import { useQuery } from "react-query";
import {
	getStormWarnings,
	getStormWatches,
	getTornadoWarnings,
	getTornadoWatches,
} from "./service";

export const useStormWarningsQuery = () => {
	return useQuery(["nwsAlerts", "stormWarnings"], () =>
		getStormWarnings(URLS.stormWarnings)
	);
};
export const useStormWatchesQuery = () => {
	return useQuery(["nwsAlerts", "stormWatches"], () =>
		getStormWatches(URLS.stormWatches)
	);
};
export const useTornadoWarningsQuery = () => {
	return useQuery(["nwsAlerts", "tornadoWarnings"], () =>
		getTornadoWarnings(URLS.tornadoWarnings)
	);
};
export const useTornadoWatchesQuery = () => {
	return useQuery(["nwsAlerts", "tornadoWatches"], () =>
		getTornadoWatches(URLS.tornadoWatches)
	);
};

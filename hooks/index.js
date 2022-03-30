import { useQuery } from "react-query";
import {
	fetchTornadoWarnings,
	fetchTornadoWarningsTest,
	fetchTornadoWatches,
	fetchTornadoWatchesTest,
	fetchCancelledAlerts,
	fetchCancelledAlertsTest,
} from "../services/NWS/requests";

export const useTornadoWarnings = () => {
	return useQuery("tornadoWarnings", fetchTornadoWarnings);
};
export const useTornadoWatches = () => {
	return useQuery("tornadoWatches", fetchTornadoWatches);
};
export const useCancelledAlerts = () => {
	return useQuery("cancelledAlerts", fetchCancelledAlerts);
};
export const useTornadoWarningsTest = () => {
	return useQuery("testTornadoWarnings", fetchTornadoWarningsTest);
};
export const useTornadoWatchesTest = () => {
	return useQuery("testTornadoWatches", fetchTornadoWatchesTest);
};
export const useCancelledAlertsTest = () => {
	return useQuery("testCancelledAlerts", fetchCancelledAlertsTest);
};

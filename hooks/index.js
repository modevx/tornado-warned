import { useQuery } from "react-query";
import {
	fetchTornadoWarnings,
	fetchTornadoWarningsTest,
	fetchTornadoWatches,
	fetchTornadoWatchesTest,
	fetchCancelledAlerts,
	fetchCancelledAlertsTest,
} from "../services/NationalWeatherService/requests";
import { ACTIVE_ALERT, CANCELLED_ALERT } from "./types";

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

import { useQuery } from "react-query";
import {
	fetchAllTornadoAlertsFromNWS,
	fetchAllTestAlertsFromNWS,
	fetchTornadoWarningsFromNWS,
	fetchTornadoWatchesFromNWS,
	fetchTestTornadoWarningsFromNWS,
	fetchTestTornadoWatchesFromNWS,
} from "../services/national-weather-service";

const KEYS = Object.freeze({
	all_tornado_alerts: "all_tornado_alerts",
	active_warnings: "active_warnings",
	active_watches: "active_watches",
	all_test_alerts: "all_test_alerts",
	test_warnings: "test_warnings",
	test_watches: "test_watches",
});
// -- ACTIVE ALERT HOOKS
export const useAllTornadoAlerts = () => {
	return useQuery(KEYS.all_tornado_alerts, fetchAllTornadoAlertsFromNWS);
};
export const useTornadoWarnings = () => {
	return useQuery(KEYS.active_warnings, fetchTornadoWarningsFromNWS);
};
export const useTornadoWatches = () => {
	return useQuery(KEYS.active_watches, fetchTornadoWatchesFromNWS);
};
// -- TEST HOOKS
export const useAllTestAlerts = () => {
	return useQuery(KEYS.all_test_alerts, fetchAllTestAlertsFromNWS);
};
export const useTestTornadoWarnings = () => {
	return useQuery(KEYS.test_warnings, fetchTestTornadoWarningsFromNWS);
};
export const useTestTornadoWatches = () => {
	return useQuery(KEYS.test_watches, fetchTestTornadoWatchesFromNWS);
};

import { useQuery } from "react-query";
import {
	fetchTornadoWarnings,
	fetchTornadoWatches,
	fetchCancelledAlerts,
	fetchTestAlerts,
} from "../apis/national-weather-service";

export const useTornadoWarnings = () => {
	return useQuery("tornadoWarnings", fetchTornadoWarnings);
};
export const useTornadoWatches = () => {
	return useQuery("tornadoWatches", fetchTornadoWatches);
};
export const useCancelledAlerts = () => {
	return useQuery("cancelledAlerts", fetchCancelledAlerts);
};
export const useTestAlerts = () => {
	return useQuery("testAlerts", fetchTestAlerts);
};

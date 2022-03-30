import { useQuery } from "react-query";
import {
	fetchTornadoWarnings,
	fetchTornadoWatches,
	fetchCancelledAlerts,
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

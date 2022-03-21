import { useQuery } from "react-query";
import {
	fetchTornadoWarningsTest,
	fetchActiveAlerts,
	fetchTestAlerts,
} from "./requests";

export const useActiveAlerts = () => {
	return useQuery(["activeAlerts"], () => fetchActiveAlerts());
};
// export const useTornadoWarnings = () => {
// 	return useQuery(["tornadoWarnings"], () => {
// 		fetchAlerts();
// 	});
// };
// export const useTornadoWatches = () => {
// 	return useQuery(["tornadoWatches"], () => fetchAlerts());
// };
// export const useCancelledAlerts = () => {
// 	return useQuery(["cancelledAlerts"], () => fetchAlerts());
// };
export const useTornadoWarningsTest = () => {
	return useQuery(["testTornadoWarnings"], () => fetchTornadoWarningsTest());
};

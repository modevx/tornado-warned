import { useQuery } from "react-query";
import { getActiveTornadoAlerts } from "services";

export const useActiveTornadoAlerts = () => {
	return useQuery("active tornado alerts", getActiveTornadoAlerts);
};

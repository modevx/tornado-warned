import { useQuery } from "react-query";
import { getActiveTornadoAlerts } from "services/SPC";

export const useNwsTornadoAlertsQuery = () => {
	return useQuery("active tornado alerts", getActiveTornadoAlerts);
};

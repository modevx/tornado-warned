import { useQuery } from "react-query";
import { getActiveTornadoAlerts } from "services/NWS";

export const useTornadoAlertsQuery = async () => {
	return await useQuery("active-tornado-alerts", getActiveTornadoAlerts);
};

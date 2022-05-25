import { useQuery } from "react-query";
import { getTornadoAlerts } from "services/NWS";

export const useTornadoAlerts = (alertType) => {
	return useQuery(["active-tornado-alerts", alertType], () =>
		getTornadoAlerts(alertType)
	);
};

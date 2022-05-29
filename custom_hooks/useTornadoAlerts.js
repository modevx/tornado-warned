import { useQuery } from "react-query";
import { getTornadoAlerts } from "services/nws";

export const useTornadoAlerts = (alertType) => {
	return useQuery(["active-tornado-alerts", alertType], () =>
		getTornadoAlerts(alertType)
	);
};

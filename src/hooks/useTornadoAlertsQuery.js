import { useQuery } from "@tanstack/react-query";
import { getTornadoAlerts } from "services/nws-alerts-service";

export const useTornadoAlertsQuery = (alertType) => {
	return useQuery(["tornado-alerts", alertType], () =>
		getTornadoAlerts(alertType)
	);
};

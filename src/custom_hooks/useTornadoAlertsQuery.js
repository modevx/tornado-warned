import { useQuery } from "react-query";
import { getTornadoAlerts } from "services/nws-api-web-service";

export const useTornadoAlertsQuery = (alertType) => {
	return useQuery(["tornado-alerts", alertType], () =>
		getTornadoAlerts(alertType)
	);
};

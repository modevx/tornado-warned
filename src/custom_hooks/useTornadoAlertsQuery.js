import { useQuery } from "react-query";
import { getTornadoAlerts } from "services/national-wx-service";

export const useTornadoAlertsQuery = (alertType) => {
	return useQuery(["tornado-alerts", alertType], () =>
		getTornadoAlerts(alertType)
	);
};

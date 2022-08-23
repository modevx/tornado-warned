import { useQuery } from "react-query";
import { getNwsAlerts } from "services/nws_api_web_service";

export const useNwsAlertsQuery = (alertType) => {
	return useQuery(["National_Weather_Service", alertType], () =>
		getNwsAlerts(alertType)
	);
};

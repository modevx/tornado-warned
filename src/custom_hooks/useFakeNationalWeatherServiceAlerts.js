import { useQuery } from "react-query";
import { getFakeNationalWeatherServiceAlerts } from "services/nws_api_web_service";

export const useFakeNationalWeatherServiceAlerts = (alertType) => {
	return useQuery(["nationalWeatherServiceAlerts", alertType], () =>
		getFakeNationalWeatherServiceAlerts(alertType)
	);
};

import { useQuery } from "@tanstack/react-query";
import { getFakeNationalWeatherServiceAlerts } from "services/nws-alerts-service";

export const useFakeNationalWeatherServiceAlerts = (alertType) => {
	return useQuery(["nationalWeatherServiceAlerts", alertType], () =>
		getFakeNationalWeatherServiceAlerts(alertType)
	);
};

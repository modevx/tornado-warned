import { useQuery } from "react-query";
import { getFakeNationalWeatherServiceAlerts } from "services/national_weather_service";

export const useFakeNationalWeatherServiceAlerts = (alertType) => {
	return useQuery(["nationalWeatherServiceAlerts", alertType], () =>
		getFakeNationalWeatherServiceAlerts(alertType)
	);
};

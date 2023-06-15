import { useQuery } from "@tanstack/react-query";

import { createHTTPClient } from "services/create-http-client";

const nwsWebServiceClient = createHTTPClient({
	baseURL: "https://api.weather.gov",
});

const ALERTS_EVENTS = {
	tornado_warning: "Tornado Warning",
	tornado_watch: "Tornado Watch",
	severe_storm_warning: "Severe Thunderstorm Warning",
	severe_storm_watch: "Severe Thunderstorm Watch",
};

const ERROR_TITLE = "ERROR: National Weather Service API Web Service";

const getActiveAlertsByEvent = async (event) => {
	const uriEncodedEvent = encodeURIComponent(event);
	const endpointParams = "/alerts/active?status=actual&message_type=alert";

	try {
		const response = await nwsWebServiceClient.get(
			`${endpointParams}&event=${uriEncodedEvent}`
		);
		const { features } = response?.data;
		return features;
	} catch (error) {
		console.log(`${ERROR_TITLE}\n`, error);
		throw new Error(`${ERROR_TITLE}\n`, error);
	}
};

export const useTornadoWatchAlertQuery = () => {
	return useQuery(["alerts", "active", ALERTS_EVENTS.tornado_watch], () =>
		getActiveAlertsByEvent(ALERTS_EVENTS.tornado_watch)
	);
};

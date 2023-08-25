import { useQuery } from "@tanstack/react-query";

import { FAKE_ALERTS } from "./fake-alerts";
import { createHTTPClient } from "services/create-http-client";

const nwsApiClient = createHTTPClient({
	baseURL: "https://api.weather.gov",
});

const ERROR_TITLE = "/// ERROR: National Weather Service API Web Service ///";

const getNwsAlertsByEvent = async (event) => {
	const encodedEvent = encodeURIComponent(event);
	const endpoint = `/alerts/active?status=actual&message_type=alert&event=${encodedEvent}`;

	try {
		const response = await nwsApiClient.get(endpoint);
		const { features } = response?.data;

		return features;
	} catch (error) {
		console.log(`${ERROR_TITLE}\n`, error);
		throw new Error(`${ERROR_TITLE}\n`, error);
	}
};

export const useNwsAlertsByEvent = (event) => {
	return useQuery(["NWS", "Alerts", event], () => getNwsAlertsByEvent(event));
};

// ------------------------ SIMPLIFY SERVICE -------------------------

const getWarningAlertsByEvent = async (warningEvent) => {
	const uriEncodedEvent = encodeURIComponent(warningEvent);
	const queryParams = `/alerts/active?status=actual&message_type=alert&event=${uriEncodedEvent}`;

	try {
		const response = await nwsApiClient.get(queryParams);
		const { features } = response?.data;
		return features;
	} catch (error) {
		console.log(`${ERROR_TITLE}\n`, error);
		throw new Error(`${ERROR_TITLE}\n`, error);
	}
};

const getWatchAlertsByEvent = async (watchEvent) => {
	const uriEncodedEvent = encodeURIComponent(watchEvent);
	const queryParams = `/alerts/active?status=actual&message_type=alert&event=${uriEncodedEvent}`;

	let watchFeatures = [];

	try {
		const response = await nwsApiClient.get(queryParams);
		const { features } = response?.data;

		if (features.length > 0) {
			watchFeatures = features.map((feature) => {
				const affectedZones = parseAffectedFIPSCodes(feature);

				return Object.assign({ ...feature }, { zoneIds: affectedZones });
			});
		}

		return watchFeatures;
	} catch (error) {
		console.log(`${ERROR_TITLE}\n`, error);
		throw new Error(`${ERROR_TITLE}\n`, error);
	}
};

export const useWarningAlertsByEvent = (warningEvent) => {
	return useQuery(["NWS", "Alerts", "Warnings", warningEvent], () =>
		getWarningAlertsByEvent(warningEvent)
	);
};

export const useWatchAlertsByEvent = (watchEvent) => {
	return useQuery(["NWS", "Alerts", "Watches", watchEvent], () =>
		getWatchAlertsByEvent(watchEvent)
	);
};

export const useFakeWarningAlertsByEvent = (warningEvent) => {
	return FAKE_ALERTS[warningEvent];
};

export const useFakeWatchAlertsByEvent = (watchEvent) => {
	const features = FAKE_ALERTS[watchEvent];
	let affectedZones = [];

	features.forEach((feature) => {
		affectedZones = [...affectedZones, ...feature.properties.geocode.SAME];
	});

	return { features, affectedZones };
};

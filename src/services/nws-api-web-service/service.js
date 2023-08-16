import { useQuery } from "@tanstack/react-query";

import { createHTTPClient } from "services/create-http-client";
import { FAKE_ALERTS } from "./fake-alerts";

const nwsWebServiceClient = createHTTPClient({
	baseURL: "https://api.weather.gov",
});

const NWS_ALERTS_EVENTS = {
	tornado_warning: "Tornado Warning",
	tornado_watch: "Tornado Watch",
	severe_storm_warning: "Severe Thunderstorm Warning",
	severe_storm_watch: "Severe Thunderstorm Watch",
};

const ERROR_TITLE = "/// ERROR: National Weather Service API Web Service ///";

const getWarningAlertsByEvent = async (warningEvent) => {
	const uriEncodedEvent = encodeURIComponent(warningEvent);
	const queryParams = `/alerts/active?status=actual&message_type=alert&event=${uriEncodedEvent}`;

	try {
		const response = await nwsWebServiceClient.get(queryParams);
		const { features } = response?.data;
		return features;
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

const getWatchAlertsByEvent = async (watchEvent) => {
	const uriEncodedEvent = encodeURIComponent(watchEvent);
	const queryParams = `/alerts/active?status=actual&message_type=alert&event=${uriEncodedEvent}`;
	let affectedZones = null;

	try {
		const response = await nwsWebServiceClient.get(queryParams);
		const { features } = response?.data;

		if (features.length > 0) {
			affectedZones = parseAffectedZones({ features: features });
			console.log("Affected Zone Geometry >>\n", affectedZones);
		}

		// return features;
	} catch (error) {
		console.log(`${ERROR_TITLE}\n`, error);
		throw new Error(`${ERROR_TITLE}\n`, error);
	}
};

export const useWatchAlertsByEvent = (watchEVent) => {
	return useQuery(["NWS", "Alerts", "Watches", watchEVent], () =>
		getWarningAlertsByEvent(watchEVent)
	);
};

export const useFakeWarningAlerts = (warningEvent) => {
	return FAKE_ALERTS[warningEvent];
};

export const useFakeWatchAlerts = (watchEvent) => {
	const alerts = FAKE_ALERTS[watchEvent];
	console.log("useFakeWatchAlerts: alerts >>\n", alerts);
	const affectedZones = parseAffectedZones({ features: alerts });
	console.log("useFakeWatchAlerts: affectedZones >>\n", affectedZones);
};

const parseAffectedZones = ({ features }) => {
	const countyZoneCodes = [];

	features.forEach((feature) => {
		countyZoneCodes = [...countyZoneCodes, feature.properties.geocode.UGC];
	});

	return countyZoneCodes;
};

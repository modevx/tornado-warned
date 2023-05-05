import { useQuery } from "@tanstack/react-query";
import { nwsApiWebServiceHTTPClient } from "./http-client";
import { FAKE_TORNADO_WARNINGS, FAKE_TORNADO_WATCHES } from "./fake-data";

const fetchActiveAlertsByEvent = async (event) => {
	try {
		const response = await nwsApiWebServiceHTTPClient.get(
			`/alerts/active?status=actual&message_type=alert&event=${encodeURIComponent(
				event
			)}`
		);
		const { id, geometry, properties } = await response?.data.features;
		const objAlert = { id, properties };

		if (geometry !== null) objAlert.geometry = geometry;

		return objAlert;
	} catch (error) {
		console.log(
			`>> SERVICE ERROR > NWS API Web Service: fetchActiveAlertsByEvent() \n ${error}`
		);
		throw new Error(
			`>> SERVICE ERROR > NWS API Web Service: fetchActiveAlertsByEvent() \n ${error}`
		);
	}
};

export const useActiveAlertsByEvent = async (event) => {
	return useQuery(["alerts", "active", event], () =>
		fetchActiveAlertsByEvent(event)
	);
};

// ----------------------
// -- TEST ALERTS
// ----------------------
export const fetchFakeTornadoWarnings = () => {
	try {
		const { features } = FAKE_TORNADO_WARNINGS;
		const tornadoWarningAlerts = features.map(
			({ id, geometry, properties }) => {
				return { id, geometry, properties };
			}
		);
		return tornadoWarningAlerts;
	} catch (error) {
		console.log(
			`>> SERVICE ERROR > NWS API Web Service: fetchFakeTornadoWarnings() \n ${error}`
		);
		throw new Error(
			`>> SERVICE ERROR > NWS API Web Service: fetchFakeTornadoWarnings() \n ${error}`
		);
	}
};

export const fetchFakeTornadoWatches = () => {
	try {
		const { features } = FAKE_TORNADO_WATCHES;
		const tornadoWatchAlerts = features.map(({ id, properties }) => {
			return { id, properties };
		});
		return tornadoWatchAlerts;
	} catch (error) {
		console.log(
			`>> SERVICE ERROR > NWS API Web Service: fetchFakeTornadoWatches() \n ${error}`
		);
		throw new Error(
			`>> SERVICE ERROR > NWS API Web Service: fetchFakeTornadoWatches() \n ${error}`
		);
	}
};

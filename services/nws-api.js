import { axios } from "axios";

// ***************************************
// ** AXIOS CONFIG
// ***************************************
const DEFAULT_TIMEOUT = 5000;

const AXIOS = Axios.create({
	baseURL: NWS.baseURL,
	timeout: DEFAULT_TIMEOUT,
});
// ***************************************
// ** ENDPOINTS
// ***************************************
const QUERY_PARAMS = Object.freeze({
	Certainty: {
		Observed: "observed",
		Likely: "likely",
		Possible: "possible",
		Unlikely: "unlikely",
		Unknown: "unknown",
	},
	Event: {
		TornadoWarning: "Tornado Warning",
		TornadoWatch: "Tornado Watch",
	},
	MessageType: {
		Alert: "alert",
		Update: "update",
		Cancel: "cancel",
	},
	Severity: {
		Extreme: "extreme",
		Severe: "severe",
		Moderate: "moderate",
		Minor: "minor",
		Unknown: "unknown",
	},
	Status: {
		Actual: "actual",
		Exercise: "exercise",
		System: "system",
		Test: "test",
		Draft: "draft",
	},
	Urgency: {
		Immediate: "immediate",
		Expected: "expected",
		Future: "future",
		Past: "past",
		Unknown: "unknown",
	},
});
const ENDPOINTS = Object.freeze({
	baseURL: "https://api.weather.gov",
	tornadoWarnings: "/alerts/active?event=Tornado%20Warning&message_type=alert",
	tornadoWarningsTest:
		"alerts?start=2022-03-10T20%3A00%3A00Z&event=Tornado%20Warning&message_type=alert",
	tornadoWatches: "/alerts/active?event=Tornado%20Watch&message_type=alert",
	tornadoWatchesTest:
		"alerts?start=2022-03-10T20%3A00%3A00Z&event=Tornado%20Watch&message_type=alert",
	cancelledAlerts:
		"alerts?event=Tornado%20Warning%2CTornado%20Watch&message_type=cancel",
	cancelledAlertsTest:
		"alerts?start=2022-03-10T20%3A00%3A00Z&event=Tornado%20Warning%2CTornado%20Watch&message_type=cancel",
	activeAlertCount: "/alerts/active/count",
	alertTypes: "/alerts/types",
	alertsById: "/alerts",
});
// ***************************************
// ** REQUESTS
// ***************************************
const axiosFetchNWS = async endpoint => {
	const raw = await AXIOS.get(endpoint);
	return await raw.data.features;
};
// -- ACTIVE ALERTS
export const fetchTornadoWarningsFromNWS = async () => {
	return await axiosFetchNWS(NWS.tornadoWarnings);
};
export const fetchTornadoWatchesFromNWS = async () => {
	return await axiosFetchNWS(NWS.tornadoWatches);
};
// -- TEST ALERTS
export const fetchTestTornadoWarningsFromNWS = async () => {
	return await axiosFetchNWS(NWS.tornadoWarningsTest);
};
export const fetchTestTornadoWatchesFromNWS = async () => {
	return await axiosFetchNWS(NWS.tornadoWatchesTest);
};

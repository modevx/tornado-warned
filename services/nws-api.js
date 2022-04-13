import axios from "axios";

// ***************************************
// ** AXIOS CONFIG
// ***************************************
const DEFAULT_TIMEOUT = 5000;

const AXIOS = axios.create({
	baseURL: "https://api.weather.gov",
	timeout: DEFAULT_TIMEOUT,
});
// ***************************************
// ** ENDPOINT
// ***************************************
const ENDPOINT = Object.freeze({
	baseURL: "https://api.weather.gov",
	active_alerts: "/alerts/active",
	active_alert_count: "/alerts/active/count",
	alert_by_id: "/alerts",
	alert_types: "/alerts/types",
	glossary: "/glossary",
	stations: "/stations",
	radar_servers: "/radar/servers",
	radar_stations: "/radar/stations",
	products: "/products",
	zones: "/zones",
	allTestAlerts:
		"alerts?start=2022-03-10T20%3A00%3A00Z&event=Tornado%20Warning%2CTornado%20Watch&message_type=alert&limit=20",
	allTornadoAlerts: "/alerts/active?event=Tornado%20Warning%2CTornado%20Watch",
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
const PARAM = Object.freeze({
	area: "area",
	certainty: "certainty",
	code: "code",
	event: "event",
	limit: "limit",
	message_type: "message_type",
	point: "point",
	severity: "severity",
	status: "status",
	urgency: "urgency",
	zone: "zone",
});
const VALUE = Object.freeze({
	certainty: {
		observed: "observed",
		likely: "likely",
		possible: "possible",
		unlikely: "unlikely",
		unknown: "unknown",
	},
	event: {
		tornado_warning: "Tornado%20Warning",
		tornado_watch: "Tornado%20Watch",
		severe_weather_statement: "Severe%20Weather%20Statement",
	},
	message_type: {
		alert: "alert",
		cancel: "cancel",
		update: "update",
	},
	severity: {
		extreme: "extreme",
		severe: "severe",
		moderate: "moderate",
		minor: "minor",
		unknown: "unknown",
	},
	status: {
		actual: "actual",
		draft: "draft",
		exercise: "exercise",
		system: "system",
		test: "test",
	},
	urgency: {
		Immediate: "immediate",
		Expected: "expected",
		Future: "future",
		Past: "past",
		Unknown: "unknown",
	},
});
const PATHS = Object.freeze({
	active_tornado_warnings: `/
		${ENDPOINT.active_alerts}?
		${PARAM.event}=${VALUE.event.tornado_warning}&
		${PARAM.message_type}=${VALUE.message_type.alert}`,
	active_tornado_watches: `/
		${ENDPOINT.active_alerts}?
		${PARAM.event}=${VALUE.tornado_watch}&
		${PARAM.message_type}=${VALUE.event.tornado_watch}`,
	test_tornado_warnings: "",
	test_tornado_watches: "",
});
// ***************************************
// ** REQUESTS
// ***************************************
const axiosFetchNWS = async endpoint => {
	const raw = await AXIOS.get(endpoint);
	return await raw.data.features;
};
// -- ACTIVE ALERTS
export const fetchAllTornadoAlertsFromNWS = async () => {
	return await axiosFetchNWS(ENDPOINT.allTornadoAlerts);
};
export const fetchTornadoWarningsFromNWS = async () => {
	return await axiosFetchNWS(ENDPOINT.tornadoWarnings);
};
export const fetchTornadoWatchesFromNWS = async () => {
	return await axiosFetchNWS(ENDPOINT.tornadoWatches);
};
// -- TEST ALERTS
export const fetchAllTestAlertsFromNWS = async () => {
	return await axiosFetchNWS(ENDPOINT.allTestAlerts);
};
export const fetchTestTornadoWarningsFromNWS = async () => {
	return await axiosFetchNWS(ENDPOINT.tornadoWarningsTest);
};
export const fetchTestTornadoWatchesFromNWS = async () => {
	return await axiosFetchNWS(ENDPOINT.tornadoWatchesTest);
};

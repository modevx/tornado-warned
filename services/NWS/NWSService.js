import axios from "axios";
import { ENDPOINTS } from "services/SPC";

// //////////////////////////////////
// ENDPOINTS
// //////////////////////////////////
const BASE_URL = "https://api.weather.gov";

const ENDPOINT = {
	alert_count: "/alerts/active/count",
	alert_tornado_warnings:
		"/alerts/active?event=Tornado%20Warning&message_type=alert",
	alert_tornado_watches:
		"/alerts/active?event=Tornado%20Watch&message_type=alert",
	alert_types: "/alerts/types",
	glossary: "/glossary",
	products: "/products",
	radar_servers: "/radar/servers",
	radar_stations: "/radar/stations",
	zones: "/zones",
};

// //////////////////////////////////
// CLIENT CONFIG
// //////////////////////////////////
const DEFAULT_TIMEOUT = 5000;
const CLIENT = axios.create({
	baseURL: BASE_URL,
	timeout: DEFAULT_TIMEOUT,
});

// //////////////////////////////////
// SERVICE REQUESTS
// //////////////////////////////////
export const getTornadoAlerts = async (alertType) => {
	const ALERT_MAP = {
		warning: `${ENDPOINT.alert_tornado_warnings}`,
		watch: `${ENDPOINT.alert_tornado_watches}`,
	};

	if (!Object.keys(ALERT_MAP).includes(alertType)) {
		throw new Error(
			`${alertType} is not a valid tornado alert type.  Valid tornado alerts: ${Object.keys(
				ALERT_MAP
			).toString()}.`
		);
	}

	const { data } = await CLIENT.get(ENDPOINT.alert_tornadoes);
	return data.features;
};

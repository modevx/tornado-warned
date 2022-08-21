import axios from "axios";

export const URLS = {
	webServiceBase: "https://api.weather.gov",
	stormWatches:
		"/alerts/active?event=Severe%20Thunderstorm%20Watch&message_type=alert",
	stormWarnings:
		"/alerts/active?event=Severe%20Thunderstorm%20Warning&message_type=alert",
	tornadoWatches: "/alerts/active?event=Tornado%20Watch&message_type=alert",
	tornadoWarnings: "/alerts/active?event=Tornado%20Warning&message_type=alert",
};

export const ALERT_TYPES = {
	stormWatch: "Severe Thunderstorm Warning",
	stormWarning: "Severe Thunderstorm Watch",
	tornadoWatch: "Tornado Watch",
	tornadoWarning: "Tornado Warning",
};

const DEFAULT_TIMEOUT = 5000;

export const CLIENT = axios.create({
	baseURL: URLS.webServiceBase,
	timeout: DEFAULT_TIMEOUT,
});

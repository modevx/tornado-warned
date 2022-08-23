import axios from "axios";
import { DEFAULT_TIMEOUT } from "services/constants";

const BASE_URL = "https://api.weather.gov";

export const CLIENT = axios.create({
	baseURL: BASE_URL,
	timeout: DEFAULT_TIMEOUT,
});

export const ENDPOINT = Object.freeze({
	stormWatches:
		"/alerts/active?event=Severe%20Thunderstorm%20Watch&message_type=alert",
	stormWarnings:
		"/alerts/active?event=Severe%20Thunderstorm%20Warning&message_type=alert",
	tornadoWatches: "/alerts/active?event=Tornado%20Watch&message_type=alert",
	tornadoWarnings: "/alerts/active?event=Tornado%20Warning&message_type=alert",
	testStormWatches:
		"/alerts?start=2022-08-16T00:00:00Z&end=2022-08-30T00:00:00Z&message_type=alert&event=Severe%20Thunderstorm%20Watch",
	testStormWarnings:
		"/alerts?start=2022-08-16T00:00:00Z&end=2022-08-30T00:00:00Z&message_type=alert&event=Severe%20Thunderstorm%20Warning",
	testTornadoWatches:
		"/alerts?start=2022-03-01T00:00:00Z&end=2022-03-30T00:00:00Z&message_type=alert&event=Tornado%20Watch",
	testTornadoWarnings:
		"/alerts?start=2022-08-16T00:00:00Z&end=2022-08-30T00:00:00Z&message_type=alert&event=Tornado%20Warning",
});

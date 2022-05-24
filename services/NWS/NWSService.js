import axios from "axios";

const BASE_URL = "https://api.weather.gov";

const ENDPOINT = Object.freeze({
	alert_count: `$${BASE_URL}/alerts/active/count`,
	alert_tornadoes: `$${BASE_URL}/alerts/active?event=Tornado%20Warning%2CTornado%20Watch&message_type=alert`,
	alert_types: `${BASE_URL}/alerts/types`,
	glossary: `${BASE_URL}/glossary`,
	products: `${BASE_URL}/products`,
	radar_servers: `${BASE_URL}/radar/servers`,
	radar_stations: `${BASE_URL}/radar/stations`,
	zones: `${BASE_URL}/zones`,
});

const DEFAULT_TIMEOUT = 5000;

const CLIENT = axios.create({
	baseURL: BASE_URL,
	timeout: DEFAULT_TIMEOUT,
});

export const getActiveTornadoAlerts = async () => {
	const res = CLIENT.get(ENDPOINT.alert_tornadoes);
	return await res.data.features;
};

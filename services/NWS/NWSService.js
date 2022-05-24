import axios from "axios";

const ENDPOINTS = Object.freeze({
	active_alerts: {
		count: `/alerts/active/count`,
		tornadoes: `/alerts/active?event=Tornado%20Warning%2CTornado%20Watch&message_type=alert`,
	},
	alert_types: "/alerts/types",
	glossary: "/glossary",
	products: "/products",
	radar: {
		servers: `/radar/servers`,
		stations: `/radar/stations`,
	},
	zones: "/zones",
});

const NWSClient = axios.create({
	baseURL: "https://api.weather.gov",
	timeout: 5000,
});

export const getActiveTornadoAlerts = async () => {
	const nwsResponse = NWSClient.get(ENDPOINTS.active_alerts.tornadoes);
	return await nwsResponse.data.features;
};

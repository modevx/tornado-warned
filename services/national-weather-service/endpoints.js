export const ENDPOINTS = Object.freeze({
	active_alert_count: "/alerts/active/count",
	active_alerts: "/alerts/active",
	alert_types: "/alerts/types",
	alerts: "/alerts",
	base_url: "https://api.weather.gov",
	glossary: "/glossary",
	products: "/products",
	radar_servers: "/radar/servers",
	radar_stations: "/radar/stations",
	stations: "/stations",
	zones: "/zones",
	active_tornado_alerts:
		"/alerts/active?event=Tornado%20Warning%2CTornado%20Watch",
	active_tornado_warnings:
		"/alerts/active?event=Tornado%20Warning&message_type=alert",
	active_tornado_watches:
		"/alerts/active?event=Tornado%20Watch&message_type=alert",
});

const NATIONAL_WEATHER_SERVICE = Object.freeze({
	baseURL: "https://api.weather.gov",
	active_alerts: "/alerts/active",
	active_alert_count: "/alerts/active/count",
	alert_types: "/alerts/types",
	glossary: "/glossary",
	stations: "/stations",
	radar_servers: "/radar/servers",
	radar_stations: "/radar/stations",
	products: "/products",
	zones: "/zones",
	allTestAlerts:
		"alerts?start=2022-03-10T20%3A00%3A00Z&event=Tornado%20Warning%2CTornado%20Watch&message_type=alert&limit=10",
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
const SEVERE_WEATHER_DATA_INVENTORY = Object.freeze({
	baseURL: "https://www.ncdc.noaa.gov/swdiws",
	tornado_vortx_signatures_json: "/json/nx3tvs",
});
const STORM_PREDICTION_CENTER = Object.freeze({
	spcrss: "/spcrss.xml",
	spcwwrss: "/spcwwrss.xml",
	spcpdswwrss: "/spcpdswwrss.xml",
	spcmdrss: "/spcmdrss.xml",
	spcacrss: "/spcacrss.xml",
	spcmbrss: "/spcmbrss.xml",
});

export {
	NATIONAL_WEATHER_SERVICE,
	SEVERE_WEATHER_DATA_INVENTORY,
	STORM_PREDICTION_CENTER,
};

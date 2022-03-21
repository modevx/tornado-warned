export const NWS_ENDPOINTS = {
	nwsBaseUrl: "https://api.weather.gov",
	tornadoWarnings: "/alerts/active?event=Tornado%20Warning",
	tornadoWatches: "/alerts/active?event=Tornado%20Watch",
	activeAlertCount: "/alerts/active/count",
	alertTypes: "/alerts/types",
	alertsById: "/alerts",
	testAlerts:
		"alerts?start=2022-03-10T20%3A00%3A00Z&event=Tornado%20Warning%2CTornado%20Watch",
};

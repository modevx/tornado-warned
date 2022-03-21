import { QUERY_PARAMS as PARAMS } from "./api-query-params";

export const API_PATHS = {
	nwsBaseUrl: "https://api.weather.gov",
	tornadoWarnings: `/alerts/active?event=${PARAMS.Event.TornadoWarning}`,
	tornadoWarningsTest:
		"alerts?start=2022-03-10T20%3A00%3A00Z&event=Tornado%20Warning",
	tornadoWatches: "/alerts/active?event=Tornado%20Watch",
	tornadoWatchesTest:
		"alerts?start=2022-03-10T20%3A00%3A00Z&event=Tornado%20Watch",
	cancelledAlerts:
		"alerts?event=Tornado%20Warning%2CTornado%20Watch&message_type=cancel",
	cancelledAlertsTest:
		"alerts?start=2022-03-10T20%3A00%3A00Z&event=Tornado%20Warning%2CTornado%20Watch&message_type=cancel",
	activeAlertCount: "/alerts/active/count",
	alertTypes: "/alerts/types",
	alertsById: "/alerts",
};

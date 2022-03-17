export const NWS_API_PATHS = {
  baseUrl: "https://api.weather.gov",
  activeAlerts:
    "/alerts/active?event=Tornado%20Warning,Tornado%20Watch,Severe%20Thunderstorm%20Warning",
  activeAlertCount: "/alerts/active/count",
  alertTypes: "/alerts/types",
  alertsById: "/alerts",
  testAlerts:
    "alerts?start=2022-03-10T20%3A00%3A00Z&event=Tornado%20Warning%2CTornado%20Watch",
};

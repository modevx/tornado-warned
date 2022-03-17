export const NWS_API_PATHS = {
  baseUrl: "https://api.weather.gov",
  activeAlerts:
    "/alerts/active?event=Tornado%20Warning,Tornado%20Watch,Severe%20Thunderstorm%20Warning",
  activeAlertCount: "/alerts/active/count",
  alertTypes: "/alerts/types",
  alertsById: "/alerts",
  testAlerts:
    "/alerts?start=2021-12-10T08%3A00%3A00Z&event=Tornado%20Warning,Tornado%20Watch",
};

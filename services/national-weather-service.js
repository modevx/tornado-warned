import axios from "axios";

// ** AXIOS CONFIG
// ***************************************
const DEFAULT_TIMEOUT = 5000;

const AXIOS = axios.create({
  baseURL: "https://api.weather.gov",
  timeout: DEFAULT_TIMEOUT,
});
// ** ENDPOINTS
// ***************************************
const ENDPOINT = Object.freeze({
  baseURL: "https://api.weather.gov",
  active_alerts: "/alerts/active",
  active_alert_count: "/alerts/active/count",
  alert_by_id: "/alerts",
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
// ** REQUESTS
// ***************************************
const axiosFetchNWS = async (axiosInstance, endpoint) => {
  const raw = await axiosInstance.get(endpoint);
  return await raw.data.features;
};
// -- ACTIVE ALERTS
export const fetchAllTornadoAlertsFromNWS = async () => {
  return await axiosFetchNWS(AXIOS, ENDPOINT.allTornadoAlerts);
};
export const fetchTornadoWarningsFromNWS = async () => {
  return await axiosFetchNWS(AXIOS, ENDPOINT.tornadoWarnings);
};
export const fetchTornadoWatchesFromNWS = async () => {
  return await axiosFetchNWS(AXIOS, ENDPOINT.tornadoWatches);
};
// -- TEST ALERTS
export const fetchAllTestAlertsFromNWS = async () => {
  return await axiosFetchNWS(AXIOS, ENDPOINT.allTestAlerts);
};
export const fetchTestTornadoWarningsFromNWS = async () => {
  return await axiosFetchNWS(AXIOS, ENDPOINT.tornadoWarningsTest);
};
export const fetchTestTornadoWatchesFromNWS = async () => {
  return await axiosFetchNWS(AXIOS, ENDPOINT.tornadoWatchesTest);
};

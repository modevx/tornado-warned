import { useQuery } from "@tanstack/react-query";
import { ALERT_EVENT } from "./constants";
import { NWS_API_WEB_SERVICE } from "./config";

/** ----- /alerts:
 * [event]: ALERT_EVENT.{event name string}
 * [message_type]: alert, update, cancel
 * [status]: actual, exercise, system, test, draft
 * [urgency]: immediate, expected, future, past, unknown
 * [severity]: extreme, severe, moderate, minor, unknown
 * [certainty]: observed, likely, possible, unlikely, unknown
 */

// -------------------------
// ----- ALERT TEXT PRODUCTS
// -------------------------

const fetchActiveAlerts = async (event) => {
  const response = await NWS_API_WEB_SERVICE.get(
    `/alerts/active?status=actual&message_type=alert&event=${encodeURIComponent(
      event
    )}`
  );
  return response.data;
};

const fetchOldAlerts = async (event) => {
  const response = await NWS_API_WEB_SERVICE.get();
};

const fetchActiveAlertTextProducts = async (event) => {
  const data = await fetchActiveAlerts(event);
  const textProducts = data?.features.map(({ id, properties }) => {
    return { id, properties };
  });

  return textProducts;
};

export const useActiveTornadoWarningTextProducts = () => {
  return useQuery(["alerts", "active", "Tornado Warning", "text product"], () =>
    fetchActiveAlertTextProducts(ALERT_EVENT.Tornado_Warning)
  );
};

// --------------------
// ----- ALERT POLYGONS
// --------------------
const fetchActiveAlertPolygons = async (event) => {
  const data = await fetchActiveAlerts(event);
  const polygons = data?.features.map(({ id, geometry }) => {
    return { id, geometry };
  });

  return polygons;
};

export const useActiveTornadoWarningPolygons = () => {
  return useQuery(["alerts", "active", "Tornado Warning", "polygon"], () =>
    fetchActiveAlertPolygons(ALERT_EVENT.Tornado_Warning)
  );
};

const fetchAlertPolygons = async (event) => {
  const { start, end } = gen2WeekISODateRange();
  const res = await HTTP_CLIENT.get(
    `/alerts?start=${start}&end=${end}&message_type=alert&event=${event}`
  );
  return res.data;
};

export const useAlertPolygons = (event) => {
  return useQuery(["alerts", event, "past 2 weeks"], () =>
    fetchAlertPolygons(event)
  );
};

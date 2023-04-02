import { useQuery } from "@tanstack/react-query";
import { ALERT_EVENT } from "./constants";
import { NWS_API_WEB_SERVICE } from "./config";
import { gen2WeekISODateRange } from "./utils";

/** ----- /alerts:
 * [event]: ALERT_EVENT.{event name string}
 * [message_type]: alert, update, cancel
 * [status]: actual, exercise, system, test, draft
 * [urgency]: immediate, expected, future, past, unknown
 * [severity]: extreme, severe, moderate, minor, unknown
 * [certainty]: observed, likely, possible, unlikely, unknown
 */
const fetchActiveAlertsByEvent = async (event) => {
  try {
    const response = await NWS_API_WEB_SERVICE.get(
      `/alerts/active?status=actual&message_type=alert&event=${encodeURIComponent(
        event
      )}`
    );
    return response.data;
  } catch (error) {
    console.log(
      `>> SERVICE ERROR > NWS API Web Service: fetchActiveAlertsByEvent() \n ${error}`
    );
    throw new Error(
      `>> SERVICE ERROR > NWS API Web Service: fetchActiveAlertsByEvent() \n ${error}`
    );
  }
};

const fetchOldAlertData = async (event) => {
  try {
    const { start, end } = gen2WeekISODateRange();
    const response = await NWS_API_WEB_SERVICE.get(
      `/alerts?start=${start}&end=${end}&message_type=alert&event=${event}`
    );
    return response.data;
  } catch (error) {
    console.log(
      `>> SERVICE ERROR > NWS API Web Service: fetchOldAlerts() \n ${error}`
    );
    throw new Error(
      `>> SERVICE ERROR > NWS API Web Service: fetchOldAlerts() \n ${error}`
    );
  }
};
// -------------------------
// ----- ALERT TEXT PRODUCTS
// -------------------------
const fetchActiveAlertTextProducts = async (event) => {
  try {
    const data = await fetchActiveAlertsByEvent(event);
    const textProducts = data?.features.map(({ id, properties }) => {
      return { id, properties };
    });
    return textProducts;
  } catch (error) {
    console.log(
      `>> SERVICE ERROR > NWS API Web Service: fetchActiveAlertTextProducts() \n ${error}`
    );
    throw new Error(
      `>> SERVICE ERROR > NWS API Web Service: fetchActiveAlertTextProducts() \n ${error}`
    );
  }
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
  try {
    const data = await fetchActiveAlertsByEvent(event);
    const polygons = data?.features.map(({ id, geometry }) => {
      return { id, geometry };
    });
    return polygons;
  } catch (error) {
    console.log(
      `>> SERVICE ERROR > NWS API Web Service: fetchActiveAlertPolygons() \n ${error}`
    );
    throw new Error(
      `>> SERVICE ERROR > NWS API Web Service: fetchActiveAlertPolygons() \n ${error}`
    );
  }
};

export const useActiveTornadoWarningPolygons = () => {
  return useQuery(["alerts", "active", "Tornado Warning", "polygon"], () =>
    fetchActiveAlertPolygons(ALERT_EVENT.Tornado_Warning)
  );
};

export const useOldAlertData = (event) => {
  return useQuery(["alerts", event, "last 2 weeks"], () =>
    fetchOldAlertData(event)
  );
};

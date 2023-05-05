import { useQuery } from "@tanstack/react-query";
import { nwsApiWebServiceHTTPClient } from "./http-client";
import { ALERT_EVENTS } from "./constants";
import { FAKE_TORNADO_WARNINGS, FAKE_TORNADO_WATCHES } from "./fake-data";

const fetchActiveAlertsByEvent = async (event) => {
  try {
    const response = await nwsApiWebServiceHTTPClient.get(
      `/alerts/active?status=actual&message_type=alert&event=${encodeURIComponent(
        event
      )}`
    );
    const { id, geometry, properties } = await response?.data.features;
    const objAlert = { id, properties };

    if (geometry !== null) objAlert.geometry = geometry;

    return objAlert;
  } catch (error) {
    console.log(
      `>> SERVICE ERROR > NWS API Web Service: fetchActiveAlertsByEvent() \n ${error}`
    );
    throw new Error(
      `>> SERVICE ERROR > NWS API Web Service: fetchActiveAlertsByEvent() \n ${error}`
    );
  }
};

export const useActiveTornadoWarnings = () => {
  return useQuery(["alerts", "active", ALERT_EVENTS.tornadoWarning], () =>
    fetchActiveAlertsByEvent(ALERT_EVENTS.tornadoWarning)
  );
};

export const useActiveTornadoWatches = () => {
  return useQuery(["alerts", "active", ALERT_EVENTS.tornadoWatch], () =>
    fetchActiveAlertsByEvent(ALERT_EVENTS.tornadoWatch)
  );
};

export const useActiveSevereStormWarnings = () => {
  return useQuery(
    ["alerts", "active", ALERT_EVENTS.severeThunderstormWarning],
    () => fetchActiveAlertsByEvent(ALERT_EVENTS.severeThunderstormWarning)
  );
};

export const useActiveSevereStormWatches = () => {
  return useQuery(
    ["alerts", "active", ALERT_EVENTS.severeThunderstormWatch],
    () => fetchActiveAlertsByEvent(ALERT_EVENTS.severeThunderstormWatch)
  );
};

// ----------------------
// -- FAKE ALERTS
// ----------------------
export const useFakeTornadoWarnings = () => {
  try {
    return FAKE_TORNADO_WARNINGS;
  } catch (error) {
    console.log(
      `>> SERVICE ERROR > NWS API Web Service: useFakeTornadoWarnings() \n ${error}`
    );
    throw new Error(
      `>> SERVICE ERROR > NWS API Web Service: useFakeTornadoWarnings() \n ${error}`
    );
  }
};

export const useFakeTornadoWatches = () => {
  try {
    return FAKE_TORNADO_WATCHES;
  } catch (error) {
    console.log(
      `>> SERVICE ERROR > NWS API Web Service: useFakeTornadoWatches() \n ${error}`
    );
    throw new Error(
      `>> SERVICE ERROR > NWS API Web Service: useFakeTornadoWatches() \n ${error}`
    );
  }
};

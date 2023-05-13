import { useQuery } from "@tanstack/react-query";
import { nwsApiWebServiceHTTPClient } from "./http-client";
import { ALERT_EVENTS } from "./constants";
import { FAKE_TORNADO_WARNINGS, FAKE_TORNADO_WATCHES } from "./fake-data";

const fetchActiveAlertFeaturesByEvent = async (event) => {
  try {
    const response = await nwsApiWebServiceHTTPClient.get(
      `/alerts/active?status=actual&message_type=alert&event=${encodeURIComponent(
        event
      )}`
    );
    const { features } = response?.data;

    return features;
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
    fetchActiveAlertFeaturesByEvent(ALERT_EVENTS.tornadoWarning)
  );
};

export const useActiveTornadoWatches = () => {
  return useQuery(["alerts", "active", ALERT_EVENTS.tornadoWatch], () =>
    fetchActiveAlertFeaturesByEvent(ALERT_EVENTS.tornadoWatch)
  );
};

export const useActiveSevereStormWarnings = () => {
  return useQuery(
    ["alerts", "active", ALERT_EVENTS.severeThunderstormWarning],
    () =>
      fetchActiveAlertFeaturesByEvent(ALERT_EVENTS.severeThunderstormWarning)
  );
};

export const useActiveSevereStormWatches = () => {
  return useQuery(
    ["alerts", "active", ALERT_EVENTS.severeThunderstormWatch],
    () => fetchActiveAlertFeaturesByEvent(ALERT_EVENTS.severeThunderstormWatch)
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

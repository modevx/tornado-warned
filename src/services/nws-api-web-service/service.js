import { useQuery } from "@tanstack/react-query";

import { createHTTPClient } from "services/create-http-client";
import { FAKE_ALERTS } from "./fake-alerts";

const nwsWebServiceClient = createHTTPClient({
  baseURL: "https://api.weather.gov",
});

const NWS_ALERTS_EVENTS = {
  tornado_warning: "Tornado Warning",
  tornado_watch: "Tornado Watch",
  severe_storm_warning: "Severe Thunderstorm Warning",
  severe_storm_watch: "Severe Thunderstorm Watch",
};

const ERROR_TITLE = "/// ERROR: National Weather Service API Web Service ///";

const getAlertFeaturesByEvent = async (event) => {
  const uriEncodedEvent = encodeURIComponent(event);
  const queryParams = `/alerts/active?status=actual&message_type=alert&event=${uriEncodedEvent}`;

  try {
    const response = await nwsWebServiceClient.get(queryParams);
    const { features } = response?.data;
    return features;
  } catch (error) {
    console.log(`${ERROR_TITLE}\n`, error);
    throw new Error(`${ERROR_TITLE}\n`, error);
  }
};

export const useAlertFeaturesByEvent = (event) => {
  return useQuery(["NWS", "Alerts", event], () =>
    getAlertFeaturesByEvent(event)
  );
};

export const useFakeAlerts = (event) => {
  const eventType = event.toLowerCase().split(" ").join("_");
  return FAKE_ALERTS[eventType];
};

// TODO: confirm these aren't used anywhere and delete

export const useTornadoWarningQuery = () => {
  return useQuery(["alerts", "active", NWS_ALERTS_EVENTS.tornado_warning], () =>
    getAlertFeaturesByEvent(NWS_ALERTS_EVENTS.tornado_warning)
  );
};

export const useTornadoWatchQuery = () => {
  return useQuery(["alerts", "active", NWS_ALERTS_EVENTS.tornado_watch], () =>
    getAlertFeaturesByEvent(NWS_ALERTS_EVENTS.tornado_watch)
  );
};

export const useSevereStormWarningQuery = () => {
  return useQuery(
    ["alerts", "active", NWS_ALERTS_EVENTS.severe_storm_warning],
    () => getAlertFeaturesByEvent(NWS_ALERTS_EVENTS.severe_storm_warning)
  );
};

export const useSevereStormWatchQuery = () => {
  return useQuery(
    ["alerts", "active", NWS_ALERTS_EVENTS.severe_storm_watch],
    () => getAlertFeaturesByEvent(NWS_ALERTS_EVENTS.severe_storm_watch)
  );
};

export const useFakeTornadoWarnings = () => {
  return FAKE_ALERTS.tornado_warnings;
};

export const useFakeTornadoWatches = () => {
  return FAKE_ALERTS.tornado_watches;
};

export const useFakeSevereStormWarnings = () => {
  return FAKE_ALERTS.severe_storm_warnings;
};

export const useFakeSevereStormWatches = () => {
  return FAKE_ALERTS.severe_storm_watches;
};

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
const getAlertGeoJsonByEvent = async (event) => {
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

export const useAlertGeoJsonByEvent = (event) => {
  return useQuery(["NWS", "Alerts", event], () =>
    getAlertGeoJsonByEvent(event)
  );
};

export const useFakeAlerts = (event) => {
  const eventType = event.toLowerCase().split(" ").join("_");
  return FAKE_ALERTS[eventType];
};

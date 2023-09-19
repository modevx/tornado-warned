import { useQuery } from "@tanstack/react-query";

import { checkAlertIsPDS, checkAlertIsTornadoEmergency } from "utils";
import { FAKE_ALERTS } from "./fake-alerts";
import { createHTTPClient } from "services/create-http-client";

const nwsApiClient = createHTTPClient({
  baseURL: "https://api.weather.gov",
});

const ERROR_TITLE = "/// ERROR: National Weather Service API Web Service ///";

const getNwsAlertsByEvent = async (event) => {
  const encodedEvent = encodeURIComponent(event);
  const endpoint = `/alerts/active?status=actual&message_type=alert&event=${encodedEvent}`;

  try {
    const response = await nwsApiClient.get(endpoint);
    const { features } = response?.data;

    return features;
  } catch (error) {
    console.log(`${ERROR_TITLE}\n`, error);
    throw new Error(`${ERROR_TITLE}\n`, error);
  }
};

const getPDSAlerts = async () => {
  const events = encodeURIComponent(
    "Tornado Warning, Tornado Watch, Severe Thunderstorm Warning, Severe Thunderstorm Watch"
  );

  const endpoint = `/alerts/active?status=actual&message_type=alert&event=${events}`;

  try {
    const response = await nwsApiClient.get(endpoint);
    const { features: alerts } = response?.data;
    const pdsAlerts = alerts.length
      ? alerts.filter((alert) => checkAlertIsPDS(alert))
      : [];

    return pdsAlerts;
  } catch (error) {
    console.log(`${ERROR_TITLE}\n`, error);
    throw new Error(`${ERROR_TITLE}\n`, error);
  }
};

const getTornadoEmergencyAlerts = async () => {
  const endpoint = `/alerts/active?status=actual&message_type=alert&event=${encodeURIComponent(
    "Tornado Warning"
  )}`;

  try {
    const response = await nwsApiClient.get(endpoint);
    const { features: alerts } = response?.data;
    const tornadoEmergencyAlerts = alerts.length
      ? alerts.filter((alert) => checkAlertIsPDS(alert))
      : [];

    return tornadoEmergencyAlerts;
  } catch (error) {
    console.log(`${ERROR_TITLE}\n`, error);
    throw new Error(`${ERROR_TITLE}\n`, error);
  }
};

export const usePDSAlerts = () => {
  return useQuery(["NWS", "Alerts", "Particularly Dangerous Situation"], () =>
    getPDSAlerts()
  );
};

export const useTornadoEmergencyAlerts = () => {
  return useQuery(["NWS", "Alerts", "Tornado Emergency"], () =>
    getTornadoEmergencyAlerts()
  );
};

export const useNwsAlertsByEvent = (event) => {
  return useQuery(["NWS", "Alerts", event], () => getNwsAlertsByEvent(event));
};

export const useFakeWatchAlertsByEvent = (watchEvent) => {
  const features = FAKE_ALERTS[watchEvent];
  let affectedZones = [];

  features.forEach((feature) => {
    affectedZones = [...affectedZones, ...feature.properties.geocode.SAME];
  });

  return { features, affectedZones };
};

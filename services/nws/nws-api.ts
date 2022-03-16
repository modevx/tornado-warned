import { DEFAULT_API_CONFIG } from "./nws-axios-instance";

export class NationalWeatherServiceAPI {
  /**
   * configurable Axios options
   * default: _baseUrl & _timeout
   */
  config;

  /**
   *
   * @param config: API client config to use.
   */
  constructor(config = DEFAULT_API_CONFIG) {
    this.config = config;
  }

  /**
   * get active tornado alerts
   */

  /**
   * get active tornado warnings
   */
  // getActiveTornadoWarnings() {
  //   console.log(">> getActiveTornadoWarnings() called <<");
  //   const res = await this.config.get("/alerts/active");
  // }

  // getAlertsEndpoint = async (url?: string, axiosConfigs?: any) => {
  //   const axios = returnAxiosInstance();
  //   return await axios.get(url ? `alerts/${url}` : "alerts", axiosConfigs);
  // };

  // getAlerts = async () => {
  //   return getAlertsEndpoint();
  // };

  // getAlertTypes = async () => {
  //   const types = await getAlertsEndpoint("/types");
  //   return types.data.eventTypes;
  // };

  // getAlertById = (id: string) => {
  //   return getAlertsEndpoint(id);
  // };

  // getActiveAlerts = async () => {
  //   const activeAlerts = await getAlertsEndpoint("/active");
  //   return activeAlerts.data.features;
  // };

  // getActiveAlertsCount = () => {
  //   return getAlertsEndpoint("/active/count");
  // };

  // getActiveAlertsByEvent = async (eventType: string) => {
  //   const alerts = await getAlertsEndpoint("/active", {
  //     params: { event: eventType },
  //   });
  //   return alerts.data.features;
  // };

  // getActiveAlertsCountByEvent = (event: string) => getNWS();

  // getSevereThunderstormWarnings = () =>
  // 	getNWSAlertsByEvent("Severe Thunderstorm Warning");

  // getTornadoWatches = () => getNWSAlertsByEvent("Tornado Watch");
  // getTornadoWarnings = () => getNWSAlertsByEvent("Tornado Warning");
}

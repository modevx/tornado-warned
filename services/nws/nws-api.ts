import { DEFAULT_API_CONFIG } from "./nws-config";

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
  async getActiveTornadoWarnings() {
    console.log(">> getActiveTornadoWarnings() called <<");
    const res = await this.config.get("/alerts/active");
  }
}

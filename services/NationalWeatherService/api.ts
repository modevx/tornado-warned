import { DEFAULT_API_CONFIG } from "./config";

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
	 * get severe thunderstorm warnings
	 */

	/**
	 * get severe thunderstorm warnings
	 */

	/**
	 * get active tornado alerts
	 */

	/**
	 * get active tornado warnings
	 */
	async getActiveTornadoWarnings() {
		const res = await config.get("/alerts/active", {
			params: {
				event: "Tornado Warning",
			},
		});
	}
}

const NATIONAL_WEATHER_SERVICE = Object.freeze({
	active_tornado_alerts: "nws_all_tornado_alerts",
	active_tornado_warnings: "nws_active_tornado_warnings",
	active_tornado_watches: "nws_active_tornado_watches",
	public_information_statements: "nws_public_information_statements",
});
const SEVERE_WEATHER_DATA_INVENTORY = Object.freeze({
	tornado_vortex_signatures: "swdi_tornado_vortex_signatures",
});

export { NATIONAL_WEATHER_SERVICE, SEVERE_WEATHER_DATA_INVENTORY };

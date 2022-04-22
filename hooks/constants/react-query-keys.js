const NATIONAL_WEATHER_SERVICE = Object.freeze({
	active_tornado_alerts: "nws_all_tornado_alerts",
	active_tornado_warnings: "nws_active_tornado_warnings",
	active_tornado_watches: "nws_active_tornado_watches",
});
const SEVERE_WEATHER_DATA_INVENTORY = Object.freeze({
	tornado_vortex_signatures: "swdi_tornado_vortex_signatures",
});
const STORM_PREDICTION_CENTER = Object.freeze({
	all_rss_feeds: "spc_all_rss_feeds",
	test_all_rss_feeds: "spc_test_all_rss_feeds",
});

export {
	NATIONAL_WEATHER_SERVICE,
	SEVERE_WEATHER_DATA_INVENTORY,
	STORM_PREDICTION_CENTER,
};

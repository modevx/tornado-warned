const NATIONAL_WEATHER_SERVICE = Object.freeze({
	active_alert_count: "/alerts/active/count",
	active_alerts: "/alerts/active",
	alert_types: "/alerts/types",
	alerts: "/alerts",
	base_url: "https://api.weather.gov",
	glossary: "/glossary",
	products: "/products",
	radar_servers: "/radar/servers",
	radar_stations: "/radar/stations",
	stations: "/stations",
	zones: "/zones",
	active_tornado_alerts:
		"/alerts/active?event=Tornado%20Warning%2CTornado%20Watch",
	active_tornado_warnings:
		"/alerts/active?event=Tornado%20Warning&message_type=alert",
	active_tornado_watches:
		"/alerts/active?event=Tornado%20Watch&message_type=alert",
});
const SEVERE_WEATHER_DATA_INVENTORY = Object.freeze({
	base_url: "https://www.ncdc.noaa.gov/swdiws",
	tornado_vortx_signatures_json: "/json/nx3tvs",
	mesocyclone_signatures_json: "/json/nx3meso",
	hail_signatures_json: "/json/nx3hail",
	storm_cell_structure_information_json: "/json/nx3structure",
});
const STORM_PREDICTION_CENTER = Object.freeze({
	api_rss_all_feeds: "/api/rss-storm-prediction-center-all-feeds",
	api_rss_convective_outlook:
		"/api/rss-storm-prediction-center-convective-outlook",
	api_rss_dangerous_situations:
		"/api/rss-storm-prediction-center-dangerous-situations",
	api_rss_mesoscale_discussions:
		"/api/rss-storm-prediction-center-mesoscale-discussions",
	api_rss_severe_wx_media_briefs:
		"/api/rss-storm-prediction-center-severe-wx-xmedia-briefings",
	api_rss_status_reports: "/api/rss-storm-prediction-center-status-reports",
	base_url: "http://www.spc.noaa.gov",
	convective_outlook_rss_feed: "/products/spcacrss.xml",
	mesoscale_discussions_rss_feed: "/products/spcmdrss.xml",
	particulary_dangerous_situation_rss_feed: "/products/spcpdswwrss.xml",
	rss_all_feeds: "/products/spcrss.xml",
	severe_wx_outlook_rss_feed: "/products/spcmbrss.xml",
	test_base_url: "http://test-www-spc.woc.noaa.gov",
	tornado_thunderstorm_rss_feed: "/products/spcwwrss.xml",
});

export {
	NATIONAL_WEATHER_SERVICE,
	SEVERE_WEATHER_DATA_INVENTORY,
	STORM_PREDICTION_CENTER,
};

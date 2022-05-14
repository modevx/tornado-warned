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

const SPC_OMS_BASE =
	"https://mapservices.weather.noaa.gov/vector/rest/services/outlooks/SPC_wx_outlks/MapServer";
const SPC_OUTLOOK_MAP_SERVICE = Object.freeze({
	base_url:
		"https://mapservices.weather.noaa.gov/vector/rest/services/outlooks/SPC_wx_outlks/MapServer",
	day1: {
		convective: `${SPC_OMS_BASE}/0`,
		categorical: `${SPC_OMS_BASE}/1`,
		probabilistic_tornado: `${SPC_OMS_BASE}/2`,
		probabilistic_hail: `${SPC_OMS_BASE}/3`,
		probabilistic_wind: `${SPC_OMS_BASE}/4`,
		significant_tornado: `${SPC_OMS_BASE}/5`,
		significant_hail: `${SPC_OMS_BASE}/6`,
		significant_wind: `${SPC_OMS_BASE}/7`,
	},
	day2: {
		convective: `${SPC_OMS_BASE}/8`,
		categorical: `${SPC_OMS_BASE}/9`,
		probabilistic_tornado: `${SPC_OMS_BASE}/10`,
		probabilistic_hail: `${SPC_OMS_BASE}/11`,
		probabilistic_wind: `${SPC_OMS_BASE}/12`,
		significant_tornado: `${SPC_OMS_BASE}/13`,
		significant_hail: `${SPC_OMS_BASE}/14`,
		significant_wind: `${SPC_OMS_BASE}/15`,
	},
	day3: {
		convective: `${SPC_OMS_BASE}/16`,
		categorical: `${SPC_OMS_BASE}/17`,
		probabilistic: `${SPC_OMS_BASE}/18`,
		significant_severe: `${SPC_OMS_BASE}/19`,
	},
	days_4_8: {
		convective: `${SPC_OMS_BASE}/20`,
		day4_probabilistic: `${SPC_OMS_BASE}/21`,
		day5_probabilistic: `${SPC_OMS_BASE}/22`,
		day6_probabilistic: `${SPC_OMS_BASE}/23`,
		day7_probabilistic: `${SPC_OMS_BASE}/24`,
		day8_probabilistic: `${SPC_OMS_BASE}/25`,
	},
});
const STORM_PREDICTION_CENTER = Object.freeze({
	base_url: "http://www.spc.noaa.gov",
	rss_feed_all: "/products/spcrss.xml",
	rss_feed_convective_outlook: "/products/spcacrss.xml",
	rss_feed_mesoscale_discussions: "/products/spcmdrss.xml",
	rss_feed_multi_media_briefing: "/products/spcmbrss.xml",
	rss_feed_particulary_dangerous_situation: "/products/spcpdswwrss.xml",
	rss_feed_severe_wx: "/products/spcwwrss.xml",
	test_base_url: "http://test-www-spc.woc.noaa.gov",
});

export {
	NATIONAL_WEATHER_SERVICE,
	SEVERE_WEATHER_DATA_INVENTORY,
	SPC_OUTLOOK_MAP_SERVICE as SPC_MAP_SERVICE,
	STORM_PREDICTION_CENTER,
};

export const SPC_RSS = Object.freeze({
	base_url: "http://www.spc.noaa.gov",
	rss_feed_all: "/products/spcrss.xml",
	rss_feed_convective_outlook: "/products/spcacrss.xml",
	rss_feed_mesoscale_discussions: "/products/spcmdrss.xml",
	rss_feed_multi_media_briefing: "/products/spcmbrss.xml",
	rss_feed_particulary_dangerous_situation: "/products/spcpdswwrss.xml",
	rss_feed_severe_wx: "/products/spcwwrss.xml",
	test_base_url: "http://test-www-spc.woc.noaa.gov",
});

// export const CONVECTIVE_OUTLOOK_LAYERS = `${MAP_SERVICE_URLS}/layers`;

const BASE_URL =
	"https://mapservices.weather.noaa.gov/vector/rest/services/outlooks/SPC_wx_outlks/MapServer";

export const MAP_SERVICE_URLS = Object.freeze({
	base_url: BASE_URL,
	layers: `${BASE_URL}/layers?f=json`,
	webmap_service:
		"https://mapservices.weather.noaa.gov/vector/services/outlooks/SPC_wx_outlks/MapServer/WMSServer?request=GetCapabilities&service=WMS",
	day1: {
		convective_group_layer: `${BASE_URL}/0`,
		sub_layers: {
			categorical: `${BASE_URL}/1`,
			probabilistic_tornado: `${BASE_URL}/2`,
			probabilistic_hail: `${BASE_URL}/3`,
			probabilistic_wind: `${BASE_URL}/4`,
			significant_tornado: `${BASE_URL}/5`,
			significant_hail: `${BASE_URL}/6`,
			significant_wind: `${BASE_URL}/7`,
		},
	},
	day2: {
		convective_group_layer: `${BASE_URL}/8`,
		sub_layers: {
			categorical: `${BASE_URL}/9`,
			probabilistic_tornado: `${BASE_URL}/10`,
			probabilistic_hail: `${BASE_URL}/11`,
			probabilistic_wind: `${BASE_URL}/12`,
			significant_tornado: `${BASE_URL}/13`,
			significant_hail: `${BASE_URL}/14`,
			significant_wind: `${BASE_URL}/15`,
		},
	},
	day3: {
		convective_group_layer: `${BASE_URL}/16`,
		sub_layers: {
			categorical: `${BASE_URL}/17`,
			probabilistic: `${BASE_URL}/18`,
			significant_severe: `${BASE_URL}/19`,
		},
	},
	day4: {
		convective_group_layer: `${BASE_URL}/20`,
		sub_layers: { probabilistic: `${BASE_URL}/21` },
	},
	day5: {
		convective_group_layer: `${BASE_URL}/20`,
		sub_layers: { probabilistic: `${BASE_URL}/22` },
	},
	day6: {
		convective_group_layer: `${BASE_URL}/20`,
		sub_layers: { probabilistic: `${BASE_URL}/23` },
	},
	day7: {
		convective_group_layer: `${BASE_URL}/20`,
		sub_layers: { probabilistic: `${BASE_URL}/24` },
	},
	day8: {
		convective_group_layer: `${BASE_URL}/20`,
		sub_layers: { probabilistic: `${BASE_URL}/25` },
	},
});

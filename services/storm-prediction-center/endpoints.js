const MAP_SERVICE_BASE =
	"https://mapservices.weather.noaa.gov/vector/rest/services/outlooks/SPC_wx_outlks/MapServer";

const SPC_RSS = Object.freeze({
	base_url: "http://www.spc.noaa.gov",
	rss_feed_all: "/products/spcrss.xml",
	rss_feed_convective_outlook: "/products/spcacrss.xml",
	rss_feed_mesoscale_discussions: "/products/spcmdrss.xml",
	rss_feed_multi_media_briefing: "/products/spcmbrss.xml",
	rss_feed_particulary_dangerous_situation: "/products/spcpdswwrss.xml",
	rss_feed_severe_wx: "/products/spcwwrss.xml",
	test_base_url: "http://test-www-spc.woc.noaa.gov",
});

export const CONVECTIVE_OUTLOOK_LAYERS = `${MAP_SERVICE_BASE}/layers`;

export const MAP_SERVICE = Object.freeze({
	day1: {
		convective_group_layer: `${MAP_SERVICE_BASE}/0`,
		sub_layers: {
			categorical: `${MAP_SERVICE_BASE}/1`,
			probabilistic_tornado: `${MAP_SERVICE_BASE}/2`,
			probabilistic_hail: `${MAP_SERVICE_BASE}/3`,
			probabilistic_wind: `${MAP_SERVICE_BASE}/4`,
			significant_tornado: `${MAP_SERVICE_BASE}/5`,
			significant_hail: `${MAP_SERVICE_BASE}/6`,
			significant_wind: `${MAP_SERVICE_BASE}/7`,
		},
	},
	day2: {
		convective_group_layer: `${MAP_SERVICE_BASE}/8`,
		sub_layers: {
			categorical: `${MAP_SERVICE_BASE}/9`,
			probabilistic_tornado: `${MAP_SERVICE_BASE}/10`,
			probabilistic_hail: `${MAP_SERVICE_BASE}/11`,
			probabilistic_wind: `${MAP_SERVICE_BASE}/12`,
			significant_tornado: `${MAP_SERVICE_BASE}/13`,
			significant_hail: `${MAP_SERVICE_BASE}/14`,
			significant_wind: `${MAP_SERVICE_BASE}/15`,
		},
	},
	day3: {
		convective_group_layer: `${MAP_SERVICE_BASE}/16`,
		sub_layers: {
			categorical: `${MAP_SERVICE_BASE}/17`,
			probabilistic: `${MAP_SERVICE_BASE}/18`,
			significant_severe: `${MAP_SERVICE_BASE}/19`,
		},
	},
	day4: {
		convective_group_layer: `${MAP_SERVICE_BASE}/20`,
		sub_layers: { probabilistic: `${MAP_SERVICE_BASE}/21` },
	},
	day5: {
		convective_group_layer: `${MAP_SERVICE_BASE}/20`,
		sub_layers: { probabilistic: `${MAP_SERVICE_BASE}/22` },
	},
	day6: {
		convective_group_layer: `${MAP_SERVICE_BASE}/20`,
		sub_layers: { probabilistic: `${MAP_SERVICE_BASE}/23` },
	},
	day7: {
		convective_group_layer: `${MAP_SERVICE_BASE}/20`,
		sub_layers: { probabilistic: `${MAP_SERVICE_BASE}/24` },
	},
	day8: {
		convective_group_layer: `${MAP_SERVICE_BASE}/20`,
		sub_layers: { probabilistic: `${MAP_SERVICE_BASE}/25` },
	},
});

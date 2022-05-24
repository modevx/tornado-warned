const BASE_URL = {
	app_api: "/api",
	map_serv:
		"https://mapservices.weather.noaa.gov/vector/rest/services/outlooks/SPC_wx_outlks/MapServer",
	spc: "http://www.spc.noaa.gov",
	spc_test: "http://test-www-spc.woc.noaa.gov",
	web_map_svc:
		"https://mapservices.weather.noaa.gov/vector/services/outlooks/SPC_wx_outlks/MapServer/WMSServer?request=GetCapabilities&service=WMS",
};

// "oms" --> outlook map service
// "wms" --> web map service
const ENDPOINT = Object.freeze({
	oms: BASE_URL.map_serv,
	oms_layers: `${BASE_URL.map_serv}/layers`,
	oms_1_convective_outlook: `${BASE_URL.map_serv}/0`,
	oms_1_categorical: `${BASE_URL.map_serv}/1`,
	oms_1_significant_tornado: `${BASE_URL.map_serv}/2`,
	oms_1_probabilistic_tornado: `${BASE_URL.map_serv}/3`,
	oms_1_significant_hail: `${BASE_URL.map_serv}/4`,
	oms_1_probabilistic_hail: `${BASE_URL.map_serv}/5`,
	oms_1_significant_wind: `${BASE_URL.map_serv}/6`,
	oms_1_probabilistic_wind: `${BASE_URL.map_serv}/7`,
	oms_2_convective_outlook: `${BASE_URL.map_serv}/8`,
	oms_2_categorical: `${BASE_URL.map_serv}/9`,
	oms_2_significant_tornado: `${BASE_URL.map_serv}/10`,
	oms_2_probabilistic_tornado: `${BASE_URL.map_serv}/11`,
	oms_2_significant_hail: `${BASE_URL.map_serv}/12`,
	oms_2_probabilistic_hail: `${BASE_URL.map_serv}/13`,
	oms_2_significant_wind: `${BASE_URL.map_serv}/14`,
	oms_2_probabilistic_wind: `${BASE_URL.map_serv}/15`,
	oms_3_convective_outlook: `${BASE_URL.map_serv}/16`,
	oms_3_categorical: `${BASE_URL.map_serv}/17`,
	oms_3_significant: `${BASE_URL.map_serv}/19`,
	oms_3_probabilistic: `${BASE_URL.map_serv}/18`,
	oms_4_8_convective_outlooks: `${BASE_URL.map_serv}/20`,
	oms_4_probabilistic: `${BASE_URL.map_serv}/21`,
	oms_5_probabilistic: `${BASE_URL.map_serv}/22`,
	oms_6_probabilistic: `${BASE_URL.map_serv}/23`,
	oms_7_probabilistic: `${BASE_URL.map_serv}/24`,
	oms_8_probabilistic: `${BASE_URL.map_serv}/25`,
	rss_outlooks: `${BASE_URL.spc}/products/spcacrss.xml`,
	rss_mesos: `${BASE_URL.spc}/products/spcmdrss.xml`,
	rss_mul_med_brfs: `${BASE_URL.spc}/products/spcmbrss.xml`,
	rss_pds: `${BASE_URL.spc}/products/spcpdswwrss.xml`,
	rss_sev_wx: `${BASE_URL.spc}/products/spcwwrss.xml`,
	rss_test_outlooks: `${BASE_URL.spc_test}/products/spcacrss.xml`,
	rss_test_mesos: `${BASE_URL.spc_test}/products/spcmdrss.xml`,
	rss_test_mul_med_brfs: `${BASE_URL.spc_test}/products/spcmbrss.xml`,
	rss_test_pds: `${BASE_URL.spc_test}/products/spcpdswwrss.xml`,
	rss_test_sev_wx: `${BASE_URL.spc_test}/products/spcwwrss.xml`,
	wms: "",
});

const DEFAULT_TIMEOUT = 5000;

const CLIENT = {
	app_api: axios.create({
		baseURL: BASE_URL.app_api,
		timeout: DEFAULT_TIMEOUT,
	}),
	map_service: axios.create({
		baseURL: BASE_URL.map_serv,
		timeout: DEFAULT_TIMEOUT,
	}),
	spc: axios.create({
		baseURL: BASE_URL.spc,
		timeout: DEFAULT_TIMEOUT,
	}),
	spc_test: axios.create({
		baseURL: BASE_URL.spc_test,
		timeout: DEFAULT_TIMEOUT,
	}),
	web_map_svc: axios.create({
		baseURL: BASE_URL.web_map_svc,
		timeout: DEFAULT_TIMEOUT,
	}),
};

export const getSpcRssFeedMesoDiscussions = async () => {
	return await CLIENT.app_api.post("/spc-rss-feeds", {
		feed_url: ENDPOINT.rss_mesos,
	});
};
export const getSpcRssFeedMultiMediaBriefings = async () => {
	return await CLIENT.app_api.post("/spc-rss-feeds", {
		feed_url: ENDPOINT.rss_mul_med_brfs,
	});
};
export const getSpcRssFeedOutlooks = async () => {
	return await CLIENT.app_api.post("/spc-rss-feeds", {
		feed_url: ENDPOINT.rss_outlooks,
	});
};
export const getSpcRssFeedParticularlyDangerousSituations = async () => {
	return await CLIENT.app_api.post("/spc-rss-feeds", {
		feed_url: ENDPOINT.rss_pds,
	});
};
export const getSpcRssFeedSevereWeather = async () => {
	return await CLIENT.app_api.post("/spc-rss-feeds", {
		feed_url: ENDPOINT.rss_sev_wx,
	});
};

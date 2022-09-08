import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const BASE_URL = {
	App: "/api",
	SPC: "http://www.spc.noaa.gov",
	MapServer:
		"https://mapservices.weather.noaa.gov/vector/rest/services/outlooks/SPC_wx_outlks/MapServer",
	WFSServer:
		"https://mapservices.weather.noaa.gov/vector/services/outlooks/SPC_wx_outlks/MapServer/WFSServer",
	WMSServer:
		"https://mapservices.weather.noaa.gov/vector/services/outlooks/SPC_wx_outlks/MapServer/WMSServer",
};

export const ENDPOINT = Object.freeze({
	otlk_all_layers: "/layers",
	otlk_day1_gif: "/products/outlook/day1otlk.gif",
	otlk_day2_gif: "/products/outlook/day2otlk.gif",
	otlk_day3_gif: "/products/outlook/day3otlk.gif",
	otlk_day48_gif: "/products/outlook/day48prob.gif",
	otlk_day_1_conv: "/0",
	otlk_day_1_cat: "/1",
	otlk_day_1_sig_tornado: "/2",
	otlk_day_1_prob_tornado: "/3",
	otlk_day_1_sig_hail: "/4",
	otlk_day_1_prob_hail: "/5",
	otlk_day_1_sig_wind: "/6",
	otlk_day_1_prob_wind: "/7",
	otlk_day_2_conv: "/8",
	otlk_day_2_cat: "/9",
	otlk_day_2_sig_tornado: "/10",
	otlk_day_2_prob_tornado: "/11",
	otlk_day_2_sig_hail: "/12",
	otlk_day_2_prob_hail: "/13",
	otlk_day_2_sig_wind: "/14",
	otlk_day_2_prob_wind: "/15",
	otlk_day_3_conv: "/16",
	otlk_day_3_cat: "/17",
	otlk_day_3_sig: "/19",
	otlk_day_3_prob: "/18",
	otlk_day_4_8_conv: "/20",
	otlk_day_4_prob: "/21",
	otlk_day_5_prob: "/22",
	otlk_day_6_prob: "/23",
	otlk_day_7_prob: "/24",
	otlk_day_8_prob: "/25",
	rss_outlooks: "/products/spcacrss.xml",
	rss_mesos: "/products/spcmdrss.xml",
	rss_mul_med_brfs: "/products/spcmbrss.xml",
	rss_pds: "/products/spcpdswwrss.xml",
	rss_sev_wx: "/products/spcwwrss.xml",
	rss_test_outlooks: "/products/spcacrss.xml",
	rss_test_mesos: "/products/spcmdrss.xml",
	rss_test_mul_med_brfs: "/products/spcmbrss.xml",
	rss_test_pds: "/products/spcpdswwrss.xml",
	rss_test_sev_wx: "/products/spcwwrss.xml",
});

const DEFAULT_TIMEOUT = 5000;
const CLIENT = {
	app_api: axios.create({
		baseURL: BASE_URL.App,
		timeout: DEFAULT_TIMEOUT,
	}),
	mapServerice: axios.create({
		baseURL: BASE_URL.MapServer,
		timeout: DEFAULT_TIMEOUT,
	}),
	spc: axios.create({
		baseURL: BASE_URL.SPC,
		timeout: DEFAULT_TIMEOUT,
	}),
	spc_test: axios.create({
		baseURL: BASE_URL.spc_test,
		timeout: DEFAULT_TIMEOUT,
	}),
	tornadoWarnedApi: axios.create({
		baseURL: "",
		timeout: DEFAULT_TIMEOUT,
	}),
	web_map_svc: axios.create({
		baseURL: BASE_URL.web_map_svc,
		timeout: DEFAULT_TIMEOUT,
	}),
};

export const getSpcRssFeed = async (feedType) => {
	const feedMap = {
		outlooks: `${BASE_URL}${ENDPOINT.rss_outlooks}`,
		media: `${BASE_URL}${ENDPOINT.rss_mul_med_brfs}`,
		meso: `${BASE_URL}${ENDPOINT.rss_mesos}`,
		pds: `${BASE_URL}${ENDPOINT.rss_pds}`,
		swx: `${BASE_URL}${ENDPOINT.rss_sev_wx}`,
	};

	if (!Object.keys(feedMap).includes(feedType)) {
		throw new Error(
			`${feedType} is not a valid RSS Feed.  Valid feed types: ${Object.keys(
				feedMap
			).toString()}.`
		);
	}

	const { data } = await CLIENT.app_api.post("/api/spc-rss-feeds", {
		feed_url: feedMap[feedType],
	});

	return data;
};

export const getSPCConvectiveOutlook = async (day) => {
	return await CLIENT.spc(`otlk_day${day}_gif`);
};

export const useConvectiveOutlookQuery = (day) =>
	useQuery(["ConvectiveOutlooks", day], () => getSPCConvectiveOutlook(day));

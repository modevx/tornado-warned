import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const DEFAULT_TIMEOUT = 5000;

const spcURL = "http://www.spc.noaa.gov";

const MAP_SERVER_CLIENT = axios.create({
	baseURL:
		"https://mapservices.weather.noaa.gov/vector/rest/services/outlooks/SPC_wx_outlks/MapServer",
	timeout: DEFAULT_TIMEOUT,
});
const WMS_SERVER_CLIENT = axios.create({
	baseURL:
		"https://mapservices.weather.noaa.gov/vector/services/outlooks/SPC_wx_outlks/MapServer/WMSServer",
	timeout: DEFAULT_TIMEOUT,
});
const APP_API_CLIENT = {
	baseURL: "/api",
	timeout: DEFAULT_TIMEOUT,
};

export const ENDPOINT = Object.freeze({
	otlkGif1: "/products/outlook/day1otlk.gif",
	otlkGif2: "/products/outlook/day2otlk.gif",
	otlkGif3: "/products/outlook/day3otlk.gif",
	otlkGif48: "/products/outlook/day48prob.gif",
	otlk_1_conv: "/0",
	otlk_1_cat: "/1",
	otlk_1_sig_tornado: "/2",
	otlk_1_prob_tornado: "/3",
	otlk_1_sig_hail: "/4",
	otlk_1_prob_hail: "/5",
	otlk_1_sig_wind: "/6",
	otlk_1_prob_wind: "/7",
	otlk_2_conv: "/8",
	otlk_2_cat: "/9",
	otlk_2_sig_tornado: "/10",
	otlk_2_prob_tornado: "/11",
	otlk_2_sig_hail: "/12",
	otlk_2_prob_hail: "/13",
	otlk_2_sig_wind: "/14",
	otlk_2_prob_wind: "/15",
	otlk_3_conv: "/16",
	otlk_3_cat: "/17",
	otlk_3_sig: "/19",
	otlk_3_prob: "/18",
	otlk_4_8_conv: "/20",
	otlk_4_prob: "/21",
	otlk_5_prob: "/22",
	otlk_6_prob: "/23",
	otlk_7_prob: "/24",
	otlk_8_prob: "/25",
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

const fetchOutlookLayerById = async (layerIdNum) => {
	return await MAP_SERVER_CLIENT.get(
		`/${layerIdNum}/query?&outFields=*&geometry=true&f=geojson`
	);
};
const fetchAllSPCOutlookLayers = async () => {
	return await MAP_SERVER_CLIENT.get("/layers?f=json");
};

export const fetchRssFeed = async (feedEndointString) => {
	const feedMap = {
		outlooks: `${BASE_URL}${ENDPOINT.rss_outlooks}`,
		media: `${BASE_URL}${ENDPOINT.rss_mul_med_brfs}`,
		meso: `${BASE_URL}${ENDPOINT.rss_mesos}`,
		pds: `${BASE_URL}${ENDPOINT.rss_pds}`,
		swx: `${BASE_URL}${ENDPOINT.rss_sev_wx}`,
	};

	const { data } = await APP_API_CLIENT.post("/spc-rss-feeds", {
		feedURL: feedMap[feedType],
	});

	return data;
};

export const getSPCConvectiveOutlook = async (day) => {
	return await CLIENT.spc(`otlk_day${day}_gif`);
};

export const useConvectiveOutlookQuery = (day) =>
	useQuery(["ConvectiveOutlooks", day], () => getSPCConvectiveOutlook(day));

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const DEFAULT_TIMEOUT = 5000;

// -- OUTLOOKS
const MAP_SERVER_CLIENT = axios.create({
	baseURL:
		"https://mapservices.weather.noaa.gov/vector/rest/services/outlooks/SPC_wx_outlks/MapServer",
	timeout: DEFAULT_TIMEOUT,
});
// -- SVGs
const WMS_SERVER_CLIENT = axios.create({
	baseURL:
		"https://mapservices.weather.noaa.gov/vector/services/outlooks/SPC_wx_outlks/MapServer/WMSServer",
	timeout: DEFAULT_TIMEOUT,
});

export const LAYER_ID_NUM = Object.freeze({
	cat1: "1",
	cat2: "9",
	cat3: "17",
	conv1: "0",
	conv2: "8",
	conv3: "16",
	conv48: "20",
	prob3: "18",
	prob4: "21",
	prob5: "22",
	prob6: "23",
	prob7: "24",
	prob8: "25",
	probHail1: "5",
	probHail2: "13",
	probTornado1: "3",
	probTornado2: "11",
	probWind1: "7",
	probWind2: "15",
	sig3: "19",
	sigHail1: "4",
	sigHail2: "12",
	sigTornado1: "2",
	sigTornado2: "10",
	sigWind1: "6",
	sigWind2: "14",
});

const fetchOutlookByLayerId = async (layerIdNum) => {
	return await MAP_SERVER_CLIENT.get(
		`/${layerIdNum}/query?f=json&geometry=true&outFields=objectid,dn,valid,expire,idp_source`
	);
};

export const useCategoricalOutlookQuery = (layerIdNum) => {
	return useQuery(["convectiveOutlooks", layerIdNum], () =>
		fetchOutlookByLayerId(layerIdNum)
	);
};

// const fetchAllOutlookLayers = async () => {
// 	return await MAP_SERVER_CLIENT.get("/layers?f=json");
// };

const BASE_URL = "http://www.spc.noaa.gov";

const APP_API_CLIENT = {
	baseURL: "/api",
	timeout: DEFAULT_TIMEOUT,
};

const ENDPOINT = Object.freeze({
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

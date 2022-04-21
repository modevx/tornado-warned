import axios from "axios";
import Parser from "rss-parser";

// ** AXIOS CONFIG
// ***************************************
const DEFAULT_TIMEOUT = 5000;

const AXIOS = axios.create({
	baseURL: "http://www.spc.noaa.gov/products",
	timeout: DEFAULT_TIMEOUT,
});

const AXIOS_TEST = axios.create({
	baseURL: "http://test-www-spc.woc.noaa.gov/products",
	timeout: DEFAULT_TIMEOUT,
});

// ** ENDPOINTS
// ***************************************
const ENDPOINTS = Object.freeze({
	spcrss: "/spcrss.xml",
	spcwwrss: "/spcwwrss.xml",
	spcpdswwrss: "/spcpdswwrss.xml",
	spcmdrss: "/spcmdrss.xml",
	spcacrss: "/spcacrss.xml",
	spcmbrss: "/spcmbrss.xml",
});

// ** REQUESTS
// ***************************************
const axiosFetchSPC = async (axiosInstance, path) => {
	const raw = await axiosInstance.get(path);
	return await raw.data;
};

// ** RSS FEEDS
// ***************************************
export const fetchSPC_RSS_Test = async () => {
	return await axiosFetchSPC(AXIOS_TEST, ENDPOINTS.spcrss);
};

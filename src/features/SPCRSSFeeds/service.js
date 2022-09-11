import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const DEFAULT_TIMEOUT = 5000;

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

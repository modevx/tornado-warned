import Parser from "rss-parser";

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

import Parser from "rss-parser";

const fetchFromStormPredictionCenter = async (axiosInstance, path) => {
	const raw = await axiosInstance.get(path);
	return await raw.data;
};

// ** RSS FEEDS
// ***************************************
export const fetchSPC_RSS_Test = async () => {
	return await fetchFromStormPredictionCenter(AXIOS_TEST, ENDPOINTS.spcrss);
};

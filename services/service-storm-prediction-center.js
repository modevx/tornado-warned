import { STORM_PREDICTION_CENTER as EP } from "./endpoints";
import { STORM_PREDICTION_CENTER as AXIOS } from "./https-client-config";

export const fetchSpcRssFeed = async (spcRssPath) => {
	return await AXIOS.cors.post("/storm-prediction-center-rss-feeds", {
		rssFeedUrl: EP.base_url.concat(spcRssPath),
	});
};

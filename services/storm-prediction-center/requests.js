import { STORM_PREDICTION_CENTER } from "services/http-client.js";
import { ENDPOINTS } from "services/storm-prediction-center";

export const fetchSpcRssFeed = async (spcRssPath) => {
	return await STORM_PREDICTION_CENTER.cors.post(
		"/storm-prediction-center-rss-feeds",
		{
			rssFeedUrl: ENDPOINTS.base_url.concat(spcRssPath),
		}
	);
};

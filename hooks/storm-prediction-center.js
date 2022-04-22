import { useQuery } from "react-query";
import { STORM_PREDICTION_CENTER as KEYS } from "./constants/react-query-keys";
import { fetchAllRSSFeeds } from "../services/storm-prediction-center";

export const useSpcRssFeeds = () => {
	return useQuery(KEYS.all_rss_feeds, fetchAllRSSFeeds);
};

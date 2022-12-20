import { useQuery } from "@tanstack/react-query";
import { getSpcRssFeed } from "services/storm-prediction-center";

export const useRssFeedQuery = (feedType) => {
	return useQuery(["spc-rss-feeds", feedType], () => getSpcRssFeed(feedType));
};

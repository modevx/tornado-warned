import { useQuery } from "@tanstack/react-query";
import { getSpcRssFeed } from "services/spc-outlooks-service";

export const useRssFeedQuery = (feedType) => {
	return useQuery(["spc-rss-feeds", feedType], () => getSpcRssFeed(feedType));
};

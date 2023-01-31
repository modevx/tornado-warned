import { useQuery } from "@tanstack/react-query";
import { getSpcRssFeed } from "services/spc-map-server";

export const useRssFeedQuery = (feedType) => {
	return useQuery(["spc-rss-feeds", feedType], () => getSpcRssFeed(feedType));
};

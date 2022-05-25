import { useQuery } from "react-query";
import { getSpcRssFeed } from "services/SPC";

export const useRssFeedQuery = (feedType) => {
	return useQuery(["spc-rss-feeds", feedType], () => getSpcRssFeed(feedType));
};

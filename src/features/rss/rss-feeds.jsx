import { FEED_TYPES } from "features/rss/constants";
import { useRssFeedQuery } from "./service";

export const RssFeeds = () => {
  const { data: outlooks } = useRssFeedQuery(FEED_TYPES.outlooks);

  if (outlooks) {
    console.log("outlooks >>\n", outlooks);
  }

  return <div></div>;
};

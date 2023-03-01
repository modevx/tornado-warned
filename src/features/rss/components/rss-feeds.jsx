import { RSS_FEED_TYPES } from "features/rss/constants";
import { useRssFeedQuery } from "../service";

const RssFeeds = () => {
  const { data: outlooks } = useRssFeedQuery(RSS_FEED_TYPES.outlooks);

  if (outlooks) {
    console.log("outlooks >>\n", outlooks);
  }

  return <div></div>;
};

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { APP, SPC } from "_shared/constants/urls";
import { DEFAULT_TIMEOUT } from "constants";

const APP_API_CLIENT = axios.create({
  baseURL: APP.spc_rss_feeds,
  timeout: DEFAULT_TIMEOUT,
});

export const RSS_FEED_TYPES = Object.freeze({
  outlooks: "outlooks",
  media: "media",
  meso: "meso",
  pds: "pds",
  sxw: "swx",
});

const fetchRssFeed = async (rssType) => {
  const feedMap = {
    outlooks: SPC.rss_convective_outlooks,
    media: SPC.rss_severe_wx_outlook_multimedia_briefings,
    meso: SPC.rss_mesoscale_discussions,
    pds: SPC.rss_particularly_dangerous_situations,
    swx: SPC.rss_tornado_severe_wx_watches,
  };

  const { data } = await APP_API_CLIENT.post(APP.spc_rss_feeds, {
    feedURL: feedMap[rssType],
  });

  return data;
};

export const useRssFeedQuery = (rssType) => {
  return useQuery(
    ["spc-rss-feeds", rssType],
    async () => await fetchRssFeed(rssType)
  );
};

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { APP, STORM_PREDICTION_CENTER } from "constants/urls";
import { DEFAULT_TIMEOUT } from "constants";
import RSSParser from "rss-parser";

const APP_API_CLIENT = {
  baseURL: APP.API,
  timeout: DEFAULT_TIMEOUT,
};

export const RSS_FEED_TYPES = Object.freeze({
  outlooks: "outlooks",
  media: "media",
  meso: "meso",
  pds: "pds",
  sxw: "swx",
});

export const fetchRssFeed = async (rssType) => {
  const feedMap = {
    outlooks: STORM_PREDICTION_CENTER.rss_convective_outlooks,
    media: STORM_PREDICTION_CENTER.rss_severe_wx_outlook_multimedia_briefings,
    meso: STORM_PREDICTION_CENTER.rss_mesoscale_discussions,
    pds: STORM_PREDICTION_CENTER.rss_particularly_dangerous_situations,
    swx: STORM_PREDICTION_CENTER.rss_tornado_severe_wx_watches,
  };

  const { data } = await APP_API_CLIENT.post(APP.spc_rss_feeds, {
    feedURL: feedMap[rssType],
  });

  return data;
};

export const useRssFeedQuery = (rssType) => {
  return useQuery(["spc-rss-feeds", rssType], async () => {
    return await fetchRssFeed(rssType);
  });
};

const fetchOutlookRSSFeed = async () => {
  const parser = new RSSParser();

  const feed = await parser.parseURL();
};

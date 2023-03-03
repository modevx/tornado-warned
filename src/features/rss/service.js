import { useQuery } from "@tanstack/react-query";
import { URLS } from "./constants";
import { HTTP_CLIENT } from "./service.config";

const fetchRssFeed = async (rssType) => {
  const feedMap = {
    all: "http://www.spc.noaa.gov/products/spcrss.xml",
    outlooks: "http://www.spc.noaa.gov//products/spcacrss.xml",
    media: "http://www.spc.noaa.gov/products/spcmbrss.xml",
    meso: "http://www.spc.noaa.gov/products/spcmdrss.xml",
    pds: "http://www.spc.noaa.gov/products/spcpdswwrss.xml",
    swx: "http://www.spc.noaa.gov/products/spcwwrss.xml",
  };

  const { data } = await HTTP_CLIENT.post(APP.spc_rss_feeds, {
    feedURL: feedMap[rssType],
  });

  return data;
};

export const useRssFeedQuery = (rssType) => {
  return useQuery(
    ["SPC RSS FEEDS", rssType],
    async () => await fetchRssFeed(rssType)
  );
};

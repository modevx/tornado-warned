export const DEFAULT_TIMEOUT = 5000;

export const API = Object.freeze({
  SPC_RSS_FEEDS: "api/spc-rss-feeds",
});

const BASE = Object.freeze({
  NOAA: "https://www.ncdc.noaa.gov",
  NOAA_MAP_SERV: "https://idpgis.ncep.noaa.gov/arcgis/rest/services",
  NWS: "https://www.weather.gov",
  NWS_MAP_SERV: "https://mapservices.weather.noaa.gov/vector/rest/services",
  SPC: "http://www.spc.noaa.gov",
});

export const ENDPOINTS = Object.freeze({
  outlooks: "/products/spcacrss.xml",
  mesos: "/products/spcmdrss.xml",
  mul_med_brfs: "/products/spcmbrss.xml",
  pds: "/products/spcpdswwrss.xml",
  sev_wx: "/products/spcwwrss.xml",
});

export const FEED_TYPES = Object.freeze({
  all: "all",
  outlooks: "outlooks",
  media: "media",
  meso: "meso",
  pds: "pds",
  sxw: "swx",
});

export const URLS = Object.freeze({
  FORECAST_PRODUCTS: `${BASE.SPC}/products`,
  OTLK_MAP_SERV: `${BASE.NWS_MAP_SERV}/outlooks/SPC_wx_outlks/MapServer`,
  OTLK_MAP_SERV_LGND: `${BASE.NWS_MAP_SERV}/outlooks/SPC_wx_outlks/MapServer/legend?f=pjson`,
  RSS_ALL: `${BASE.SPC}/products/spcrss.xml`,
  RSS_CONV_OTLKS: `${BASE.SPC}/products/spcacrss.xml`,
  RSS_FEED_DOCS: `${BASE.SPC}/aboutrss.html`,
  RSS_FIRE_FC: `${BASE.SPC}/products/spcfwrss.xml`,
  RSS_MESO_DISC: `${BASE.SPC}/products/spcmdrss.xml`,
  RSS_PDS: `${BASE.SPC}/products/spcpdswwrss.xml`,
  RSS_SEV_WX_OTLK_MM_BRF: `${BASE.SPC}/products/spcmbrss.xml`,
  RSS_TOR_SEV_WX: `${BASE.SPC}/products/spcwwrss.xml`,
});

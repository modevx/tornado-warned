const BASE = Object.freeze({
  NOAA: "https://www.ncdc.noaa.gov",
  NWS: "https://www.weather.gov",
  SPC: "http://www.spc.noaa.gov",
});

export const IMAGE_SERVER = Object.freeze({});

export const MAP_SERVER = Object.freeze({
  SPC_OUTLOOKS: {
    base: "https://mapservices.weather.noaa.gov/vector/rest/services/outlooks/SPC_wx_outlks/MapServer",
  },
});

export const ENDPOINT = Object.freeze({
  NOAA: {},
  NWS: {},
  SPC: {},
});

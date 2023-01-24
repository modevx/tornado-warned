import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { OUTLOOK_CATEGORIES } from "../constants/outlook-categories";
import { OUTLOOK_LAYERS } from "../constants";

const DEFAULT_TIMEOUT = 5000;

const SPC_OUTLOOKS_URL =
  "https://mapservices.weather.noaa.gov/vector/rest/services/outlooks/SPC_wx_outlks/MapServer";

// const QUERY_ENDPOINT =
//   "query?f=json&geometry=true&outFields=objectid,dn,valid,expire,idp_source";

const QUERY_ENDPOINT = "query?&outFields=*&geometry=true&f=geojson";

const MAP_SERVER_CLIENT = axios.create({
  baseURL: SPC_OUTLOOKS_URL,
  timeout: DEFAULT_TIMEOUT,
});

const fetchOutlookLayerById = async (outlookLayerId) => {
  return await MAP_SERVER_CLIENT.get(`/${outlookLayerId}/${QUERY_ENDPOINT}`);
};

export const useCategoricalOutlooksQuery = () => {
  return useQuery(["convective-outlooks"], async () => {
    return await Promise.all([
      fetchOutlookLayerById(1),
      fetchOutlookLayerById(9),
      fetchOutlookLayerById(17),
    ]);
  });
};

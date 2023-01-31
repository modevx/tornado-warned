import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { OUTLOOK_CATEGORIES } from "../constants/outlook-categories";
import { OUTLOOK_LAYERS } from "../constants";
import RSSParser from "rss-parser";

// ------------------------------------------------------
// -- STORM PREDICTION CENTER MAP SERVER:
// -- Convective Outlook Geometry
// ------------------------------------------------------
const OUTLOOKS_MAP_SERVER_URL =
	"https://mapservices.weather.noaa.gov/vector/rest/services/outlooks/SPC_wx_outlks/MapServer/";
const DEFAULT_TIMEOUT = 5000;

const MAP_SERVER_CLIENT = axios.create({
	baseURL: OUTLOOKS_MAP_SERVER_URL,
	timeout: DEFAULT_TIMEOUT,
});

const QUERY_ENDPOINT = "query?&outFields=*&geometry=true&f=geojson";

const LEGEND_ENDPOINT = "legend?f=pjson";

const fetchOutlookLayerById = async (outlookLayerId) => {
	return await MAP_SERVER_CLIENT.get(`${outlookLayerId}/${QUERY_ENDPOINT}`);
};

const fetchOutlookLegendData = async () => {
	return await MAP_SERVER_CLIENT.get(`${LEGEND_ENDPOINT}`);
};

export const useConvectiveOutlookLegendQuery = () => {
	return useQuery(["convective-outlooks", "legend"], async () => {
		return await fetchOutlookLegendData();
	});
};

export const useConvectiveOutlooksQuery = () => {
	return useQuery(["convective-outlooks"], async () => {
		return await Promise.all([
			fetchOutlookLayerById(1),
			fetchOutlookLayerById(9),
			fetchOutlookLayerById(17),
		]);
	});
};

// ------------------------------------------------------
// -- STORM PREDICTION CENTER MAP SERVER:
// -- Convective Outlook Legend
// ------------------------------------------------------

// ------------------------------------------------------
// -- Convective Outlook Text Product
// ------------------------------------------------------

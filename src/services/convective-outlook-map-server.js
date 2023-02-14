import * as URLS from "constants/urls";
import axios from "axios";
import { DEFAULT_TIMEOUT } from "constants/services";
import { useQuery } from "@tanstack/react-query";

const MAP_SERVER_CLIENT = axios.create({
	baseURL: URLS.SPC.OTLK_MAP_SERV,
	timeout: DEFAULT_TIMEOUT,
});

// **********************************************
// -- CONVECTIVE OUTLOOK MAP SERVER LAYERS
// **********************************************

const OUTLOOK_MAP_SERVER_LAYERS = Object.freeze({
	Group: {
		day_1_convective: "0",
		day_2_convective: "8",
		day_3_convective: "16",
		day_4_8_convective: "20",
	},
	Feature: {
		day_1_categorical: "1",
		day_1_significant_tornado: "2",
		day_1_probabilistic_tornado: "3",
		day_1_significant_hail: "4",
		day_1_probabilistic_hail: "5",
		day_1_significant_wind: "6",
		day_1_probabilistic_wind: "7",
		day_2_categorical: "9",
		day_2_significant_tornado: "10",
		day_2_probabilistic_tornado: "11",
		day_2_significant_hail: "12",
		day_2_probabilistic_hail: "13",
		day_2_significant_wind: "14",
		day_2_probabilistic_wind: "15",
		day_3_categorical: "17",
		day_3_probabilistic: "18",
		day_3_significant_severe: "19",
		day_4_probabilistic: "21",
		day_5_probabilistic: "22",
		day_6_probabilistic: "23",
		day_7_probabilistic: "24",
		day_8_probabilistic: "25",
	},
});

const fetchMapServerLayerJSON = async (layerId) => {
	return await MAP_SERVER_CLIENT.get(`/${layerId}?f=json`);
};

const fetchMapServerLayerGeoJSON = async (featureLayerId) => {
	return await MAP_SERVER_CLIENT.get(
		`/${featureLayerId}/query?&outFields=*&geometry=true&f=geojson`
	);
};

const getOutlookFeaturesJSON = async (featureLayerIdArray) => {
	return await Promise.all([
		...featureLayerIdArray.map(async (featureLayerId) => {
			const response = await fetchMapServerLayerJSON(featureLayerId);
			return await response.data;
		}),
	]);
};

const getOutlookFeaturesGeoJSON = async (featureLayerIdArray) => {
	return await Promise.all(
		featureLayerIdArray.map(async (featureLayerId) => {
			const response = await fetchMapServerLayerGeoJSON(featureLayerId);
			return await response.data;
		})
	);
};

const fetchSPCConvectiveOutlooks = async () => {
	// 1st index of each day is Convective Outlook Group Layer
	const OUTLOOK_MAP_SERVER_LAYER_IDS = Object.freeze({
		DAY_1: [0, 1, 2, 3, 4, 5, 6, 7],
		DAY_2: [8, 9, 10, 11, 12, 13, 14, 15],
		DAY_3: [16, 17, 18, 19],
		DAY_4_THRU_8: [20, 21, 22, 23, 24, 25],
	});

	const outlookDayKeys = Object.keys(OUTLOOK_MAP_SERVER_LAYER_IDS);
	let outlooks = {
		DAY_1: null,
		DAY_2: null,
		DAY_3: null,
		DAY_4_THRU_8: null,
	};

	for (const day of outlookDayKeys) {
		const outlookDay = OUTLOOK_MAP_SERVER_LAYER_IDS[day];
		const groupLayerId = outlookDay.slice(0, 1);
		const featureLayerIds = outlookDay.slice(1);

		const convective_outlook = await fetchMapServerLayerJSON(groupLayerId);
		const features_json = await getOutlookFeaturesJSON(featureLayerIds);
		const features_geojson = await getOutlookFeaturesGeoJSON(featureLayerIds);

		const outlookData = {
			outlookMeta: convective_outlook.data,
			features: {
				JSON: features_json,
				geoJSON: features_geojson,
			},
		};

		outlooks[day] = await { ...outlookData };
	}

	return await { outlooks };
};

export const useSPCConvectiveOutlooks = () => {
	return useQuery(
		["outlook-map-server-service", "outlooks"],
		async () => await fetchSPCConvectiveOutlooks()
	);
};

// -- Original Outlook Query

export const useConvectiveOutlooksQuery = () => {
	return useQuery(["convective-outlooks", "categorical"], async () => {
		return await Promise.all([
			fetchMapServerLayerGeoJSON(1),
			fetchMapServerLayerGeoJSON(9),
			fetchMapServerLayerGeoJSON(17),
		]);
	});
};

const fetchConvectiveOutlookLegend = async () => {
	const response = await MAP_SERVER_CLIENT.get(URLS.SPC.OTLK_MAP_SERV_LGND);
	const legendLayers = await response?.data.layers;

	return await legendLayers;
};

export const useConvectiveOutlookLegendQuery = () => {
	return useQuery(["outlook-map-server-service", "legend"], async () => {
		return await fetchConvectiveOutlookLegend();
	});
};

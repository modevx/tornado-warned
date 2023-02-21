import * as URLS from "constants/urls";
import axios from "axios";
import { DEFAULT_TIMEOUT } from "constants/services";
import { useQuery } from "@tanstack/react-query";

const MAP_SERVER_CLIENT = axios.create({
	baseURL: URLS.SPC.OTLK_MAP_SERV,
	timeout: DEFAULT_TIMEOUT,
});

const OUTLOOK_GROUP_LAYER_IDS = [0, 8, 16, 20];
const OUTLOOK_FEATURE_LAYER_IDS = Object.freeze({
	1: [1, 2, 3, 4, 5, 6, 7],
	2: [9, 10, 11, 12, 13, 14, 15],
	3: [17, 18, 19],
	4: [21],
	5: [22],
	6: [23],
	7: [24],
	8: [25],
});

const fetchMapServerLayerJSON = async (layerId) => {
	return await MAP_SERVER_CLIENT.get(`/${layerId}?f=json`);
};

const fetchMapServerLayerGeoJSON = async (featureLayerId) => {
	return await MAP_SERVER_CLIENT.get(
		`/${featureLayerId}/query?&outFields=*&geometry=true&f=geojson`
	);
};

const getOutlookFeaturesAsJSON = async (featureLayerIdArray) => {
	return await Promise.all([
		...featureLayerIdArray.map(async (featureLayerId) => {
			const response = await fetchMapServerLayerJSON(featureLayerId);
			return await response.data;
		}),
	]);
};

const getOutlookFeaturesAsGeoJSON = async (featureLayerIdArray) => {
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
		const features_json = await getOutlookFeaturesAsJSON(featureLayerIds);
		const features_geojson = await getOutlookFeaturesAsGeoJSON(featureLayerIds);

		const outlookData = {
			meta: convective_outlook.data,
			features: {
				JSON: features_json,
				geoJSON: features_geojson,
			},
		};

		outlooks[day] = await { ...outlookData };
	}

	return await outlooks;
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

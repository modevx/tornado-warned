import * as URLS from "constants/urls";
import axios from "axios";
import { DEFAULT_TIMEOUT } from "constants/services";
import { useQuery } from "@tanstack/react-query";

const MAP_SERVER_CLIENT = axios.create({
	baseURL: URLS.SPC.OTLK_MAP_SERV,
	timeout: DEFAULT_TIMEOUT,
});

const OUTLOOK_DAY_FEATURE_LAYER_IDS = Object.freeze({
	1: [1, 2, 3, 4, 5, 6, 7],
	2: [9, 10, 11, 12, 13, 14, 15],
	3: [17, 18, 19],
	4: [21],
	5: [22],
	6: [23],
	7: [24],
	8: [25],
});

export const getMapServerLayerJSON = async (layerId) => {
	const response = await MAP_SERVER_CLIENT.get(`/${layerId}?f=json`);
	const {
		data: {
			currentVersion,
			id,
			name,
			type,
			geometryType,
			drawingInfo: {
				renderer: { uniqueValueInfos },
			},
		},
	} = await response;

	return {
		currentVersion,
		id,
		name,
		type,
		geometryType,
		uniqueValueInfos,
	};
};

export const getMapServerFeatureLayerGeoJSON = async (featureLayerId) => {
	const response = await MAP_SERVER_CLIENT.get(
		`/${featureLayerId}/query?&outFields=*&geometry=true&f=geojson`
	);
	return response.data;
};

export const getOutlookDayFeatureLayersJSON = async (featureLayerIds) => {
	return await Promise.all([
		...featureLayerIds.map((featureLayerId) =>
			getMapServerLayerJSON(featureLayerId)
		),
	]);
};

export const getOutlookDayFeatureLayersGeoJSON = async (featureLayerIds) => {
	return await Promise.all([
		...featureLayerIds.map((featureLayerId) =>
			getMapServerFeatureLayerGeoJSON(featureLayerId)
		),
	]);
};

const fetchSPCConvectiveOutlooks = async () => {
	for (const day of outlookDayKeys) {
		const outlookDay = OUTLOOK_MAP_SERVER_LAYER_IDS[day];
		const groupLayerId = outlookDay.slice(0, 1);
		const featureLayerIds = outlookDay.slice(1);

		const convective_outlook = await getMapServerLayerJSON(groupLayerId);
		const features_json = await getOutlookDayFeatureLayersJSON(featureLayerIds);
		const features_geojson = await getOutlookDayFeatureLayersGeoJSON(
			featureLayerIds
		);

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
			getMapServerFeatureLayerGeoJSON(1),
			getMapServerFeatureLayerGeoJSON(9),
			getMapServerFeatureLayerGeoJSON(17),
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

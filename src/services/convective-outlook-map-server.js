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
	GroupLayers: {
		day_1_convective: "0",
		day_2_convective: "8",
		day_3_convective: "16",
		day_4_8_convective: "20",
	},
	FeatureLayers: {
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

// -- Group Layers (Convective Outlook )

const fetchConvectiveOutlookGroupLayerById = async (layerId) => {
	return await MAP_SERVER_CLIENT.get("/${layerId}");
};

const fetchAllConvectiveOutlookGroupLayers = async () => {
	const groupLayerIds = Object.values(OUTLOOK_MAP_SERVER_LAYERS.GroupLayers);

	return await Promise.all(
		groupLayerIds.map((groupLayerId) =>
			fetchConvectiveOutlookGroupLayerById(groupLayerId)
		)
	);
};

// -- Feature Layers

const fetchConvectiveOutlookFeatureLayerById = async (layerId) => {
	return await MAP_SERVER_CLIENT.get(
		`/${layerId}/${URLS.ENDPOINT.SPC.OTLK_GEOMETRY}`
	);
};

const fetchAllConvectiveOutlookFeatureLayers = async () => {
	const featureLayerIds = Object.values(
		OUTLOOK_MAP_SERVER_LAYERS.FeatureLayers
	);

	return await Promise.all(
		featureLayerIds.map((featureLayerId) =>
			fetchConvectiveOutlookFeatureLayerById(featureLayerId)
		)
	);
};

export const useAllConvectiveOutlookLayersQuery = () => {
	return useQuery(
		["convective-outlooks", "all"],
		async () => await fetchAllConvectiveOutlookFeatureLayers()
	);
};

export const useConvectiveOutlooksQuery = () => {
	return useQuery(["convective-outlooks", "categorical"], async () => {
		return await Promise.all([
			fetchConvectiveOutlookFeatureLayerById(1),
			fetchConvectiveOutlookFeatureLayerById(9),
			fetchConvectiveOutlookFeatureLayerById(17),
		]);
	});
};

// **********************************************
// -- CONVECTIVE OUTLOOK LEGEND
// **********************************************

const fetchConvectiveOutlookLegend = async () => {
	return await MAP_SERVER_CLIENT.get(URLS.SPC.OTLK_MAP_SERV_LGND);
};

export const useConvectiveOutlookLegendQuery = () => {
	return useQuery(["convective-outlooks", "legend"], async () => {
		return await fetchConvectiveOutlookLegend();
	});
};

// consider this...
const fetchConvectiveOutlookDataForDay = async (dayNumber) => {
	const outlookDayLayerIdMap = {
		1: [0, 1, 2, 3, 4, 5, 6, 7],
		2: [8, 9, 10, 11, 12, 13, 14, 15],
		3: [16, 17, 18, 19],
		4: [20, 21, 22, 23, 24, 25],
	};

	const outlookLayers = await Promise.all(() => {
		return outlookDayLayerIdMap[dayNumber].map((layerId) =>
			fetchConvectiveOutlookFeatureLayerById(layerId)
		);
	});
};

import * as URLS from "_shared/constants/urls";
import axios from "axios";
import { DEFAULT_TIMEOUT } from "_shared/constants/services";
import { useQuery } from "@tanstack/react-query";

const MAP_SERVER_CLIENT = axios.create({
	baseURL: URLS.SPC.OTLK_MAP_SERV,
	timeout: DEFAULT_TIMEOUT,
});

const fetchMapServerLayerJSON = async (layerId) => {
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

const fetchMapServerLayerGeoJSON = async (featureLayerId) => {
	const response = await MAP_SERVER_CLIENT.get(
		`/${featureLayerId}/query?&outFields=*&geometry=true&f=geojson`
	);
	return response.data;
};

const fetchOutlookLegend = async () => {
	const response = await MAP_SERVER_CLIENT.get(URLS.SPC.OTLK_MAP_SERV_LGND);
	const legendLayers = await response?.data.layers;

	return await legendLayers;
};

export const useCategoricalOutlooksJSON = () => {
	return useQuery(["Outlooks", "Categorical", "JSON"], async () => {
		return await Promise.all([
			...[1, 9, 17].map((layerId) => fetchMapServerLayerJSON(layerId)),
		]);
	});
};

export const useCategoricalOutlooksGeoJSON = () => {
	return useQuery(["Outlooks", "Categorical", "GeoJSON"], async () => {
		return await Promise.all([
			...[1, 9, 17].map((layerId) => fetchMapServerLayerGeoJSON(layerId)),
		]);
	});
};

export const useOutlookLegendQuery = () => {
	return useQuery(["Outlooks", "legend"], async () => {
		return await fetchOutlookLegend();
	});
};

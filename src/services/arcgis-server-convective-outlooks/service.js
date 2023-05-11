import * as URLS from "constants/urls";
import { useQuery } from "@tanstack/react-query";
import { convectiveOutlookHTTPClient } from "./http-client";

const fetchAllLayerInfo = async () => {
	try {
		const response = await convectiveOutlookHTTPClient.get("/layers?f=json");
		// TODO: only return what I use
		return response.data.layers;
	} catch (error) {
		console.log(">> fetchAllLayersAndTables:\n", error);
	}
};

const fetchLayerJSON = async (layerId) => {
	try {
		const response = await convectiveOutlookHTTPClient.get(
			`/${layerId}?f=json`
		);
		return response.data;
	} catch (error) {
		console.log(">> fetchLayerJSON:\n", error);
	}
};

const fetchLayerGeoJSON = async (layerId) => {
	try {
		const response = await convectiveOutlookHTTPClient.get(
			`/${layerId}/query?f=geojson&geometry=true&outfields=*`
		);
		return response.data.features;
	} catch (error) {
		console.log(">> fetchLayerGeoJSON:\n", error);
	}
};

const fetchLegend = async () => {
	try {
		const response = await convectiveOutlookHTTPClient.get("/legend?f=json");
		return response?.data.layers;
	} catch (error) {
		console.log(">> fetchLegendLayers:\n", error);
	}
};

export const useAllLayerInfoQuery = () => {
	return useQuery(["convective outlooks", "all layers & tables", "json"], () =>
		fetchAllLayerInfo()
	);
};

export const useLayerJSONQuery = (layerId) => {
	return useQuery(["convective outlooks", "json"], (layerId) =>
		fetchLayerJSON(layerId)
	);
};

export const useLayerGeoJSONQuery = (layerId) => {
	return useQuery(["convective outlooks", "geojson"], (layerId) =>
		fetchLayerGeoJSON(layerId)
	);
};

export const useAll3CategoricalOutlooks = () => {
	return useQuery(["convective outlooks", "categorical", "geojson"], () => {
		return Promise.all([
			fetchLayerGeoJSON(1),
			fetchLayerGeoJSON(9),
			fetchLayerGeoJSON(17),
		]);
	});
};

export const useLegendQuery = () => {
	return useQuery(["convective outlooks", "legend"], () => {
		return fetchLegend();
	});
};

import * as URLS from "constants/urls";
import { useQuery } from "@tanstack/react-query";
import { convectiveOutlookHTTPClient } from "./http-client";

const fetchAllLayersAndTables = async () => {
	try {
		const response = await convectiveOutlookHTTPClient.get("/layers?f=json");
		return response.data.layers;
	} catch (error) {
		console.log(">> fetchAllConvectiveOutlookLayersAndTables:\n", error);
	}
};

const fetchLayerJSON = async (strLayerId) => {
	try {
		const response = await convectiveOutlookHTTPClient.get(
			`/${strLayerId}?f=json`
		);
		return response.data;
	} catch (error) {
		console.log(">> fetchConvectiveOutlookLayerJSON:\n", error);
	}
};

const fetchLayerGeoJSON = async (strLayerId) => {
	try {
		const response = await convectiveOutlookHTTPClient.get(
			`/${strLayerId}/query?f=geojson&geometry=true&outFields=*`
		);
		return response.data;
	} catch (error) {
		console.log(">> fetchConvectiveOutlookLayerGeoJSON:\n", error);
	}
};

const fetchLegendLayers = async () => {
	try {
		const response = await convectiveOutlookHTTPClient.get("/legend?f=json");
		return response.data.layers;
	} catch (error) {
		console.log(">> fetchConvectiveOutlookLegendLayers:\n", error);
	}
};

export const useLayerJSONQuery = () => {
	return useQuery(["Outlooks", "Categorical", "JSON"], async () => {
		return await Promise.all([
			[1, 9, 17].map((layerId) => fetchLayerJSON(layerId)),
		]);
	});
};

export const useLayerGeoJSONQuery = () => {
	return useQuery(["Outlooks", "Categorical", "GeoJSON"], async () => {
		return await Promise.all([
			...[1, 9, 17].map((layerId) => fetchLayerGeoJSON(layerId)),
		]);
	});
};

export const useLegendLayersQuery = () => {
	return useQuery(["convective outlooks", "legend"], async () => {
		return await fetchLegendLayers();
	});
};

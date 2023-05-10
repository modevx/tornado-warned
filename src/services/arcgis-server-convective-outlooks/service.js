import * as URLS from "constants/urls";
import { useQuery } from "@tanstack/react-query";
import { convectiveOutlookHTTPClient } from "./http-client";

const fetchAllLayersAndTables = async () => {
	try {
		const response = await convectiveOutlookHTTPClient.get("/layers?f=json");
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

const fetchLayerGeoJSON = async () => {
	try {
		const response = await convectiveOutlookHTTPClient.get(
			`/5/query?f=geojson&geometry=true&outFields=*`
		);
		return response.data.features;
	} catch (error) {
		console.log(">> fetchLayerGeoJSON:\n", error);
	}
};

const fetchLegendLayers = async () => {
	try {
		const response = await convectiveOutlookHTTPClient.get("/legend?f=json");
		return response.data.layers;
	} catch (error) {
		console.log(">> fetchLegendLayers:\n", error);
	}
};

export const useAllLayersAndTables = () => {
	return useQuery(["convective outlooks", "all layers & tables", "json"], () =>
		fetchAllLayersAndTables()
	);
};

export const useLayerJSONQuery = (layerId) => {
	return useQuery(["convective outlooks", "json"], (layerId) =>
		fetchLayerJSON(layerId)
	);
};

export const useLayerGeoJSONQuery = () => {
	// console.log(">> layerId: ", layerId);

	return useQuery(["convective outlooks", "geojson"], () =>
		fetchLayerGeoJSON()
	);
};

export const useLegendLayersQuery = () => {
	return useQuery(["convective outlooks", "legend"], () => {
		return fetchLegendLayers();
	});
};

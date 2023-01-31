import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { ENDPOINT, SPC } from "constants/urls";
import { DEFAULT_TIMEOUT } from "constants";

const MAP_SERVER_CLIENT = axios.create({
	baseURL: SPC.outlooks_map_server,
	timeout: DEFAULT_TIMEOUT,
});

const fetchConvectiveOutlookLayerById = async (layerId) => {
	return await MAP_SERVER_CLIENT.get(
		`/${layerId}/${ENDPOINT.SPC.outlook_geometry}`
	);
};

const fetchConvectiveOutlookLegend = async () => {
	return await MAP_SERVER_CLIENT.get(SPC.outlooks_legend);
};

export const useConvectiveOutlooksQuery = () => {
	return useQuery(["convective-outlooks", "days 1, 2 & 3"], async () => {
		return await Promise.all([
			fetchConvectiveOutlookLayerById(1),
			fetchConvectiveOutlookLayerById(9),
			fetchConvectiveOutlookLayerById(17),
		]);
	});
};

export const useConvectiveOutlookLegendQuery = () => {
	return useQuery(["convective-outlooks", "legend"], async () => {
		return await fetchConvectiveOutlookLegend();
	});
};

// const fetchAllOutlookLayers = async () => {
// 	return await MAP_SERVER_CLIENT.get("/layers?f=json");
// };

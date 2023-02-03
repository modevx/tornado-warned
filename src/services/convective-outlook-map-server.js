import * as URLS from "constants/urls";
import axios from "axios";
import { DEFAULT_TIMEOUT } from "constants/services";
import { useQuery } from "@tanstack/react-query";

const MAP_SERVER_CLIENT = axios.create({
	baseURL: URLS.SPC.OTLK_MAP_SERV,
	timeout: DEFAULT_TIMEOUT,
});

const fetchConvectiveOutlookByLayerId = async (layerId) => {
	return await MAP_SERVER_CLIENT.get(
		`/${layerId}/${URLS.ENDPOINT.SPC.OTLK_GEOMETRY}`
	);
};

const fetchConvectiveOutlookLegend = async () => {
	return await MAP_SERVER_CLIENT.get(URLS.SPC.OTLK_MAP_SERV_LGND);
};

export const useConvectiveOutlooksQuery = () => {
	return useQuery(["convective-outlooks", "days 1, 2 & 3"], async () => {
		return await Promise.all([
			fetchConvectiveOutlookByLayerId(1),
			fetchConvectiveOutlookByLayerId(9),
			fetchConvectiveOutlookByLayerId(17),
		]);
	});
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
		outlookDayLayerIdMap[dayNumber].map((layerId) =>
			fetchConvectiveOutlookByLayerId(layerId)
		);
	});
};

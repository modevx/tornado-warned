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

const MAP_SERVER_LAYERS = Object.freeze({
  DAY_1: {
    group: 0,
    feature: [1, 2, 3, 4, 5, 6, 7],
  },
  DAY_2: {
    group: 8,
    feature: [9, 10, 11, 12, 13, 14, 15],
  },
  DAY_3: {
    group: 16,
    feature: [17, 18, 19],
  },
  DAYS_4_THRU_8: {
    group: 20,
    feature: [21, 22, 23, 24, 25],
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

// const fetchSPCConvectiveOutlooks = async () => {
//   const outlookDays = {
//     1: {
//       json: null,
//       geoJson: null,
//     },
//     2: {
//       json: null,
//       geoJson: null,
//     },
//     3: {
//       json: null,
//       geoJson: null,
//     },
//     4: {
//       json: null,
//       geoJson: null,
//     },
//     5: {
//       json: null,
//       geoJson: null,
//     },
//     6: {
//       json: null,
//       geoJson: null,
//     },
//     7: {
//       json: null,
//       geoJson: null,
//     },
//     8: {
//       json: null,
//       geoJson: null,
//     },
//   };

// 	const days = Object.keys(outlookDays)

// 	days.map(day => {
// 		outlookDays[day].json = await
// 	})

// 	for(const day of outlookDays) {
// 		const json = fetchMapServerLayerJSON(day);
// 		const geoJson = fetchMapServerLayerGeoJSON(day);

// 	}
// };

const fetchAllConvectiveOutlookGroupLayers = async () => {
  const groupLayerIds = Object.values(OUTLOOK_MAP_SERVER_LAYERS.GroupLayers);

  return await Promise.all(
    groupLayerIds.map((groupLayerId) => fetchMapServerLayerJSON(groupLayerId))
  );
};

export const useAllConvectiveOutlookGroupLayersQuery = () => {
  return useQuery(
    ["convective-outlooks", "group-layers"],
    async () => await fetchAllConvectiveOutlookGroupLayers()
  );
};

// -- Feature Layers

const fetchAllConvectiveOutlookFeatureLayers = async () => {
  const featureLayerIds = Object.values(
    OUTLOOK_MAP_SERVER_LAYERS.FeatureLayers
  );

  return await Promise.all(
    featureLayerIds.map((featureLayerId) =>
      fetchMapServerLayerGeoJSON(featureLayerId)
    )
  );
};

export const useAllConvectiveOutlookFeatureLayersQuery = () => {
  return useQuery(
    ["convective-outlooks", "feature-layers"],
    async () => await fetchAllConvectiveOutlookFeatureLayers()
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

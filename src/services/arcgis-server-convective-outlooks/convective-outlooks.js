import * as URLS from "constants/urls";
import axios from "axios";
import { DEFAULT_TIMEOUT } from "constants/services";
import { useQuery } from "@tanstack/react-query";

const MAP_SERVER_CLIENT = axios.create({
  baseURL: URLS.STORM_PREDICTION_CENTER.Outlook_MapServer,
  timeout: DEFAULT_TIMEOUT,
});

const OUTLOOK_DAYS = [1, 2, 3, 4, 5, 6, 7, 8];
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

const getMapServerLayerJSON = async (layerId) => {
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

const getMapServerLayerGeoJSON = async (featureLayerId) => {
  const response = await MAP_SERVER_CLIENT.get(
    `/${featureLayerId}/query?&outFields=*&geometry=true&f=geojson`
  );
  return response.data;
};

export const useCategoricalOutlooksJSON = () => {
  return useQuery(
    ["Outlooks", "Categorical", "JSON"],
    async () =>
      await Promise.all([
        [1, 9, 17].map((layerId) => getMapServerLayerJSON(layerId)),
      ])
  );
};

export const useCategoricalOutlooksGeoJSON = () => {
  return useQuery(["Outlooks", "Categorical", "GeoJSON"], async () => {
    return await Promise.all([
      [1, 9, 17].map((layerId) => getMapServerLayerGeoJSON(layerId)),
    ]);
  });
};
// ************* SAVE FOR LATER ***************

const getOutlookDayFeatureLayersJSON = async (featureLayerIds) => {
  return await Promise.all([
    ...featureLayerIds.map((featureLayerId) =>
      getMapServerLayerJSON(featureLayerId)
    ),
  ]);
};

const getOutlookDayFeatureLayersGeoJSON = async (featureLayerIds) => {
  return await Promise.all([
    ...featureLayerIds.map((featureLayerId) =>
      getMapServerLayerGeoJSON(featureLayerId)
    ),
  ]);
};

const getSPCConvectiveOutlooks = async () => {
  const outlooks = {};

  for (const day of OUTLOOK_DAYS) {
    const JSON = await getOutlookDayFeatureLayersJSON(
      OUTLOOK_DAY_FEATURE_LAYER_IDS[day]
    );
    const GeoJSON = await getOutlookDayFeatureLayersGeoJSON(
      OUTLOOK_DAY_FEATURE_LAYER_IDS[day]
    );

    outlooks[day] = await { JSON, GeoJSON };
    // const outlookDay = OUTLOOK_MAP_SERVER_LAYER_IDS[day];
    // const groupLayerId = outlookDay.slice(0, 1);
    // const featureLayerIds = outlookDay.slice(1);

    // const convective_outlook = await getMapServerLayerJSON(groupLayerId);
    // const features_json = await getOutlookDayFeatureLayersJSON(featureLayerIds);
    // const features_geojson = await getOutlookDayFeatureLayersGeoJSON(
    // 	featureLayerIds
    // );

    // const outlookData = {
    // 	meta: convective_outlook.data,
    // 	features: {
    // 		JSON: features_json,
    // 		geoJSON: features_geojson,
    // 	},
    // };

    // outlooks[day] = await { ...outlookData };
  }

  return await outlooks;
};

export const useSPCConvectiveOutlooks = () => {
  return useQuery(
    ["Outlooks", "outlooks"],
    async () => await getSPCConvectiveOutlooks()
  );
};

const fetchOutlookLegend = async () => {
  const response = await MAP_SERVER_CLIENT.get(
    URLS.STORM_PREDICTION_CENTER.Outlook_MapServer_Legend
  );
  const legendLayers = await response?.data.layers;

  return await legendLayers;
};

export const useOutlookLegendQuery = () => {
  return useQuery(["Outlooks", "legend"], async () => {
    return await fetchOutlookLegend();
  });
};

import * as URLS from "constants/urls";
import { useQuery } from "@tanstack/react-query";
import { convectiveOutlookHTTPClient } from "./http-client";

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
  const response = await convectiveOutlookHTTPClient.get(
    `/${featureLayerId}/query?&outFields=*&geometry=true&f=geojson`
  );
  return response.data;
};

const fetchOutlookLegend = async () => {
  const response = await convectiveOutlookHTTPClient.get(
    URLS.STORM_PREDICTION_CENTER.Outlook_MapServer_Legend
  );
  const legendLayers = await response?.data.layers;

  return await legendLayers;
};

export const useCategoricalOutlooksJSON = () => {
  return useQuery(["Outlooks", "Categorical", "JSON"], async () => {
    return await Promise.all([
      [1, 9, 17].map((layerId) => fetchMapServerLayerJSON(layerId)),
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

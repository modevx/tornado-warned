import { useQuery } from "@tanstack/react-query";

import { createHTTPClient } from "services/create-http-client";

const convectiveOutlookHTTPClient = createHTTPClient({
  baseURL:
    "https://mapservices.weather.noaa.gov/vector/rest/services/outlooks/SPC_wx_outlks/MapServer",
});

const fetchMapServerGeoJsonByLayerId = async (layerId) => {
  try {
    const response = await convectiveOutlookHTTPClient.get(
      `/${layerId}/query?f=geojson&geometry=true&outfields=*`
    );
    return response.data.features;
  } catch (error) {
    console.log(">> fetchLayerGeoJSON:\n", error);
  }
};

export const useCategoricalOutlookGeoJsonQuery = (layerId) => {
  return useQuery(
    ["convective outlooks", "categorical", `layer ${layerId}`],
    () => fetchMapServerGeoJsonByLayerId(layerId)
  );
};

export const useCategoricalOutlooks = () => {
  return useQuery(["convective outlooks", "categorical", "geojson"], () => {
    return Promise.all([
      fetchMapServerGeoJsonByLayerId(1),
      fetchMapServerGeoJsonByLayerId(9),
      fetchMapServerGeoJsonByLayerId(17),
    ]);
  });
};

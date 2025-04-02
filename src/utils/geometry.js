import turfRewind from "@turf/rewind";
import * as topojsonClient from "topojson-client";
import { geoAlbers, geoAlbersUsa, geoPath } from "d3";

import AlbersMapTopoJSON from "json/topojson-albers-map.json";

// D3 projections
export const albersProjection = geoAlbers();
export const albersUsaProjection = geoAlbersUsa();

// D3 geoPaths
export const albersGeoPath = geoPath(albersProjection);
export const albersUsaGeoPath = geoPath(albersUsaProjection);

// rewind geoPaths - used for polygons with reverse windings
export const rewindAlbersGeoPath = (geoJsonFeatures) => {
  return albersGeoPath(turfRewind(geoJsonFeatures, { reverse: true }));
};
export const rewindAlbersUsaGeoPath = (geoJsonFeatures) => {
  return albersUsaGeoPath(turfRewind(geoJsonFeatures, { reverse: true }));
};

// map GeoJson features
export const albersCountiesGeoJson = topojsonClient.feature(
  AlbersMapTopoJSON,
  "counties"
);
export const albersStatesGeoJson = topojsonClient.feature(
  AlbersMapTopoJSON,
  "states"
);

export const createWatchAlertGeometry = (alert) => {
  const affectedCountyIds = alert.properties.geocode.SAME;
  const watchGeometry = topojsonClient.merge(
    AlbersMapTopoJSON,
    AlbersMapTopoJSON.objects.counties.geometries.filter(({ id }) => {
      // format topoJson county ids to match NWS 6-digit county ids (SAME code)
      const topoJsonCountyId = id.padStart(6, "0");
      return affectedCountyIds.includes(topoJsonCountyId);
    })
  );
  return watchGeometry;
};

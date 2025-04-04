import turfRewind from "@turf/rewind";
import * as topojsonClient from "topojson-client";
import { geoAlbers, geoAlbersUsa, geoPath } from "d3";
import albersTopojson from "json/topojson-albers-map.json";

export const albersCountiesGeoJson = topojsonClient.feature(
  albersTopojson,
  albersTopojson.objects.counties
);
export const albersStatesGeoJson = topojsonClient.feature(
  albersTopojson,
  albersTopojson.objects.states
);

export const albersProjection = geoAlbers()
  .scale(1300)
  .translate([975 / 2, 610 / 2]);
export const albersUsaProjection = geoAlbersUsa();

export const albersGeoPath = geoPath(albersProjection);
export const albersUsaGeoPath = geoPath(albersUsaProjection);

export const rewindAlbersGeoPath = (geoJsonFeatures) => {
  return albersGeoPath(turfRewind(geoJsonFeatures, { reverse: true }));
};
export const rewindAlbersUsaGeoPath = (geoJsonFeatures) => {
  return albersUsaGeoPath(turfRewind(geoJsonFeatures, { reverse: true }));
};

export const createWatchAlertGeometry = (alert) => {
  const affectedCountyIds = alert.properties.geocode.SAME;
  const watchGeometry = topojsonClient.merge(
    albersTopojson,
    albersTopojson.objects.counties.geometries.filter(({ id }) => {
      // format topoJson county ids to match NWS 6-digit county ids (SAME code)
      const topoJsonCountyId = id.padStart(6, "0");
      return affectedCountyIds.includes(topoJsonCountyId);
    })
  );
  return watchGeometry;
};

import React, { useMemo } from "react";
import * as topojson from "topojson-client";
import turfRewind from "@turf/rewind";
import * as topojsonClient from "topojson-client";
import { geoAlbers, geoAlbersUsa, geoMercator, geoPath } from "d3";
import albersTopojson from "json/topojson-albers-map.json";

export const albersCountiesGeoJson = topojsonClient.feature(albersTopojson, albersTopojson.objects.counties);
export const albersStatesGeoJson = topojsonClient.feature(albersTopojson, albersTopojson.objects.states);
// ? --------------------
export const meshedCounties = topojson.mesh(albersTopojson, albersTopojson.objects.counties);
// ? --------------------

// ! --- NEW PROJECTION / PATH APPROACH

export const createModeProjection = ({ mode, width, height, feature, padding = 40 }) => {
  if (mode === "overview") {
    return geoAlbersUsa()
      .scale(width * 1.25)
      .translate([width / 2, height / 2]);
  }

  if (mode === "detail") {
    return geoMercator().fitExtent(
      [
        [padding, padding],
        [width - padding, height - padding],
      ],
      feature,
    );
  }

  // * [ FALLBACK ]
  return geoAlbersUsa()
    .scale(width * 1.25)
    .translate([width / 2, height / 2]);
};

export const modeRewindGeoPath = (features) => {
  return createGeoPath(projection)(turfRewind(features, { reverse: true }));
};

// ! --- NEW PROJECTION / PATH APPROACH

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
    }),
  );
  return watchGeometry;
};

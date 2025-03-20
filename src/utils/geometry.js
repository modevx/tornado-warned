import turfRewind from "@turf/rewind";
import { geoAlbers, geoPath } from "d3";
import * as topojsonClient from "topojson-client";
import AlbersMapTopoJSON from "json/topojson-albers-map.json";

const albersProjection = geoAlbers();
export const albersGeoPath = geoPath(albersProjection);

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

export const reverseAlbersGeoPath = (geometry) => {
  return albersGeoPath(turfRewind(geometry, { reverse: true }));
};

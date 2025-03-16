import turfRewind from "@turf/rewind";
import { geoAlbers, geoPath } from "d3";
import * as topojsonClient from "topojson-client";
import AlbersMapTopoJSON from "json/topojson-albers-map.json";

const albersProjection = geoAlbers();
export const albersGeoPath = geoPath(albersProjection);

export const createWatchAlertGeometry = (alert) => {
  const affectedCountyIds = parseAffectedCountyIds(alert);
  const watchGeometry = topojsonClient.merge(
    AlbersMapTopoJSON,
    AlbersMapTopoJSON.objects.counties.geometries.filter((geometry) => {
      const countyID = convertTopoJsonCountyIdToNwsID(geometry.id);
      return affectedCountyIds.includes(countyID);
    })
  );

  return watchGeometry;
};

export const reverseAlbersGeoPath = (geometry) => {
  return albersGeoPath(turfRewind(geometry, { reverse: true }));
};

const parseAffectedCountyIds = (alert) => {
  return alert.properties.geocode.SAME;
};

const convertTopoJsonCountyIdToNwsID = (topoJsonID) => `0${topoJsonID}`;

const createAffectedCountiesTopoJsonMap = ({ alert, mapTopoJson }) => {
  const affectedCountyIds = parseAffectedCountyIds(alert);
  const watchGeometry = topojsonClient.merge(
    mapTopoJson,
    mapTopoJson.objects.counties.geometries.filter((geometry) => {
      const countyID = convertTopoJsonCountyIdToNwsID(geometry.id);
      return affectedCountyIds.includes(countyID);
    })
  );

  return watchGeometry;
};

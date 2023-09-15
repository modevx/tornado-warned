import * as topojson from "topojson-client";
import AlbersTopo from "components/_constants/albers-map.topo.json";

export const createWatchPolygon = (alert) => {
  const alertSameCodes = alert.properties.geocode.SAME;
  const watchGeoJSON = topojson.merge(
    AlbersTopo,
    AlbersTopo.objects.counties.geometries.filter((geometry) => {
      const id = `0${geometry.id}`;
      return alertSameCodes.includes(id);
    })
  );

  return watchGeoJSON;
};

import * as topojson from "topojson-client";
import AlbersTopo from "components/_constants/albers-map.topo.json";

export const createWatchPolygon = (alert) => {
  const alertSameCodes = alert.properties.geocode.SAME;
  const watchGeoJSON = topojson.merge(
    AlbersTopo,
    AlbersTopo.objects.counties.geometries.filter(({ id: countyFips }) => {
      // SAME = 0<fips code>
      const countySAME = `0${countyFips}`;
      return alertSameCodes.includes(countySAME);
    })
  );

  return watchGeoJSON;
};

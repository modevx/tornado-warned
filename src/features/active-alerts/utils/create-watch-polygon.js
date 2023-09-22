import * as topojson from "topojson-client";
import AlbersTopo from "components/_constants/albers-map.topo.json";

// creates single watch area polygon by merging filled county features based on affected areas SAME codes
// SAME codes are just fips codes with prepended '0'

export const createWatchPolygon = (alert) => {
  const alertSameCodes = alert.properties.geocode.SAME;
  const watchGeoJSON = topojson.merge(
    AlbersTopo,
    AlbersTopo.objects.counties.geometries.filter(({ id: countyFips }) => {
      const countySAME = `0${countyFips}`;
      return alertSameCodes.includes(countySAME);
    })
  );

  return watchGeoJSON;
};

import * as topojson from "topojson-client";
import { geoAlbers, geoPath } from "d3-geo";

import AlbersTopoJSONMap from "./topoJSON/albers-map.topo.json";

const albersProjection = geoAlbers();
const albersGeoPath = geoPath(albersProjection);

export const USStateMap = ({ children }) => {
  const states = topojson.feature(AlbersTopoJSONMap, "states");

  return (
    <svg viewBox="0 -60 975 610" xmlns="http://www.w3.org/2000/svg">
      <path d={albersGeoPath(states)} stroke="white" fill="#333" />

      {children}
    </svg>
  );
};

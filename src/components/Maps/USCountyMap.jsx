import * as topojson from "topojson-client";

import AlbersTopoJSONMap from "./_constants/albers-topojson-map.json";

const { features: countyFeatures } = topojson.feature(
  AlbersTopoJSONMap,
  "counties"
);

const meshedCountyFeatures = topojson.mesh(
  AlbersTopoJSONMap,
  AlbersTopoJSONMap.objects.counties
  // (a, b) => a !== b
);

// console.log(">> MESHED COUNTY FEATURES >>\n", meshedCountyFeatures);

export const USCountyMap = ({ children, pathGen }) => {
  return (
    <svg viewBox="0 0 975 610" xmlns="http://www.w3.org/2000/svg">
      <CountyFeatures pathGen={pathGen} features={meshedCountyFeatures} />

      {children}
    </svg>
  );
};

const CountyFeatures = ({ pathGen, features }) => {
  return (
    <path
      d={pathGen({ type: "FeatureCollection", features: features })}
      // d={pathGen(meshedCountyFeatures)}
      stroke="white"
      fill="grey"
    />
  );
};

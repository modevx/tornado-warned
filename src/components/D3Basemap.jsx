import React from "react";
import { geoAlbers, geoPath } from "d3-geo";

import * as topojson from "topojson-client";
import AlbersBasemap from "constants/albers-topojson-map";

const projection = geoAlbers();
const pathGen = geoPath(projection);

export const D3Basemap = ({ children }) => {
  const [basemap, setBasemap] = React.useState();
  const aspectRatio = 1.6;
  const svgW = 975;
  const svgH = svgW / aspectRatio;

  React.useEffect(() => {
    const albersMapWithStateLines = topojson.feature(AlbersBasemap, "states");

    setBasemap(albersMapWithStateLines);
  }, []);

  return (
    <svg viewBox={`0 -60 ${svgW} ${svgH}`} xmlns="http://www.w3.org/2000/svg">
      {basemap &&
        basemap.features.map((feature) => {
          return (
            <path
              key={feature.properties.name}
              d={pathGen(feature)}
              stroke="white"
            />
          );
        })}
      {children}
    </svg>
  );
};

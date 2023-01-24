import React from "react";
import { geoAlbers, geoPath } from "d3-geo";
import * as topojson from "topojson-client";
import AlbersBasemap from "constants/albers-topojson-map";
import { LinearGradient } from "./LinearGradient";

const projection = geoAlbers();
const pathGen = geoPath(projection);

export const Basemap = ({ children }) => {
  const [basemap, setBasemap] = React.useState();
  const aspectRatio = 1.6;
  // const svgW = 850;
  const svgW = 2000;
  const svgH = svgW / aspectRatio;

  React.useEffect(() => {
    const albersMapWithStateLines = topojson.feature(AlbersBasemap, "states");

    setBasemap(albersMapWithStateLines);
  }, []);

  return (
    <svg viewBox="0 0 100% 100%" xmlns="http://www.w3.org/2000/svg">
      {/* <svg viewBox={`0 0 ${svgW} ${svgH}`} xmlns="http://www.w3.org/2000/svg"> */}
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

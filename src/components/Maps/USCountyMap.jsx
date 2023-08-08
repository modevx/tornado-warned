import React from "react";
import * as topojson from "topojson-client";
import rewind from "@turf/rewind";

import AlbersTopoJSONMap from "./_constants/albers-topojson-map.json";

// TODO: topojson.mesh() polygons dont render right

const counties = topojson.feature(AlbersTopoJSONMap, "counties");
const states = topojson.feature(AlbersTopoJSONMap, "states");

export const USCountyMap = ({ children, pathGen }) => {
  return (
    <svg viewBox="0 0 975 610" xmlns="http://www.w3.org/2000/svg">
      <CountyFeatures features={counties} pathGen={pathGen} />
      <StateFeatures features={states} pathGen={pathGen} />
      {children}
      {/* <CountyLabels collection={counties} pathGen={pathGen} /> */}
    </svg>
  );
};

const CountyFeatures = ({ features, pathGen }) => {
  return (
    <path d={pathGen(features)} stroke="white" fill="grey" strokeWidth={0.25} />
  );
};
const StateFeatures = ({ features, pathGen }) => {
  return (
    <path
      d={pathGen(features)}
      stroke="white"
      fill="transparent"
      strokeWidth={1}
    />
  );
};

const CountyLabels = ({ collection, pathGen }) => {
  const { features } = collection;

  return (
    <g>
      {features.map((feature) => {
        const centroid = pathGen.centroid(feature);
        const {
          id,
          properties: { name },
        } = feature;

        return (
          <g key={`${id}`}>
            <text
              x={centroid[0]}
              y={centroid[1]}
              fontSize="35"
              fill="white"
              textAnchor="middle"
            >
              {name}
            </text>
          </g>
        );
      })}
    </g>
  );
};

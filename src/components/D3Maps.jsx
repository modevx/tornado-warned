import { useEffect, useRef } from "react";
import * as TopoJSONClient from "topojson-client";
import {
  albersGeoPath,
  albersUsaGeoPath,
  albersCountiesGeoJson,
  albersStatesGeoJson,
} from "utils/geometry";
import albersTopoJson from "json/topojson-albers-map.json";

const Basemap = ({ children, features, pathGen }) => {
  return (
    <svg viewBox="0 -60 975 610" xmlns="http://www.w3.org/2000/svg">
      <path d={pathGen(features)} stroke="white" fill="grey" />

      {children}
    </svg>
  );
};

// OG map components

export const USCountyMap = ({ children, pathGen }) => {
  return (
    <svg viewBox="0 0 975 610" xmlns="http://www.w3.org/2000/svg">
      <CountyFeatures pathGen={pathGen} />

      {children}
    </svg>
  );
};

export const USStateMap = ({ children, pathGen }) => {
  const states = TopoJSONClient.feature(albersTopoJson, "states");

  // if (states) console.log("states >>\n", states);

  return (
    <svg viewBox="0 -60 975 610" xmlns="http://www.w3.org/2000/svg">
      <path d={albersGeoPath(states)} stroke="white" fill="grey" />

      {children}
    </svg>
  );
};

export const CanvasMap = ({ children, mapFeatures, pathGen }) => {
  const canvasRef = useRef(null);
  // const canvas = canvasRef.current;
  // const context = canvas.getContext("2d");
  const width = 975;
  const height = 610;

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const context = canvas.getContext("2d");

  //   // const projection = d3.geoAlbersUsa();
  //   // .scale(1300)
  //   // .translate([width / 2, height / 2]);
  //   const canvasPathGen = pathGen.context(context);
  //   context.clearRect(0, 0, width, height);
  //   context.fillStyle = "grey";
  //   context.strokeStyle = "white";
  //   context.lineWidth = 1;

  //   context.beginPath();
  //   canvasPathGen(mapFeatures);
  //   context.fill();
  //   context.stroke();
  // }, []);
  if (canvasRef.current) {
    const context = canvasRef.current.getContext("2d");
    const canvasPathGen = pathGen.context(context);
    context.clearRect(0, 0, width, height);
    context.fillStyle = "grey";
    context.strokeStyle = "white";
    context.lineWidth = 1;

    context.beginPath();
    canvasPathGen(mapFeatures);
    context.fill();
    context.stroke();
  }

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{ width: "100%", height: "100%", zIndex: 1 }}
      />
      <svg
        viewBox="0 0 975 610"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 w-full h-full z-10"
      >
        {children}
      </svg>
    </div>
  );
};

// SUB-COMPONENTS
const CountyFeatures = ({ pathGen }) => {
  const { features: countyFeatures } = TopoJSONClient.feature(
    albersTopoJson,
    "counties"
  );

  return (
    <path
      d={pathGen({ type: "FeatureCollection", features: countyFeatures })}
      // d={pathGen(countyFeatures)}
      stroke="white"
      fill="grey"
    />
  );
};

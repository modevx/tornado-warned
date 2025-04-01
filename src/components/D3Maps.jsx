import { useEffect, useRef } from "react";
import { albersGeoPath } from "utils/geometry";
import * as TopoJSONClient from "topojson-client";
import AlbersTopoJSONMap from "json/topojson-albers-map.json";

export const USCountyMap = ({ children, pathGen }) => {
  return (
    <svg viewBox="0 0 975 610" xmlns="http://www.w3.org/2000/svg">
      <CountyFeatures pathGen={pathGen} />

      {children}
    </svg>
  );
};

export const USStateMap = ({ children, pathGen = albersGeoPath }) => {
  const states = TopoJSONClient.feature(AlbersTopoJSONMap, "states");

  // if (states) console.log("states >>\n", states);

  return (
    <svg viewBox="0 -60 975 610" xmlns="http://www.w3.org/2000/svg">
      <path d={pathGen(states)} stroke="white" fill="grey" />

      {children}
    </svg>
  );
};

export const CanvasMap = ({ children, mapFeatures, pathGen }) => {
  const canvasRef = useRef(null);
  const width = 975;
  const height = 610;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // const projection = d3.geoAlbersUsa();
    // .scale(1300)
    // .translate([width / 2, height / 2]);
    const canvasPathGen = pathGen.context(context);
    // context.clearRect(0, 0, width, height);
    context.fillStyle = "grey";
    context.strokeStyle = "white";
    context.lineWidth = 1;

    context.beginPath();
    canvasPathGen(mapFeatures);
    context.fill();
    context.stroke();
  });

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
    AlbersTopoJSONMap,
    "counties"
  );

  return (
    <path
      d={pathGen({ type: "FeatureCollection", features: countyFeatures })}
      stroke="white"
      fill="grey"
    />
  );
};
const SvgText = ({ message }) => {
  return (
    <text x={350} y={250} fill="red" className="text-3xl font-bold">
      {message}
    </text>
  );
};

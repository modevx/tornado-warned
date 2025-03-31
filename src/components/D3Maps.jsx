import { useEffect, useRef } from "react";
import { albersGeoPath } from "utils/geometry";
import * as TopoJSONClient from "topojson-client";
import AlbersTopoJSONMap from "json/topojson-albers-map.json";
import {
  albersNation as nation,
  albersStatesMeshed as states,
  albersCountiesMeshed as counties,
  countyWarningAreasMeshed as countyWarningAreas,
  publicForecastZonesMeshed as publicForecastZones,
} from "constants/map-features";

const meshedCountyFeatures = TopoJSONClient.mesh(
  AlbersTopoJSONMap,
  AlbersTopoJSONMap.objects.counties
  // (a, b) => a !== b
);

export const Basemap = ({
  pathGen = pathGenerator,
  showStates = true,
  showCounties = false,
  showCWAs = false,
  showPFZs = false,
  children,
}) => {
  return (
    <svg viewBox="0 -60 975 610" xmlns="http://www.w3.org/2000/svg">
      <path
        d={albersGeoPath(nation)}
        strokeWidth={0.5}
        stroke="white"
        fill="black"
      />
      <MapFeatures
        isVisible={showStates}
        pathGen={pathGen}
        features={states}
        strokeWidth={0.25}
      />
      <MapFeatures
        isVisible={showCounties}
        pathGen={pathGen}
        features={counties}
        strokeWidth={0.25}
      />
      <MapFeatures
        isVisible={showCWAs}
        pathGen={pathGen}
        features={countyWarningAreas}
        strokeWidth={0.5}
      />
      <MapFeatures
        isVisible={showPFZs}
        pathGen={pathGen}
        features={publicForecastZones}
        strokeWidth={0.5}
      />
      {children}
    </svg>
  );
};
export const USCountyMap = ({ children, pathGen }) => {
  return (
    <svg viewBox="0 0 975 610" xmlns="http://www.w3.org/2000/svg">
      <CountyFeatures pathGen={pathGen} />

      {children}
    </svg>
  );
};
export const USMapLoading = ({ loadingMessage }) => {
  return (
    <USStateMap>
      <text x={350} y={250} fill="red" className="text-3xl font-bold">
        {loadingMessage}
      </text>
    </USStateMap>
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
export const AlbersUsaStateMapCanvas = ({ children }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const width = 975;
    const height = 610;

    // Set up projection
    const projection = d3.geoAlbersUsa();
    // .scale(1300)
    // .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection).context(context);

    const states = topojsonClient.feature(albersTopoJson, "states");

    context.clearRect(0, 0, width, height);

    // Draw states
    context.fillStyle = "grey";
    context.strokeStyle = "white";
    context.lineWidth = 1;

    states.features.forEach((feature) => {
      context.beginPath();
      path(feature);
      context.fill();
      context.stroke();
    });
  }, []);

  return (
    <div className="w-full h-full">
      <canvas
        ref={canvasRef}
        width={975}
        height={610}
        style={{ width: "100%", height: "100%" }}
      />
      {children}
    </div>
  );
};

export const ConusMapCanvas = ({ children, mapFeatures, pathGen }) => {
  const canvasRef = useRef(null);
  const width = 975;
  const height = 610;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // const projection = d3.geoAlbersUsa();
    // .scale(1300)
    // .translate([width / 2, height / 2]);
    // const path = d3.geoPath().projection(projection).context(context);
    // const states = topojsonClient.feature(albersTopoJson, "states");
    const canvasPathGen = pathGen.context(context);

    // context.clearRect(0, 0, width, height);
    context.fillStyle = "grey";
    context.strokeStyle = "white";
    context.lineWidth = 1;

    mapFeatures.features.forEach((feature) => {
      context.beginPath();
      canvasPathGen(feature);
      context.fill();
      context.stroke();
    });
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
const MapFeatures = ({ pathGen, features, isVisible, ...pathArgs }) => {
  return (
    <>
      {isVisible && (
        <path
          d={albersGeoPath(features)}
          {...pathArgs}
          stroke="white"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
        />
      )}
    </>
  );
};

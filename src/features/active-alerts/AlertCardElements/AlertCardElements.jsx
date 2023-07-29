import * as d3 from "d3";
import TurfRewind from "@turf/rewind";
import * as topojson from "topojson-client";
import US_CITY_POINTS from "components/USMap/_constants/us-city-points.geo.json";
import MAJOR_US_CITIES from "components/USMap/_constants/major-us-cities.geo.json";
import AlbersTopoJSONMap from "components/USMap/_constants/albers-topojson-map.json";

import { useState } from "react";
import { Button, Card, Modal } from "react-daisyui";
import { AiFillCloseCircle } from "react-icons/ai";

import { DayJSDateTime } from "components";
import { BiCreditCard } from "react-icons/bi";
import { TbToiletPaper } from "react-icons/tb";
import { createImpactedAreasMap } from "utils";
import { IoBaseballOutline } from "react-icons/io5";
import {
  GiBinoculars,
  GiRadarSweep,
  GiGolfTee,
  GiMarbles,
} from "react-icons/gi";

export const AlertMessageButtons = ({ description, instruction }) => {
  return (
    <div className="flex">
      <AlertMessageModal messageType="Description" message={description} />
      <div className="mx-2"></div>
      <AlertMessageModal messageType="Instruction" message={instruction} />
    </div>
  );
};

export const AlertMessageModal = ({ messageType, message }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleModalOpen = () => {
    setOpen((isOpen) => !isOpen);
  };

  return (
    <div className="font-sans flex-1">
      <Button onClick={toggleModalOpen} className="w-full">
        {messageType}{" "}
      </Button>
      <Modal open={isOpen}>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Actions>
          <Button
            onClick={toggleModalOpen}
            className="bg-transparent hover:bg-transparent border-none"
          >
            <span className="mr-2">close</span>
            <AiFillCloseCircle
              size={25}
              color="white"
              className="hover:fill-red-500"
            />
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

//TODO: create AlertPolygonMap using OpenLayers

export const AlertPolygon = ({ alertFeature }) => {
  const {
    id,
    type,
    geometry: alertGeoJSON,
    properties: { event },
  } = alertFeature;

  let alertPolygonFill =
    event === "Tornado Warning"
      ? "red"
      : event === "Tornado Watch"
      ? "yellow"
      : event === "Severe Thunderstorm Warning"
      ? "orange"
      : "green";

  const { features: countyFeatures } = topojson.feature(
    AlbersTopoJSONMap,
    "counties"
  );

  // if (countyFeatures) console.log("STATE FEATURES >>\n", countyFeatures);

  // * // extent = [[left, top],[right, bottom]]
  function convertBoundsToExtent(bounds) {
    const [x0, y0] = bounds[0]; // min corner
    const [x1, y1] = bounds[1]; // max corner

    // returns flipped min-y & max-y VALUES
    return [
      [x0, y1],
      [x1, y0],
    ];
  }

  // -- EXTENT CONSTRAINT using PLANAR BOUNDS
  const projection = d3.geoAlbers();
  const projectionPath = d3.geoPath(projection);
  // const projectedBB = projectionPath.bounds(alertFeature);
  const projectedBB = d3.geoPath().bounds(alertFeature);
  const planarExtent = convertBoundsToExtent(projectedBB);
  const planarPath = d3.geoPath(
    d3.geoAlbers().fitExtent(projectedBB, alertFeature)
  );
  // console.log("PLANAR BOUNDS >>\n", projectedBB);
  // console.log("PLANAR EXTENT >>\n", planarExtent);

  // -- EXTENT CONSTRAINT using GEO BOUNDS
  const geoBB = d3.geoBounds(alertFeature);
  const geoExtent = convertBoundsToExtent(geoBB);
  const geoPath = d3.geoPath(d3.geoAlbers().fitExtent(geoExtent, alertFeature));
  // console.log("GEO BOUNDS >>\n", geoBB);
  // console.log("GEO EXTENT >>\n", geoExtent);

  // -- MANUALLY-SET EXTENT-CONSTRAINED ALBERS GEO-PATH
  // TODO /////////////////////////////////////
  // TODO: dynamically set .fitExtent values
  // TODO /////////////////////////////////////
  const albersProjection = d3.geoAlbers().fitExtent(
    [
      [150, 100],
      [825, 510],
    ],
    alertFeature
  );
  const manualPath = d3.geoPath(albersProjection);

  const filteredCities = US_CITY_POINTS.features.filter((feature) => {
    const {
      properties: { population },
    } = feature;

    return population > 90000;
  });

  return (
    <div className="bg-black rounded-lg p-2">
      <svg
        viewBox="0 0 975 610"
        xmlns="http://www.w3.org/2000/svg"
        className="rounded-lg"
      >
        {/* -- COUNTIES */}
        <g>
          {countyFeatures.map((feature) => {
            const { id } = feature;

            return (
              <g key={`${id}`}>
                <path
                  // d={planarPath(feature)}
                  // d={geoPath(feature)}
                  d={manualPath(feature)}
                  stroke="white"
                  fill="grey"
                />
              </g>
            );
          })}
        </g>

        {/* -- ALERT POLYGON */}
        <g>
          <path
            // d={planarPath(TurfRewind(alertFeature, { reverse: true }))}
            // d={geoPath(TurfRewind(alertFeature, { reverse: true }))}
            d={manualPath(TurfRewind(alertFeature, { reverse: true }))}
            fill={alertPolygonFill}
            stroke={`dark${alertPolygonFill}`}
            strokeWidth={10}
            opacity={0.7}
          />
        </g>

        {/* -- COUNTY LABELS */}
        <g>
          {countyFeatures.map((feature) => {
            const centroid = manualPath.centroid(feature);
            const {
              id,
              properties: { name },
            } = feature;

            return (
              <g key={`${id}`}>
                <text
                  x={centroid[0]}
                  y={centroid[1]}
                  fontSize="45"
                  fill="white"
                  textAnchor="middle"
                >
                  {name}
                </text>
              </g>
            );
          })}
        </g>

        {/* -- CITIES */}
        {/* <g>
          {filteredCities.map((feature) => {
            const centroid = manualPath.centroid(feature);
            const { city, state } = feature.properties;

            return (
              <g key={`${city}-${state}`}>
                <path
                  d={manualPath(feature)}
                  stroke={`dark${alertPolygonFill}`}
                  fill="white"
                  strokeWidth={20}
                  spacing={10}
                />
                <text
                  x={centroid[0]}
                  y={centroid[1]}
                  fontSize="45"
                  fill="white"
                  textAnchor="start"
                >
                  {city}
                </text>
              </g>
            );
          })}
        </g> */}
      </svg>
    </div>
  );
};

export const Body = ({ children }) => {
  const { Body } = Card;

  return <Body className="p-0">{children}</Body>;
};

export const ExpirationTime = ({ expiresTime }) => {
  return (
    <div className="text-xs flex flex-col">
      <span>Expires:</span>
      {expiresTime ? (
        <DayJSDateTime utcDate={expiresTime} format="LT" />
      ) : (
        "Unknown"
      )}
    </div>
  );
};

export const ImpactedAreas = ({ areaDesc }) => {
  let impactedAreasMap;
  let impactedAreasMapEntries;

  if (areaDesc?.length) {
    impactedAreasMap = createImpactedAreasMap(areaDesc);
    impactedAreasMapEntries = Array.from(impactedAreasMap.entries());
  }

  return (
    <div className="bg-black rounded-md p-2 mb-2">
      {impactedAreasMapEntries
        ? impactedAreasMapEntries.map(([state, areas]) => {
            const joinedAreaDescStr = areas.join(", ");

            {
              /* const stateName = STATES_MAP[state]; */
            }

            return (
              <div key={state}>
                <h4 className="text-md font-bold mb-2 uppercase">
                  {/* {stateName} */}
                </h4>
                <p className="text-sm mb-2">{joinedAreaDescStr}</p>
              </div>
            );
          })
        : "NWS Error: Impacted areas not available at this time..."}
    </div>
  );
};

export const MaxHailSize = ({ maxHailSize }) => {
  //TODO: check for empty maxHailSize [] or null values
  let SizeIcon;
  const maxSizeFloat = parseFloat(maxHailSize[0].split(" ")[2]);

  // console.log("maxSizeFloat\n", maxSizeFloat);

  if (maxSizeFloat >= 4) {
    SizeIcon = TbToiletPaper;
  } else if (maxSizeFloat >= 3) {
    SizeIcon = BiCreditCard;
  } else if (maxSizeFloat >= 2.75) {
    SizeIcon = IoBaseballOutline;
  } else if (maxSizeFloat >= 1.75) {
    SizeIcon = GiGolfTee;
  } else {
    // .5
    SizeIcon = GiMarbles;
  }

  return (
    <span className="bg-black rounded-md p-2">
      <span className="text-sm ">MAX HAIL SIZE</span>
      <div className="flex justify-center mt-2">
        {<SizeIcon size={40} /> ?? "NA"}
      </div>
    </span>
  );
};

export const SenderName = ({ senderName }) => {
  const wfoOffice =
    senderName?.replace("NWS ", "") ?? "National Weather Service";

  return (
    <div className="flex flex-col">
      {/* <span className="text-sm">NWS Office:</span> */}
      <span>{wfoOffice}</span>
    </div>
  );
};

export const Title = ({ children }) => {
  const { Title } = Card;

  return (
    <Title className="bg-black rounded-md p-2 mb-2 flex justify-between">
      {children}
    </Title>
  );
};

export const TornadoDetection = ({ tornadoDetection }) => {
  let DetectionIcon =
    tornadoDetection[0] === "OBSERVED" ? GiBinoculars : GiRadarSweep;

  return (
    <div className="bg-black rounded-md p-2">
      <span className="text-sm ">DETECTION</span>
      <div className="flex justify-center mt-2">
        <DetectionIcon size={40} />
      </div>
    </div>
  );
};

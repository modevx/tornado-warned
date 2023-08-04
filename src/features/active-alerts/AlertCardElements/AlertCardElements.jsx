import * as d3 from "d3";
import NextImage from "next/image";
import TurfRewind from "@turf/rewind";
import * as topojson from "topojson-client";
import AlbersTopoJSONMap from "components/USMap/_constants/albers-topojson-map.json";

import { useState } from "react";
import { Button, Card, Modal } from "react-daisyui";
import { AiFillCloseCircle } from "react-icons/ai";

import { STATES_MAP } from "constants";
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

// TODO /////////////////////////////////////
// TODO: optimize polygon rendering
// TODO /////////////////////////////////////
export const AlertPolygonMap = ({ alertFeature }) => {
  const {
    properties: { event },
  } = alertFeature;
  let polygonColor =
    event === "Tornado Warning"
      ? "red"
      : event === "Tornado Watch"
      ? "yellow"
      : event === "Severe Thunderstorm Warning"
      ? "orange"
      : "green";
  const albersFitExtent = d3.geoAlbers().fitExtent(
    [
      [150, 100],
      [825, 510],
    ],
    alertFeature
  );
  const albersGeoPath = d3.geoPath(albersFitExtent);
  const { features: countyFeatures } = topojson.feature(
    AlbersTopoJSONMap,
    "counties"
  );

  console.log("ALERT FEATURE BOUNDS\n", albersFitExtent);

  return (
    <div className="bg-black rounded-lg p-2">
      <svg
        viewBox="0 0 975 610"
        xmlns="http://www.w3.org/2000/svg"
        className="rounded-lg"
      >
        <AlertCountyFeatures
          features={countyFeatures}
          geoPath={albersGeoPath}
        />
        <AlertPolygon
          feature={alertFeature}
          color={polygonColor}
          geoPath={albersGeoPath}
          winding={TurfRewind}
        />
        <AlertCountyLabels features={countyFeatures} geoPath={albersGeoPath} />
      </svg>
    </div>
  );
};

const AlertCountyFeatures = ({ features, geoPath }) => {
  return (
    <g>
      {features.map((feature) => {
        const { id } = feature;

        return (
          <g key={`${id}`}>
            <path d={geoPath(feature)} stroke="white" fill="grey" />
          </g>
        );
      })}
    </g>
  );
};

const AlertCountyLabels = ({ features, geoPath }) => {
  return (
    <g>
      {features.map((feature) => {
        const centroid = geoPath.centroid(feature);
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

const AlertPolygon = ({ feature, color, geoPath, winding }) => {
  return (
    <g>
      <path
        d={geoPath(winding(feature, { reverse: true }))}
        fill={color}
        stroke={`dark${color}`}
        strokeWidth={10}
        opacity={0.7}
      />
    </g>
  );
};

export const Body = ({ children }) => {
  const { Body } = Card;

  return <Body className="p-0">{children}</Body>;
};

export const ExpirationTime = ({ expiresTime }) => {
  return (
    <div className="text-sm flex justify-between bg-black rounded-md p-2 ">
      <span className="mr-3">Expires:</span>
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
  const maxSizeFloat = maxHailSize[0].split(" ")[2];

  return (
    <span className="flex justify-between items-center bg-black rounded-md p-2 text-sm">
      <span className="text-sm ">Max Hail Size:</span>
      <span className="ml-3">{`${maxSizeFloat}"`}</span>
    </span>
  );
};

// ! -- where are the standard card styles coming from for SenderName sub-component??
export const SenderName = ({ senderName }) => {
  const wfoOffice =
    senderName?.replace("NWS ", "") ?? "National Weather Service";

  return (
    <div className="flex items-center">
      <NextImage src="/images/nws-logo.png" height={30} width={30} />
      <span className="ml-3">{wfoOffice}</span>
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
  return (
    <div className="flex justify-between items-center bg-black rounded-md p-2">
      <span className="text-sm">Tornado Detection:</span>
      <span className="text-sm">{tornadoDetection?.[0] || "N/A"}</span>
    </div>
  );
};

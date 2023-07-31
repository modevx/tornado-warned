import * as d3 from "d3";
import TurfRewind from "@turf/rewind";
import * as topojson from "topojson-client";
import AlbersTopoJSONMap from "components/USMap/_constants/albers-topojson-map.json";

import { useCallback, useMemo, useState } from "react";
import { STATES_MAP } from "constants";
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

// TODO /////////////////////////////////////
// TODO: optimize polygon rendering (~260ms per alert)
// TODO /////////////////////////////////////
export const AlertPolygonMap = ({ alertFeature }) => {
  const {
    properties: { event },
  } = alertFeature;

  // TODO: "mesh" county features to optimize renderinmg
  const { features: countyFeatures } = topojson.feature(
    AlbersTopoJSONMap,
    "counties"
  );
  const { features: meshedCounties } = topojson.feature(
    AlbersTopoJSONMap,
    AlbersTopoJSONMap.objects.counties,
    function (a, b) {
      return a !== b;
    }
  );

  // TODO: optimize
  if (meshedCounties) {
    // console.clear();
    // console.log(">> MESHED COUNTY FEATURES >>\n", meshedCounties);
  }

  const albersFitExtent = d3.geoAlbers().fitExtent(
    [
      [150, 100],
      [825, 510],
    ],
    alertFeature
  );
  const albersGeoPath = d3.geoPath(albersFitExtent);

  let polygonColor =
    event === "Tornado Warning"
      ? "red"
      : event === "Tornado Watch"
      ? "yellow"
      : event === "Severe Thunderstorm Warning"
      ? "orange"
      : "green";

  return (
    <div className="bg-black rounded-lg p-2">
      <svg
        viewBox="0 0 975 610"
        xmlns="http://www.w3.org/2000/svg"
        className="rounded-lg"
      >
        <AlertCountyFeatures
          features={countyFeatures}
          // features={meshedCounties}
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

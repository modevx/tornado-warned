import React from "react";
import rewind from "@turf/rewind";
import { geoAlbers, geoPath } from "d3-geo";
import dayjs from "dayjs";
import dayJSlocFormat from "dayjs/plugin/localizedFormat";

import * as ICONS from "constants/icons";
import { D3Basemap } from "components";
import { useCategoricalOutlooksGeoJSON } from "services/arcgis-server-convective-outlooks/service";

dayjs.extend(dayJSlocFormat);

// (1-MRGL-dark green, 2-SLGT-yellow, 3-ENH-orange, 4-MDT-red, and 5-HIGH-magenta
const dnMap = {
  2: {
    label: "storm",
    description: "> 10% chance of thunderstorms",
    abbr: "tstm",
    activeColor: "bg-[hsl(120,60%,30%)]",
    fill: "hsl(120,60%,30%)",
    stroke: "hsl(120,70%,30%)",
    icon: ICONS.IoRainy,
  },
  3: {
    label: "marginal",
    description: "scattered severe storms",
    abbr: "mrgl",
    activeColor: "bg-[hsl(120,100%,50%)]",
    fill: "hsl(120,100%,50%)",
    stroke: "hsl(120,100%,50%)",
    icon: ICONS.IoThunderstorm,
  },
  4: {
    label: "slight",
    description: "organized severe storms expected",
    abbr: "slgt",
    activeColor: "bg-[hsl(60,100%,50%)]",
    fill: "hsl(60,100%,30%)",
    stroke: "hsl(60,100%,50%)",
    icon: ICONS.IoWarningOutline,
  },
  5: {
    label: "enhanced",
    description: "concentrated, severe storms.",
    abbr: "enh",
    activeColor: "bg-[hsl(30,100%,50%)]",
    fill: "hsl(30,100%,30%)",
    stroke: "hsl(30,100%,50%)",
    icon: ICONS.GiDamagedHouse,
  },
  6: {
    label: "moderate",
    description:
      "widespread severe weather with multiple tornadoes and/or intense storms.",
    abbr: "mdt",
    activeColor: "bg-[hsl(0,100%,50%)]",
    fill: "hsl(0,100%,30%)",
    stroke: "hsl(0,100%,50%)",
    icon: ICONS.BsTornado,
  },
  8: {
    label: "high",
    description:
      "severe weather outbreak with intense tornadoes or a long-lived derecho system.",
    abbr: "high",
    activeColor: "bg-[hsl(300,100%,30%)]",
    fill: "hsl(300,100%,30%)",
    stroke: "hsl(300,100%,50%)",
    icon: ICONS.IoSkull,
  },
  10: {
    label: "significant",
    description:
      "severe weather outbreak with intense tornadoes or a long-lived derecho system.",
    abbr: "high",
    activeColor: "bg-[hsl(300,100%,30%)]",
    fill: "hsl(300,100%,30%)",
    stroke: "hsl(300,100%,50%)",
    icon: ICONS.IoSkull,
  },
};
const projection = geoAlbers();
const pathGen = geoPath(projection);

export const ConvectiveOutlookMaps = () => {
  const { data: outlookGeoJSON, error: outlookGeoJSONError } =
    useCategoricalOutlooksGeoJSON();

  return (
    <>
      {outlookGeoJSON &&
        outlookGeoJSON.map((featureCollection, index) => {
          return (
            <D3Basemap key={`outlookDay${index + 1}`}>
              <GeoJsonSVGPathGroup featureCollectionOBJ={featureCollection} />
            </D3Basemap>
          );
        })}
    </>
  );
};

const GeoJsonSVGPathGroup = ({ featureCollectionOBJ, setState }) => {
  return (
    <g>
      {featureCollectionOBJ.features.map((feature, index) => {
        const {
          properties: { dn, valid, expire, idp_source },
        } = feature;
        const fLabel = dnMap[dn]?.label;

        return (
          <path
            d={pathGen(rewind(feature, { reverse: true }))}
            key={`${idp_source}-${dn}`}
            fill={dnMap[dn]?.fill}
            stroke={dnMap[dn]?.stroke}
            fillOpacity={0.5}
            strokeWidth={1} // `${dnMap[dn].label}`
          />
        );
      })}
    </g>
  );
};

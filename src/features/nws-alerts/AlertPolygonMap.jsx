import React from "react";
import dayjs from "dayjs";
import LF from "dayjs/plugin/localizedFormat";

import { D3Basemap } from "components";
import {
  ALERT_EVENTS,
  useFakeTornadoWarnings,
  useFakeTornadoWatches,
  useTornadoWarnings,
  useTornadoWatches,
} from "services/nws-api-web-service";
import { AlertPolygonGroup } from "./AlertPolygonGroup";

dayjs.extend(LF);

const alertColorMap = {
  2: {
    label: "storm",
    description: "> 10% chance of thunderstorms",
    abbr: "tstm",
    activeColor: "bg-[hsl(120,60%,30%)]",
    fill: "hsl(120,60%,30%)",
    stroke: "hsl(120,70%,30%)",
  },
  3: {
    label: "marginal",
    description: "scattered severe storms",
    abbr: "mrgl",
    activeColor: "bg-[hsl(120,100%,50%)]",
    fill: "hsl(120,100%,50%)",
    stroke: "hsl(120,100%,50%)",
  },
  4: {
    label: "slight",
    description: "organized severe storms expected",
    abbr: "slgt",
    activeColor: "bg-[hsl(60,100%,50%)]",
    fill: "hsl(60,100%,30%)",
    stroke: "hsl(60,100%,50%)",
  },
  5: {
    label: "enhanced",
    description: "concentrated, severe storms.",
    abbr: "enh",
    activeColor: "bg-[hsl(30,100%,50%)]",
    fill: "hsl(30,100%,30%)",
    stroke: "hsl(30,100%,50%)",
  },
  6: {
    label: "moderate",
    description:
      "widespread severe weather with multiple tornadoes and/or intense storms.",
    abbr: "mdt",
    activeColor: "bg-[hsl(0,100%,50%)]",
    fill: "hsl(0,100%,30%)",
    stroke: "hsl(0,100%,50%)",
  },
  8: {
    label: "high",
    description:
      "severe weather outbreak with intense tornadoes or a long-lived derecho system.",
    abbr: "high",
    activeColor: "bg-[hsl(300,100%,30%)]",
    fill: "hsl(300,100%,30%)",
    stroke: "hsl(300,100%,50%)",
  },
  10: {
    label: "significant",
    description:
      "severe weather outbreak with intense tornadoes or a long-lived derecho system.",
    abbr: "high",
    activeColor: "bg-[hsl(300,100%,30%)]",
    fill: "hsl(300,100%,30%)",
    stroke: "hsl(300,100%,50%)",
  },
};

// TODO: figure out where to get Tornado Watch geometry data

export const AlertPolygonMap = () => {
  const fakeTornadoWarnings = useFakeTornadoWarnings();

  return (
    <D3Basemap>
      <AlertPolygonGroup alertsObj={fakeTornadoWarnings} fillColor="red" />
    </D3Basemap>
  );
};

// -- SUB-COMPONENTS

const NoActiveAlertsText = () => (
  <text className="text-3xl fill-white">No Active Alerts</text>
);

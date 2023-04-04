import React from "react";
import rewind from "@turf/rewind";
import { geoAlbers, geoPath } from "d3-geo";
import dayjs from "dayjs";
import LF from "dayjs/plugin/localizedFormat";

import { Basemap } from "_shared/components/maps";
import {
  ALERT_EVENT,
  useLast2WeeksAlertData,
} from "services/nws-api-web-service";

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
const projection = geoAlbers();
const pathGen = geoPath(projection);

export const AlertPolygonMap = () => {
  // const { data: testAlerts, error: testAlertsError } = useAlertPolygons(
  // 	EVENT_NAME.tornadoWarning
  // );
  // const { data: warnings, error: warningsError } = useActiveAlertTextProducts(
  // 	EVENT_NAME.tornadoWarning
  // );
  // const { data: watches, error: watchesError } = useActiveAlertTextProducts(
  // 	EVENT_NAME.tornadoWatch
  // );

  if (testAlerts) {
    console.log("ALERTS\n", testAlerts?.features.length);
  }

  return (
    <Basemap>
      {/* {testAlerts && <AlertPolygons alertsObj={testAlerts} />} */}
      {/* {warnings && <AlertPolygons alertsObj={warnings} />} */}
      {/* {watches && <AlertPolygons alertsObj={watches} />} */}
      {/* {warnings.features.length < 1 && watches.features.length < 1 && (
        <NoActiveAlertsText />
      )} */}
    </Basemap>
  );
};

// -- SUB-COMPONENTS

const NoActiveAlertsText = () => (
  <text className="text-3xl fill-white">No Active Alerts</text>
);

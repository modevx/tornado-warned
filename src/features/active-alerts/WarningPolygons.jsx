import { checkAlertIsTornadoEmergency, checkAlertIsPDS } from "utils";

import { createPolygonStyles, createWarningPointStyles } from "./utils";
import {
  pathGenerator,
  rewindPathGenerator,
} from "components/utils/path-generators";

export const WarningPolygons = ({ alerts, showAlertModal }) => {
  const isValidFeatures = alerts && alerts.length > 0;

  return (
    <>
      {isValidFeatures ? (
        <g>
          {alerts.map((alert) => {
            return (
              <WarningPolygon
                key={alert.id}
                alert={alert}
                showAlertModal={showAlertModal}
              />
            );
          })}
        </g>
      ) : null}
    </>
  );
};

const WarningPolygon = ({ alert, showAlertModal }) => {
  const isPDS = checkAlertIsPDS(alert);
  const isEmergency = checkAlertIsTornadoEmergency(alert);
  const circleStyles = createWarningPointStyles(alert, isPDS, isEmergency);
  const polygonStyles = createPolygonStyles(alert, isPDS, isEmergency);

  const [x, y] = pathGenerator.centroid(alert.geometry);

  // console.log("CENTROID\n", centroid);

  return (
    <path
      d={rewindPathGenerator(alert.geometry)}
      {...polygonStyles}
      onClick={() => showAlertModal(alert)}
      transform={`translate(${x} ${y}) scale(4 4) translate(-${x} -${y})`}
    />
  );
};

{
  /* <circle
      {...circleStyles}
      onClick={() => showAlertModal(alert)}
      r={10}
      cx={x}
      cy={y}
    /> */
}

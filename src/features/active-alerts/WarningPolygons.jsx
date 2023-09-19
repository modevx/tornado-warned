import {
  checkIsEmergency,
  checkIsPDS,
  createPolygonStyles,
  createWarningPointStyles,
} from "./utils";
import {
  pathGenerator,
  rewindPathGenerator,
} from "components/_constants/path-generators";

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
  const isPDS = checkIsPDS(alert);
  const isEmergency = checkIsEmergency(alert);
  const circleStyles = createWarningPointStyles(alert, isPDS, isEmergency);

  const [x, y] = pathGenerator.centroid(alert.geometry);

  return (
    // <path
    //   d={rewindPathGenerator(alert.geometry)}
    //   {...pathStyles}
    //   onClick={() => showAlertModal(alert)}
    // />
    <circle
      {...circleStyles}
      onClick={() => showAlertModal(alert)}
      r={10}
      cx={x}
      cy={y}
    />
  );
};

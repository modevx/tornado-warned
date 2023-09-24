import {
  checkAlertIsPDS,
  checkAlertIsTornadoEmergency,
  createPolygonStyles,
  createWarningPointStyles,
} from "./utils";
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

  const polygonStyles = createPolygonStyles(alert, isPDS, isEmergency);

  const [x, y] = pathGenerator.centroid(alert.geometry);

  return (
    <path
      d={rewindPathGenerator(alert.geometry)}
      {...polygonStyles}
      onClick={() => showAlertModal(alert)}
      transform={`translate(${x} ${y}) scale(2 2) translate(-${x} -${y})`}
    />
  );
};

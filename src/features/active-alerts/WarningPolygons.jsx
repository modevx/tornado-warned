import { checkIsEmergency, checkIsPDS, polygonStyles } from "./utils";
import { rewindPathGenerator } from "components/_constants/path-generators";

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
  const pathStyles = polygonStyles(alert, isPDS, isEmergency);

  return (
    <path
      d={rewindPathGenerator(alert.geometry)}
      {...pathStyles}
      onClick={() => showAlertModal(alert)}
    />
  );
};

import { createWatchPolygon } from "./utils/alert-polygons";
import { checkIsEmergency, checkIsPDS, polygonStyles } from "./utils";
import { rewindPathGenerator } from "components/_constants/path-generators";

export const WatchPolygons = ({ alerts, showAlertModal }) => {
  const isValidFeatures = alerts && alerts.length > 0;

  return (
    <>
      {isValidFeatures
        ? alerts.map((alert) => {
            return (
              <WatchPolygon
                key={alert.id}
                alert={alert}
                showAlertModal={showAlertModal}
              />
            );
          })
        : null}
    </>
  );
};

const WatchPolygon = ({ alert, showAlertModal }) => {
  const isPDS = checkIsPDS(alert);
  const isEmergency = checkIsEmergency(alert);
  const watchGeoJSON = createWatchPolygon(alert);
  const pathStyles = polygonStyles(alert, isPDS, isEmergency);

  return (
    <path
      d={rewindPathGenerator(watchGeoJSON)}
      {...pathStyles}
      onClick={() => showAlertModal(alert)}
    />
  );
};

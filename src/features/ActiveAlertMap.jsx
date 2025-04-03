import {
  alertIsDestructiveStorm,
  alertIsPDS,
  alertIsTornadoEmergency,
} from "utils/nws-alerts";
import { Card } from "react-daisyui";
import { ALERT_COLORS } from "constants/nws-alerts";
import { WarningPolygon, WatchPolygon } from "components/AlertPolygons";

import { ConusStatesMap } from "components/_shared/Maps";

export const ActiveAlertMap = ({
  tornadoWarnings,
  tornadoWatches,
  stormWarnings,
  stormWatches,
  showAlertModalFunc,
}) => {
  return (
    <ConusStatesMap>
      <WatchPolygons
        alerts={tornadoWatches}
        color={ALERT_COLORS.tornado_watch}
        onClickCallback={showAlertModalFunc}
      />
      <WatchPolygons
        alerts={stormWatches}
        color={ALERT_COLORS.severe_storm_watch}
        onClickCallback={showAlertModalFunc}
      />
      <WarningPolygons
        alerts={stormWarnings}
        color={ALERT_COLORS.severe_storm_warning}
        onClickCallback={showAlertModalFunc}
      />
      <WarningPolygons
        alerts={tornadoWarnings}
        color={ALERT_COLORS.tornado_warning}
        onClickCallback={showAlertModalFunc}
      />
    </ConusStatesMap>
  );
};

// D3 CENTROID --> const [centX, centY] = d3GeoPath.centroid(alert.geometry);

export const WarningPolygons = ({ alerts, color, onClickCallback }) => {
  const hasFeatures = alerts?.length > 0;
  return (
    <>
      {hasFeatures
        ? alerts.map((alert) => {
            return (
              <WarningPolygon
                key={alert.id}
                alert={alert}
                color={color}
                onClickCallback={onClickCallback}
              />
            );
          })
        : null}
    </>
  );
};

export const WatchPolygons = ({ alerts, color, onClickCallback }) => {
  const hasFeatures = alerts?.length > 0;

  return (
    <>
      {hasFeatures
        ? alerts.map((alert) => {
            return (
              <WatchPolygon
                key={alert.id}
                alert={alert}
                color={color}
                onClickCallback={onClickCallback}
              />
            );
          })
        : null}
    </>
  );
};

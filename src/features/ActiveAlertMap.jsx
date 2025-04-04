import { ALERT_COLORS } from "constants/nws-alerts";
import {
  WatchPolygon,
  WarningPolygon,
} from "components/nws_alerts/AlertPolygons";

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
        color={ALERT_COLORS.TWT}
        onClickCallback={showAlertModalFunc}
      />
      <WatchPolygons
        alerts={stormWatches}
        color={ALERT_COLORS.SWT}
        onClickCallback={showAlertModalFunc}
      />
      <WarningPolygons
        alerts={stormWarnings}
        color={ALERT_COLORS.SWR}
        onClickCallback={showAlertModalFunc}
      />
      <WarningPolygons
        alerts={tornadoWarnings}
        color={ALERT_COLORS.TWR}
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

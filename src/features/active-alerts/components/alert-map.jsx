import { ALERT_COLORS } from "styles/nws-alert-colors";
import {
  WatchPolygons,
  WarningPolygons,
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
        color={ALERT_COLORS.TOA}
        onClickCallback={showAlertModalFunc}
      />
      <WatchPolygons
        alerts={stormWatches}
        color={ALERT_COLORS.SVA}
        onClickCallback={showAlertModalFunc}
      />
      <WarningPolygons
        alerts={stormWarnings}
        color={ALERT_COLORS.SVW}
        onClickCallback={showAlertModalFunc}
      />
      <WarningPolygons
        alerts={tornadoWarnings}
        color={ALERT_COLORS.TOW}
        onClickCallback={showAlertModalFunc}
      />
    </ConusStatesMap>
  );
};

// D3 CENTROID --> const [centX, centY] = d3GeoPath.centroid(alert.geometry);

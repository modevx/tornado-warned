import { ConusStatesMap } from "components/_shared/Maps";
import { CategoricalFeatureBoundries } from "components/convective_outlooks/CategoricalFeatureBoundries";
import {
  WarningPolygons,
  WatchPolygons,
} from "components/nws_alerts/AlertPolygons";
import { ALERT_TYPES } from "constants/nws-alerts";
import { ALERT_COLORS } from "styles/nws-alert-colors";

export const AlertOverlayMap = ({ categoricalFeatures, alerts }) => {
  let tornadoWarnings = [];
  let tornadoWatches = [];
  let stormWarnings = [];
  let stormWatches = [];

  if (alerts) {
    tornadoWarnings = alerts?.[ALERT_TYPES.TOW];
    tornadoWatches = alerts?.[ALERT_TYPES.TOA];
    stormWarnings = alerts?.[ALERT_TYPES.SVW];
    stormWatches = alerts?.[ALERT_TYPES.SVA];
  }

  return (
    <ConusStatesMap>
      <WatchPolygons alerts={stormWatches} color={ALERT_COLORS.SVA} />
      <WatchPolygons alerts={tornadoWatches} color={ALERT_COLORS.TOA} />
      <CategoricalFeatureBoundries features={categoricalFeatures} />
      <WarningPolygons alerts={stormWarnings} color={ALERT_COLORS.SVW} />
      <WarningPolygons alerts={tornadoWarnings} color={ALERT_COLORS.TOW} />
    </ConusStatesMap>
  );
};

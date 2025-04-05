import { ConusStatesMap } from "components/_shared/Maps";
import { CategoricalFeatureBoundries } from "components/convective_outlooks/CategoricalFeatureBoundries";
import {
  WarningPolygons,
  WatchPolygons,
} from "components/nws_alerts/AlertPolygons";
import { ALERT_COLORS, ALERT_TYPES } from "constants/nws-alerts";

export const AlertOverlayMap = ({ categoricalFeatures, alerts }) => {
  let tornadoWarnings = [];
  let tornadoWatches = [];
  let stormWarnings = [];
  let stormWatches = [];

  if (alerts) {
    tornadoWarnings = alerts?.[ALERT_TYPES.TWR];
    tornadoWatches = alerts?.[ALERT_TYPES.TWT];
    stormWarnings = alerts?.[ALERT_TYPES.SWR];
    stormWatches = alerts?.[ALERT_TYPES.SWT];
  }

  return (
    <ConusStatesMap>
      <CategoricalFeatureBoundries features={categoricalFeatures} />
      {/* <WatchPolygons alerts={stormWatches} color={ALERT_COLORS.SWT} />
      <WatchPolygons alerts={tornadoWatches} color={ALERT_COLORS.TWT} /> */}
      <WarningPolygons alerts={stormWarnings} color={ALERT_COLORS.SWR} />
      <WarningPolygons alerts={tornadoWarnings} color={ALERT_COLORS.TWR} />
    </ConusStatesMap>
  );
};

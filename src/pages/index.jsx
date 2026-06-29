import { useState } from "react";

import { PageLayout } from "components/_shared/PageLayout";

import {
  countAlerts,
  countTaggedAlerts,
  filterAlertsByType,
  filterTaggedAlerts,
} from "utils/nws-alerts";
import { FAKE_ALERTS, useAllActiveAlerts } from "services/nws-alerts";

import { ActiveAlertMap } from "components/nws_alerts/ActiveAlertMap";
import { ActiveAlertCard } from "components/nws_alerts/ActiveAlertCard";
import { ActiveAlertCounts } from "components/nws_alerts/ActiveAlertCounts";
import { ActiveAlertModal } from "components/nws_alerts/ActiveAlertModal";
import { WarningPolygons, WatchPolygons } from "components/nws_alerts/AlertPolygons";
import { ALERT_TYPES } from "constants/nws-alerts";
import { ALERT_COLORS } from "styles/nws-alert-colors";

import { ConusStatesMap } from "components/_shared/Maps";
import { CategoricalMap } from "components/convective_outlooks/ConvectiveOutlookMaps";
import { AlertOverlayMap } from "components/custom_maps/AlertOverlayMap";

import { MAPSERVER_LAYERS } from "constants/convective-outlooks";
import { useOutlookLayerById } from "services/convective-outlook-mapserver";
import { CategoricalFeatureBoundries } from "components/convective_outlooks/CategoricalFeatureBoundries";

const HomeScreen = () => {
  const [alertModalIsOpen, setAlertModalIsOpen] = useState(false);
  const [alertModalData, setAlertModalData] = useState(null);

  const showAlertModal = ({ alert, color }) => {
    setAlertModalData({ alert, color });
    setAlertModalIsOpen(true);
  };
  const closeAlertModal = () => setAlertModalIsOpen(false);

  const { data: alerts } = useAllActiveAlerts();
  const { data: day1features } = useOutlookLayerById("1");

  let alertCounts;
  let situationCounts;
  let countTotals;
  let filteredAlerts;
  let filteredTaggedAlerts;
  let tornadoWarnings = [];
  let tornadoWatches = [];
  let stormWarnings = [];
  let stormWatches = [];

  if (alerts) {
    alertCounts = countAlerts(alerts);
    situationCounts = countTaggedAlerts(alerts);
    countTotals = { ...alertCounts, ...situationCounts };
    filteredAlerts = filterAlertsByType(alerts);
    filteredTaggedAlerts = filterTaggedAlerts(alerts);
  }
  if (filteredAlerts) {
    tornadoWarnings = filteredAlerts?.[ALERT_TYPES.TOW];
    tornadoWatches = filteredAlerts?.[ALERT_TYPES.TOA];
    stormWarnings = filteredAlerts?.[ALERT_TYPES.SVW];
    stormWatches = filteredAlerts?.[ALERT_TYPES.SVA];
  }

  if (filteredTaggedAlerts) console.log("filteredTaggedAlerts: ", filteredTaggedAlerts);

  return (
    <PageLayout>
      <ActiveAlertModal
        alert={alertModalData?.alert}
        color={alertModalData?.color}
        isOpen={alertModalIsOpen}
        closeFunc={closeAlertModal}
      />

      {/* <ActiveAlertMap
        tornadoWarnings={tornadoWarnings}
        tornadoWatches={tornadoWatches}
        stormWarnings={stormWarnings}
        stormWatches={stormWatches}
        showAlertModalFunc={showAlertModal}
      /> */}

      {/* <CategoricalMap catLayer={MAPSERVER_LAYERS.day_1_categorical} /> */}
      <div className="content-center mx-20">
        <ActiveAlertCounts counts={countTotals} />
      </div>
      <div className="flex flex-row">
        <div className="flex-1">
          <AlertOverlayMap
            categoricalFeatures={day1features}
            alerts={filteredAlerts}
            onClickCallback={showAlertModal}
          />
        </div>
      </div>

      <div className="my-2 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {tornadoWarnings?.map((alert) => (
          <ActiveAlertCard
            key={alert.id}
            alert={alert}
            showAlertModalFunc={showAlertModal}
          />
        ))}
        {tornadoWatches?.map((alert) => (
          <ActiveAlertCard
            key={alert.id}
            alert={alert}
            showAlertModalFunc={showAlertModal}
          />
        ))}
        {stormWarnings?.map((alert) => (
          <ActiveAlertCard
            key={alert.id}
            alert={alert}
            showAlertModalFunc={showAlertModal}
          />
        ))}
        {stormWatches?.map((alert) => (
          <ActiveAlertCard
            key={alert.id}
            alert={alert}
            showAlertModalFunc={showAlertModal}
          />
        ))}
        {/* {FAKE_ALERTS[ALERT_TYPES.TOW].map((alert) => (
          <ActiveAlertCard
            key={alert.id}
            alert={alert}
            showAlertModalFunc={showAlertModal}
          />
        ))}
        {FAKE_ALERTS[ALERT_TYPES.TOA].map((alert) => (
          <ActiveAlertCard
            key={alert.id}
            alert={alert}
            showAlertModalFunc={showAlertModal}
          />
        ))}
        {FAKE_ALERTS[ALERT_TYPES.SVW].map((alert) => (
          <ActiveAlertCard
            key={alert.id}
            alert={alert}
            showAlertModalFunc={showAlertModal}
          />
        ))}
        {FAKE_ALERTS[ALERT_TYPES.SVA].map((alert) => (
          <ActiveAlertCard
            key={alert.id}
            alert={alert}
            showAlertModalFunc={showAlertModal}
          />
        ))} */}
      </div>
    </PageLayout>
  );
};

export default HomeScreen;

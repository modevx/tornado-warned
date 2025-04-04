import {
  isDestructiveStorm,
  isPDS,
  isTornadoEmergency,
  countAlerts,
  countTaggedAlerts,
  filterAlertsByType,
} from "utils/nws-alerts";
import {
  useActiveNwsAlertsByType,
  useFakeNwsAlertsByType,
  useAllActiveAlerts,
} from "services/nws-alerts";
import { useState } from "react";
import { PageLayout } from "components";
import { ActiveAlertMap } from "features/ActiveAlertMap";
import { ActiveAlertCard } from "features/ActiveAlertCard";
import { ActiveAlertModal } from "features/ActiveAlertModal";
import { ActiveAlertCounts } from "features/ActiveAlertCounts";

import { CategoricalMap } from "features/ConvectiveOutlookMaps";
import { MAPSERVER_LAYERS } from "constants/convective-outlooks";

import { ConusStatesMap } from "components/_shared/Maps";

import { useOutlookLayerById } from "services/convective-outlook-mapserver";
import { CategoricalFeatureOutlines } from "features/ConvectiveOutlookMaps";
import { WarningPolygons, WatchPolygons } from "features/ActiveAlertMap";
import { ALERT_COLORS } from "constants/nws-alerts";

import { albersUsaGeoPath } from "utils/geometry";
import { ALERT_TYPES } from "constants/strings";

const HomeScreen = () => {
  const [alertModalIsOpen, setAlertModalIsOpen] = useState(false);
  const [alertModalData, setAlertModalData] = useState(null);
  const showAlertModal = ({ alert, color }) => {
    setAlertModalData({ alert, color });
    setAlertModalIsOpen(true);
  };
  const closeAlertModal = () => {
    setAlertModalIsOpen(false);
  };
  const { data: alerts } = useAllActiveAlerts();
  const { data: day1features } = useOutlookLayerById("1");

  let alertCounts;
  let filteredAlerts;
  let situationCounts;
  let countTotals;

  if (alerts) {
    alertCounts = countAlerts(alerts);
    filteredAlerts = filterAlertsByType(alerts);
    situationCounts = countTaggedAlerts(alerts);
    countTotals = { ...alertCounts, ...situationCounts };
  }

  return (
    <PageLayout>
      <ActiveAlertModal
        alert={alertModalData?.alert}
        color={alertModalData?.color}
        isOpen={alertModalIsOpen}
        closeFunc={closeAlertModal}
      />
      <ActiveAlertCounts counts={countTotals && countTotals} />
      <div className="grid grid-cols-3">
        {/* <ActiveAlertMap
          tornadoWarnings={tornadoWarnings}
          tornadoWatches={tornadoWatches}
          stormWarnings={stormWarnings}
          stormWatches={stormWatches}
        />
        <CategoricalMap catLayer={MAPSERVER_LAYERS.day_1_categorical} />

        <ConusStatesMap>
          <CategoricalFeatureOutlines features={day1features} />
          <WatchPolygons
            alerts={tornadoWatches}
            color={ALERT_COLORS.tornado_watch}
            onClickCallback={showAlertModal}
          />
          <WatchPolygons
            alerts={stormWatches}
            color={ALERT_COLORS.severe_storm_watch}
            onClickCallback={showAlertModal}
          />
          <WarningPolygons
            alerts={stormWarnings}
            color={ALERT_COLORS.severe_storm_warning}
            onClickCallback={showAlertModal}
          />
          <WarningPolygons
            alerts={tornadoWarnings}
            color={ALERT_COLORS.tornado_warning}
            onClickCallback={showAlertModal}
          />
        </ConusStatesMap> */}
      </div>
      {/* <div className="my-2 grid gap-4 xl:grid-cols-4">
        {tornadoWarnings?.map((alert) => (
          <ActiveAlertCard
            key={alert.id}
            alert={alert}
            showAlertModalFunc={showAlertModal}
          />
        ))}
      </div>
      <div className="my-2 grid gap-4 xl:grid-cols-4">
        {tornadoWatches?.map((alert) => (
          <ActiveAlertCard
            key={alert.id}
            alert={alert}
            showAlertModalFunc={showAlertModal}
          />
        ))}
      </div>
      <div className="my-2 grid gap-4 xl:grid-cols-4">
        {stormWarnings?.map((alert) => (
          <ActiveAlertCard
            key={alert.id}
            alert={alert}
            showAlertModalFunc={showAlertModal}
          />
        ))}
      </div>
      <div className="my-2 grid gap-4 xl:grid-cols-4">
        {stormWatches?.map((alert) => (
          <ActiveAlertCard
            key={alert.id}
            alert={alert}
            showAlertModalFunc={showAlertModal}
          />
        ))}
      </div> */}
    </PageLayout>
  );
};

export default HomeScreen;

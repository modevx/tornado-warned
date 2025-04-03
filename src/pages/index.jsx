import {
  alertIsDestructiveStorm,
  alertIsPDS,
  alertIsTornadoEmergency,
} from "utils/nws-alerts";
import {
  useActiveNwsAlertsByType,
  useFakeNwsAlertsByType,
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
import { NWS_ALERT_COLORS } from "constants/nws-alerts";

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

  const { data: tornadoWarnings } = useActiveNwsAlertsByType("Tornado Warning");
  const { data: tornadoWatches } = useActiveNwsAlertsByType("Tornado Watch");
  const { data: stormWarnings } = useActiveNwsAlertsByType(
    "Severe Thunderstorm Warning"
  );
  const { data: stormWatches } = useActiveNwsAlertsByType(
    "Severe Thunderstorm Watch"
  );
  const { data } = useActiveNwsAlertsByType(
    "Tornado Warning,Tornado Watch,Severe Thunderstorm Warning,Severe Thunderstorm Watch"
  );
  let alerts = {
    tornadoWarnings: [],
    tornadoWatches: [],
    stormWarnings: [],
    stormWatches: [],
  };
  let pdsAlerts;
  let tornadoEmergencyAlerts;
  let destructiveStormAlerts;

  if (data) {
    destructiveStormAlerts = data.filter((alert) =>
      alertIsDestructiveStorm(alert)
    );
    pdsAlerts = data.filter((alert) => alertIsPDS(alert));
    tornadoEmergencyAlerts = data.filter((alert) =>
      alertIsTornadoEmergency(alert)
    );
    // alerts = filterTornadoAndStormAlerts(data);
  }

  const { data: day1features } = useOutlookLayerById("1");

  return (
    <PageLayout>
      <ActiveAlertModal
        alert={alertModalData?.alert}
        color={alertModalData?.color}
        isOpen={alertModalIsOpen}
        closeFunc={closeAlertModal}
      />
      <ActiveAlertCounts
        tornadoEmergencies={tornadoEmergencyAlerts?.length}
        pds={pdsAlerts?.length}
        tornadoWarnings={tornadoWarnings?.length}
        tornadoWatches={tornadoWatches?.length}
        destructiveStorms={destructiveStormAlerts?.length}
        stormWarnings={stormWarnings?.length}
        stormWatches={stormWatches?.length}
      />
      <div className="grid grid-cols-3">
        <ActiveAlertMap
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
            color={NWS_ALERT_COLORS.tornado_watch}
            onClickCallback={showAlertModal}
          />
          <WatchPolygons
            alerts={stormWatches}
            color={NWS_ALERT_COLORS.severe_storm_watch}
            onClickCallback={showAlertModal}
          />
          <WarningPolygons
            alerts={stormWarnings}
            color={NWS_ALERT_COLORS.severe_storm_warning}
            onClickCallback={showAlertModal}
          />
          <WarningPolygons
            alerts={tornadoWarnings}
            color={NWS_ALERT_COLORS.tornado_warning}
            onClickCallback={showAlertModal}
          />
        </ConusStatesMap>
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

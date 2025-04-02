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

import { CanvasMap, ConusStateMap } from "components/D3Maps";
import { albersStatesGeoJson, albersGeoPath } from "utils/geometry";

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

  const fake_tornado_warnings = useFakeNwsAlertsByType("Tornado Warning");
  const fake_tornado_watches = useFakeNwsAlertsByType("Tornado Watch");
  const fake_severe_storm_warnings = useFakeNwsAlertsByType(
    "Severe Thunderstorm Warning"
  );
  const fake_severe_storm_watches = useFakeNwsAlertsByType(
    "Severe Thunderstorm Watch"
  );
  // TODO: fetch alerts individually to eliminate need for filtering & alert object assignment
  // TODO: find way to specifically fetch destructive, PDS, & Tornado Emergency alerts

  // const {data: tornadoWarnings} = useActiveNwsAlertsByType("Tornado Warning");
  // const {data: tornadoWatches} = useActiveNwsAlertsByType("Tornado Watch");
  // const {data: stormWarnings} = useActiveNwsAlertsByType("Severe Thunderstorm Warning");
  // const {data: stormWatches} = useActiveNwsAlertsByType("Severe Thunderstorm Watch");

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

  const filterTornadoAndStormAlerts = (activeAlerts) => {
    activeAlerts.forEach((alert) => {
      switch (alert.properties.event) {
        case "Tornado Warning":
          alerts.tornadoWarnings = [...alerts.tornadoWarnings, alert];
          break;
        case "Tornado Watch":
          alerts.tornadoWatches = [...alerts.tornadoWatches, alert];
          break;
        case "Severe Thunderstorm Warning":
          alerts.stormWarnings = [...alerts.stormWarnings, alert];
          break;
        case "Severe Thunderstorm Watch":
          alerts.stormWatches = [...alerts.stormWatches, alert];
          break;
      }
    });

    return alerts;
  };
  if (data) {
    destructiveStormAlerts = data.filter((alert) =>
      alertIsDestructiveStorm(alert)
    );
    pdsAlerts = data.filter((alert) => alertIsPDS(alert));
    tornadoEmergencyAlerts = data.filter((alert) =>
      alertIsTornadoEmergency(alert)
    );
    alerts = filterTornadoAndStormAlerts(data);
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
        tornadoWarnings={alerts?.tornadoWarnings.length}
        tornadoWatches={alerts?.tornadoWatches.length}
        destructiveStorms={destructiveStormAlerts?.length}
        stormWarnings={alerts?.stormWarnings.length}
        stormWatches={alerts?.stormWatches.length}
        // tornadoWarnings={fake_tornado_warnings.length}
        // tornadoWatches={fake_tornado_watches.length}
        // stormWarnings={fake_severe_storm_warnings.length}
        // stormWatches={fake_severe_storm_watches.length}
      />
      <div className="grid grid-cols-3">
        <ActiveAlertMap
          tornadoWarnings={alerts?.tornadoWarnings}
          tornadoWatches={alerts?.tornadoWatches}
          stormWarnings={alerts?.stormWarnings}
          stormWatches={alerts?.stormWatches}
          // showAlertModalFunc={showAlertModal}
          // tornadoWarnings={fake_tornado_warnings}
          // tornadoWatches={fake_tornado_watches}
          // stormWarnings={fake_severe_storm_warnings}
          // stormWatches={fake_severe_storm_watches}
        />
        <CategoricalMap catLayer={MAPSERVER_LAYERS.day_1_categorical} />

        <ConusStateMap>
          <CategoricalFeatureOutlines features={day1features} />
          <WatchPolygons
            alerts={alerts?.tornadoWatches}
            color={NWS_ALERT_COLORS.tornado_watch}
            onClickCallback={showAlertModal}
          />
          <WatchPolygons
            alerts={alerts?.stormWatches}
            color={NWS_ALERT_COLORS.severe_storm_watch}
            onClickCallback={showAlertModal}
          />
          <WarningPolygons
            alerts={alerts?.stormWarnings}
            color={NWS_ALERT_COLORS.severe_storm_warning}
            onClickCallback={showAlertModal}
          />
          <WarningPolygons
            alerts={alerts?.tornadoWarnings}
            color={NWS_ALERT_COLORS.tornado_warning}
            onClickCallback={showAlertModal}
          />
        </ConusStateMap>
      </div>
      {/* <div className="my-2 grid gap-4 xl:grid-cols-4">
        {alerts?.tornadoWarnings.map((alert) => (
          <ActiveAlertCard
            key={alert.id}
            alert={alert}
            showAlertModalFunc={showAlertModal}
          />
        ))}
      </div>
      <div className="my-2 grid gap-4 xl:grid-cols-4">
        {alerts?.tornadoWatches.map((alert) => (
          <ActiveAlertCard
            key={alert.id}
            alert={alert}
            showAlertModalFunc={showAlertModal}
          />
        ))}
      </div>
      <div className="my-2 grid gap-4 xl:grid-cols-4">
        {alerts?.stormWarnings.map((alert) => (
          <ActiveAlertCard
            key={alert.id}
            alert={alert}
            showAlertModalFunc={showAlertModal}
          />
        ))}
      </div>
      <div className="my-2 grid gap-4 xl:grid-cols-4">
        {alerts?.stormWatches.map((alert) => (
          <ActiveAlertCard
            key={alert.id}
            alert={alert}
            showAlertModalFunc={showAlertModal}
          />
        ))}
      </div> */}

      {/* <AlertSection
        alerts={alerts?.tornadoWarnings}
        alertType="Tornado Warning"
        alerts={fake_tornado_warnings}
      />
      <AlertSection
        alerts={alerts?.tornadoWatches}
        alertType="Tornado Watch"
        alerts={fake_tornado_watches}
      />
      <AlertSection
        alerts={alerts?.stormWarnings}
        alertType="Severe Thunderstorm Warning"
        alerts={fake_severe_storm_warnings}
      />
      <AlertSection
        alerts={alerts?.stormWatches}
        alertType="Severe Thunderstorm Watch"
        alerts={fake_severe_storm_watches}
      /> */}
    </PageLayout>
  );
};

export default HomeScreen;

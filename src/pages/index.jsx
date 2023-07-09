import { useEffect, useState } from "react";
import { Toggle } from "react-daisyui";

import { PageLayout } from "components";
import {
  ActiveAlertCounts,
  NWSAlertSection,
  TornadoWarningAlert,
  TornadoWatchAlert,
  SevereStormWarningAlert,
  SevereStormWatchAlert,
} from "features/active-alerts";
import {
  useTornadoWarningQuery,
  useTornadoWatchQuery,
  useSevereStormWarningQuery,
  useSevereStormWatchQuery,
  useFakeTornadoWarnings,
  useFakeTornadoWatches,
  useFakeSevereStormWarnings,
  useFakeSevereStormWatches,
} from "services/nws-api-web-service";

const HomeScreen = () => {
  const [filteredAlerts, setFilteredAlerts] = useState({
    isTornadoWarningsSelected: false,
    isTornadoWatchesSelected: false,
    isStormWarningsSelected: false,
    isStormWatchesSelected: false,
  });

  const handleToggleChange = (e) => {
    const { name: toggleName } = e.target;

    setFilteredAlerts((prev) =>
      Object.assign({ ...prev }, { [toggleName]: !prev[toggleName] })
    );
  };

  useEffect(() => {
    console.log(filteredAlerts);
  }, [filteredAlerts]);

  const { data: tornadoWarnings } = useTornadoWarningQuery();
  const { data: tornadoWatches } = useTornadoWatchQuery();
  const { data: stormWarnings } = useSevereStormWarningQuery();
  const { data: stormWatches } = useSevereStormWatchQuery();

  const fakeTornadoWarnings = useFakeTornadoWarnings();
  const fakeTornadoWatches = useFakeTornadoWatches();
  const fakeStormWarnings = useFakeSevereStormWarnings();
  const fakeStormWatches = useFakeSevereStormWatches();

  return (
    <PageLayout>
      <div className="p-4">
        {/* <ActiveAlertCounts
          tornadoWarnings={tornadoWarnings}
          tornadoWatches={tornadoWatches}
        />

				<AlertFilters />

        <NWSAlertSection
          alertFeatureArr={tornadoWarnings}
          alertComponent={TornadoWarningAlert}
        />
        <NWSAlertSection
          alertFeatureArr={tornadoWatches}
          alertComponent={TornadoWatchAlert}
        />
        <NWSAlertSection
          alertFeatureArr={stormWarnings}
          alertComponent={SevereStormWarningAlert}
        />
        <NWSAlertSection
          alertFeatureArr={stormWatches}
          alertComponent={SevereStormWatchAlert}
        /> */}
        {/* -- TESTING -- */}
        <div className="flex justify-between items-center">
          <ActiveAlertCounts
            tornadoWarnings={fakeTornadoWarnings}
            tornadoWatches={fakeTornadoWatches}
          />

          <AlertFilters
            handler={handleToggleChange}
            filters={filteredAlerts ?? {}}
          />
        </div>

        {filteredAlerts["isTornadoWarningsSelected"] && (
          <NWSAlertSection
            alertFeatureArr={fakeTornadoWarnings}
            alertComponent={TornadoWarningAlert}
          />
        )}

        {filteredAlerts["isTornadoWatchesSelected"] && (
          <NWSAlertSection
            alertFeatureArr={fakeTornadoWatches}
            alertComponent={TornadoWatchAlert}
          />
        )}

        {filteredAlerts["isStormWarningsSelected"] && (
          <NWSAlertSection
            alertFeatureArr={fakeStormWarnings}
            alertComponent={SevereStormWarningAlert}
          />
        )}

        {filteredAlerts["isStormWatchesSelected"] && (
          <NWSAlertSection
            alertFeatureArr={fakeStormWatches}
            alertComponent={SevereStormWatchAlert}
          />
        )}
      </div>
    </PageLayout>
  );
};

export default HomeScreen;

const AlertFilters = ({ handler, filters }) => {
  const {
    isTornadoWarningsSelected,
    isTornadoWatchesSelected,
    isStormWarningsSelected,
    isStormWatchesSelected,
  } = filters;

  return (
    <div className="my-6">
      <div className="flex my-2 mx-4">
        <Toggle
          name="isTornadoWarningsSelected"
          onChange={handler}
          value={isTornadoWarningsSelected}
        />
        <span className="ml-2">Tornado Warnings</span>
      </div>
      <div className="flex my-2 mx-4">
        <Toggle
          name="isTornadoWatchesSelected"
          onChange={handler}
          value={isTornadoWatchesSelected}
        />
        <span className="ml-2">Tornado Watches</span>
      </div>
      <div className="flex my-2 mx-4">
        <Toggle
          name="isStormWarningsSelected"
          onChange={handler}
          value={isStormWarningsSelected}
        />
        <span className="ml-2">Severe Storm Warnings</span>
      </div>
      <div className="flex my-2 mx-4">
        <Toggle
          name="isStormWatchesSelected"
          onChange={handler}
          value={isStormWatchesSelected}
        />
        <span className="ml-2">Severe Storm Watches</span>
      </div>
    </div>
  );
};

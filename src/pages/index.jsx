import { useState } from "react";

import { PageLayout } from "components";
import { AlertFilters } from "features/active-alerts/AlertFilters";
import { AlertSection } from "features/active-alerts/AlertSection";
import {
  TornadoWarningAlert,
  TornadoWatchAlert,
  SevereStormWarningAlert,
  SevereStormWatchAlert,
} from "features/active-alerts/AlertCards";
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
  const [appliedAlertFilters, setAlertFilters] = useState({
    showTornadoWarnings: true,
    showTornadoWatches: true,
    showStormWarnings: true,
    showStormWatches: true,
  });

  const handleToggleChange = (e) => {
    const { name: toggleName } = e.target;

    setAlertFilters((prev) =>
      Object.assign({ ...prev }, { [toggleName]: !prev[toggleName] })
    );
  };

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
        /> */}

        <AlertFilters
          handler={handleToggleChange}
          filterState={appliedAlertFilters ?? {}}
        />

        {appliedAlertFilters.showTornadoWarnings ? (
          <AlertSection
            alertFeatureArr={tornadoWarnings}
            alertComponent={TornadoWarningAlert}
            title="Tornado Warnings"
          />
        ) : null}

        {appliedAlertFilters["showTornadoWatches"] ? (
          <AlertSection
            alertFeatureArr={tornadoWatches}
            alertComponent={TornadoWatchAlert}
            title="Tornado Watches"
          />
        ) : null}

        {appliedAlertFilters["showStormWarnings"] ? (
          <AlertSection
            alertFeatureArr={stormWarnings}
            alertComponent={SevereStormWarningAlert}
            title="Severe Thunderstorm Warnings"
          />
        ) : null}

        {appliedAlertFilters["showStormWatches"] ? (
          <AlertSection
            alertFeatureArr={stormWatches}
            alertComponent={SevereStormWatchAlert}
            title="Severe Thunderstorm Watches"
          />
        ) : null}

        {/* -- TESTING -- */}

        {/* <AlertFilters
          handler={handleToggleChange}
          filterState={appliedAlertFilters ?? {}}
        />

        {appliedAlertFilters["showTornadoWarnings"] ? (
          <AlertSection
            alertFeatureArr={fakeTornadoWarnings}
            alertComponent={TornadoWarningAlert}
            title="Tornado Warnings"
          />
        ) : null}

        {appliedAlertFilters["showTornadoWatches"] ? (
          <AlertSection
            alertFeatureArr={fakeTornadoWatches}
            alertComponent={TornadoWatchAlert}
            title="Tornado Watches"
          />
        ) : null}

        {appliedAlertFilters["showStormWarnings"] ? (
          <AlertSection
            alertFeatureArr={fakeStormWarnings}
            alertComponent={SevereStormWarningAlert}
            title="Severe Thunderstorm Warnings"
          />
        ) : null}

        {appliedAlertFilters["showStormWatches"] ? (
          <AlertSection
            alertFeatureArr={fakeStormWatches}
            alertComponent={SevereStormWatchAlert}
            title="Severe Thunderstorm Watches"
          />
        ) : null} */}
      </div>
    </PageLayout>
  );
};

export default HomeScreen;

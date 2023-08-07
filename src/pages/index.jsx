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

const HomeScreen = () => {
  const [alertFilters, setAlertFilters] = useState({
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

  return (
    <PageLayout>
      <>
        <AlertFilters
          handler={handleToggleChange}
          filterState={alertFilters ?? {}}
        />

        {alertFilters.showTornadoWarnings && (
          <AlertSection
            alertComponent={TornadoWarningAlert}
            event="Tornado Warning"
          />
        )}

        {alertFilters.showTornadoWatches && (
          <AlertSection
            alertComponent={TornadoWatchAlert}
            event="Tornado Watch"
          />
        )}

        {alertFilters.showStormWarnings && (
          <AlertSection
            alertComponent={SevereStormWarningAlert}
            event="Severe Thunderstorm Warning"
          />
        )}

        {alertFilters.showStormWatches && (
          <AlertSection
            alertComponent={SevereStormWatchAlert}
            event="Severe Thunderstorm Watch"
          />
        )}
      </>
    </PageLayout>
  );
};

export default HomeScreen;

import { useState } from "react";

import { PageLayout, USCountyMap } from "components";
import { AlertFilters } from "features/active-alerts/AlertFilters";
import { AlertSection } from "features/active-alerts/AlertSection";
import {
  TornadoWarningAlert,
  TornadoWatchAlert,
  SevereStormWarningAlert,
  SevereStormWatchAlert,
} from "features/active-alerts/AlertCards";

import * as D3 from "d3";
const albers = D3.geoAlbers();
const d3pathGen = D3.geoPath(albers);
import { useAlertGeoJsonByEvent } from "services/nws-api-web-service";

const HomeScreen = () => {
  const [alertFilters, setAlertFilters] = useState({
    showTornadoWarnings: true,
    showTornadoWatches: true,
    showStormWarnings: true,
    showStormWatches: true,
  });

  const { data: alerts } = useAlertGeoJsonByEvent("Severe Thunderstorm Watch");

  if (alerts) console.log("ALERTS >>\n", alerts);

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

        <USCountyMap pathGen={d3pathGen}></USCountyMap>

        {/* <AlertSection
          alertComponent={TornadoWarningAlert}
          event="Tornado Warning"
          isDisplayed={alertFilters.showTornadoWarnings}
        />

        <AlertSection
          alertComponent={TornadoWatchAlert}
          event="Tornado Watch"
          isDisplayed={alertFilters.showTornadoWatches}
        />

        <AlertSection
          alertComponent={SevereStormWarningAlert}
          event="Severe Thunderstorm Warning"
          isDisplayed={alertFilters.showStormWarnings}
        />

        <AlertSection
          alertComponent={SevereStormWatchAlert}
          event="Severe Thunderstorm Watch"
          isDisplayed={alertFilters.showStormWatches}
        /> */}
      </>
    </PageLayout>
  );
};

export default HomeScreen;

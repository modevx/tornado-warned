import { useState } from "react";
import { Form, Checkbox } from "react-daisyui";

import { PageLayout, ConusBasemap } from "components";
import { AlertFilters } from "features/active-alerts/AlertFilters";
import { AlertSection } from "features/active-alerts/AlertSection";
import {
  TornadoWarningAlert,
  TornadoWatchAlert,
  SevereStormWarningAlert,
  SevereStormWatchAlert,
} from "features/active-alerts/AlertCards";
import { ActiveAlertMap } from "features/active-alerts";

import {
  useAlertFeaturesByEvent,
  useFakeAlerts,
} from "services/nws-api-web-service";
import rewind from "@turf/rewind";
import { albersPathGenerator } from "components/_constants/path-generators";

const HomeScreen = () => {
  const [alertFilters, setAlertFilters] = useState({
    showTornadoWarnings: true,
    showTornadoWatches: true,
    showStormWarnings: true,
    showStormWatches: true,
  });

  const [showStates, setShowStates] = useState(true);
  const [showCounties, setShowCounties] = useState(false);
  const [showCWAs, setShowCWAs] = useState(false);

  const handleToggleChange = (e) => {
    const { name: toggleName } = e.target;

    setAlertFilters((prev) =>
      Object.assign({ ...prev }, { [toggleName]: !prev[toggleName] })
    );
  };

  return (
    <PageLayout>
      <>
        <div className="flex items-center p-10">
          <ConusBasemap
            showStates={showStates}
            showCounties={showCounties}
            showCWAs={showCWAs}
          >
            <WarningFeatures event="Tornado Warning" color="stroke-red-400" />
            <WarningFeatures
              event="Severe Thunderstorm Warning"
              color="stroke-orange-400"
            />
          </ConusBasemap>
          <Form className="flex flex-col justify-center bg-blue-900 rounded-md p-4">
            <Form.Label title="States">
              <Checkbox
                className="ml-4"
                defaultChecked
                value={showStates}
                onChange={() => setShowStates((prev) => !prev)}
              />
            </Form.Label>
            <Form.Label title="Counties">
              <Checkbox
                className="ml-4"
                value={showCounties}
                onChange={() => setShowCounties((prev) => !prev)}
              />
            </Form.Label>
            <Form.Label title="CWAs">
              <Checkbox
                className="ml-4"
                value={showCWAs}
                onChange={() => setShowCWAs((prev) => !prev)}
              />
            </Form.Label>
          </Form>
        </div>
        {/* <ActiveAlertMap /> */}
        {/* <AlertFilters
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
        )} */}
      </>
    </PageLayout>
  );
};

export default HomeScreen;

const WarningFeatures = ({ event, color }) => {
  const { data } = useAlertFeaturesByEvent(event);
  const fakeAlerts = useFakeAlerts(event);

  if (fakeAlerts) console.log(`${event} >>\n`, fakeAlerts);

  return (
    <>
      {/* {data.length > 0 ? (
        <g>
          {data.map(({ feature }) => (
            <AlertPolygon key={feature.id} color={color} />
          ))}
        </g>
      ) : null} */}
      {fakeAlerts.length > 0 ? (
        <g>
          {fakeAlerts.map(({ id, geometry }) => (
            <AlertPolygon key={id} feature={geometry} color={color} />
          ))}
        </g>
      ) : null}
    </>
  );
};

const AlertPolygon = ({ feature, color }) => {
  return (
    <path
      d={albersPathGenerator(rewind(feature, { reverse: true }))}
      // fill={color}
      // stroke={color}
      strokeWidth={10}
      opacity={0.7}
      className={color}
    />
  );
};

import { Stats } from "react-daisyui";

import { PageLayout } from "components";
import { TornadoWarningAlert, TornadoWatchAlert } from "features/active-alerts";
import {
  useTornadoWarningAlertQuery,
  useTornadoWatchAlertQuery,
  useSevereStormWarningAlertQuery,
  useSevereStormWatchAlertQuery,
} from "services/nws-api-web-service";

const HomeScreen = () => {
  const { data: tornadoWarnings } = useTornadoWarningAlertQuery();
  const { data: tornadoWatches } = useTornadoWatchAlertQuery();

  const { Stat } = Stats;

  return (
    <PageLayout>
      <div className="p-4">
        <div className="flex justify-center">
          <Stats className="mb-6">
            <Stats.Stat className="bg-red-500 text-black">
              <Stat.Item variant="title" className="text-black">
                {" "}
                ACTIVE WARNINGS
              </Stat.Item>
              <Stat.Item variant="value">
                {tornadoWarnings ? tornadoWarnings.length : 0}
              </Stat.Item>
            </Stats.Stat>
            <Stats.Stat className="bg-yellow-300 text-black">
              <Stat.Item variant="title" className="text-black">
                ACTIVE WATCHES
              </Stat.Item>
              <Stat.Item variant="value">
                {tornadoWatches ? tornadoWatches.length : 0}
              </Stat.Item>
            </Stats.Stat>
          </Stats>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {tornadoWarnings
            ? tornadoWarnings.map((featureObj) => (
                <TornadoWarningAlert key={featureObj.id} alert={featureObj} />
              ))
            : null}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {tornadoWatches
            ? tornadoWatches.map((featureObj) => (
                <TornadoWatchAlert key={featureObj.id} alert={featureObj} />
              ))
            : null}
        </div>
      </div>
    </PageLayout>
  );
};

export default HomeScreen;

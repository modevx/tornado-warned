import { AlertStats, AlertTextProducts } from "features/nws-alerts";
import { PageLayout } from "components";

import { ALERT_EVENTS } from "services/nws-alerts";
import {
  useActiveAlertsByEvent,
  fetchFakeTornadoWarnings,
  fetchFakeTornadoWatches,
} from "services/nws-alerts";

const HomePage = () => {
  const alertStats = { warningCount: 0, watchCount: 0 };

  const { data: arrWarnings } = useActiveAlertsByEvent(
    ALERT_EVENTS.Tornado_Warning
  );
  const { data: arrWatches } = useActiveAlertsByEvent(
    ALERT_EVENTS.Tornado_Watch
  );
  const arrFakeWarnings = fetchFakeTornadoWarnings();
  const arrFakeWatches = fetchFakeTornadoWatches();

  return (
    <PageLayout>
      <AlertStats stats={alertStats} />

      <H2>Tornado Warnings</H2>
      <AlertTextProducts
        type="tornadoWarning"
        textProducts={warningTextProducts}
      />

      <H2>Tornado Watches</H2>
      <AlertTextProducts type="tornadoWatch" textProducts={watchTextProducts} />
    </PageLayout>
  );
};

export default HomePage;

const H2 = ({ children }) => {
  return <h2 className="text-4xl font-bold uppercase">{children}</h2>;
};

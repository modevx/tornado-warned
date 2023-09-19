import { Button } from "react-daisyui";

import {
  usePDSAlerts,
  useTornadoEmergencyAlerts,
} from "services/nws-api-web-service";
import { H1, PageLayout } from "components";
import { ActiveAlertMap } from "features/active-alerts";
import { FAKE_ALERTS } from "services/nws-api-web-service";

const HomeScreen = () => {
  const { data: pdsAlerts } = usePDSAlerts();
  const { data: tornadoEmergencyAlerts } = useTornadoEmergencyAlerts();

  return (
    <PageLayout>
      {FAKE_ALERTS.torn_emerg.length
        ? FAKE_ALERTS.torn_emerg.map((alert) => (
            <TornadoEmergencyBanner key={alert.id} alert={alert} />
          ))
        : null}
      {FAKE_ALERTS.pds.length
        ? FAKE_ALERTS.pds.map((alert) => (
            <PdsBanner key={alert.id} alert={alert} />
          ))
        : null}
      <H1>Active Alerts</H1>
      <ActiveAlertMap />
      {/* Alert Description Modal Btns */}
    </PageLayout>
  );
};

export default HomeScreen;

const PdsBanner = ({ alert }) => {
  return (
    <div className="flex items-center px-4 py-5 justify-between text-xs bg-gradient-to-br from-purple-400 to-purple-800">
      <p>Particularly Dangerous Situation</p>
      <Button variant="outline" size="xs" className="ml-3">
        Details
      </Button>
    </div>
  );
};

const TornadoEmergencyBanner = ({ alert }) => {
  return (
    <div className="flex items-center px-4 py-5 justify-between text-xs bg-gradient-to-br from-pink-400 to-pink-700">
      <p>Tornado Emergency</p>
      <Button variant="outline" size="xs" className="ml-3">
        Details
      </Button>
    </div>
  );
};

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
      {/* Extreme Alert CTAs */}
      <H1>Active Alerts</H1>
      <ActiveAlertMap />
      {/* Alert Description Modal Btns */}
    </PageLayout>
  );
};

export default HomeScreen;

const PdsCtas = () => null;

const TornadoEmergencyCtas = () => null;

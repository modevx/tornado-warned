import { AlertList } from ".";
import {
  useTornadoWarnings,
  useTornadoWatches,
  useTestAlerts,
} from "../hooks/nws-alerts";

export const AlertsSection = () => {
  return (
    <section>
      <AlertList alertArray={alerts} />
      <AlertList alertArray={alerts} />
    </section>
  );
};

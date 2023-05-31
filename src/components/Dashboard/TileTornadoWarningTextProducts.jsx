import {
  useActiveTornadoWarnings,
  useFakeTornadoWarnings,
} from "services/nws-api-web-service";
import { TornadoAlertTextProduct } from "features/nws-alerts";

export const TileTornadoWarningTextProducts = () => {
  // const { data: alerts, error } = useActiveTornadoWarnings();
  const { features: alerts } = useFakeTornadoWarnings();

  return (
    <div className="mdx-dashboard-tile bg-gradient-to-br from-red-800 to-red-400 row-span-2 overflow-auto">
      <h2>TORNADO WARNINGS</h2>

      {alerts &&
        alerts.map((alert) => {
          const { id } = alert;

          return <TornadoAlertTextProduct key={id} alert={alert} />;
        })}
    </div>
  );
};

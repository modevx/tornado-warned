import { TornadoAlertTextProduct } from "features/nws-alerts";
import {
  useActiveTornadoWatches,
  useFakeTornadoWatches,
} from "services/nws-api-web-service";

export const TileTornadoWatchTextProducts = () => {
  // const { data: alerts, error } = useActiveTornadoWatches();
  const { features: alerts } = useFakeTornadoWatches();

  if (alerts) console.log(">> TORNADO WATCHES\n", alerts);

  return (
    <div className="mdx-dashboard-tile bg-gradient-to-br from-yellow-600 to-yellow-300 row-span-2 overflow-auto">
      <h2>TORNADO WATCHES</h2>

      {alerts &&
        alerts.map((alert) => {
          const { id } = alert;

          return <TornadoAlertTextProduct key={id} alert={alert} />;
        })}
    </div>
  );
};

export default TileTornadoWatchTextProducts;

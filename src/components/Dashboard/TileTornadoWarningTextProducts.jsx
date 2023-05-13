import {
  useActiveTornadoWarnings,
  useFakeTornadoWarnings,
} from "services/nws-api-web-service";
import { TornadoWarningTextProduct } from "features/nws-alerts";

export const TileTornadoWarningTextProducts = () => {
  const { data: alerts, error } = useActiveTornadoWarnings();

  if (alerts) console.log(">> TORNADO WARNINGS\n", alerts);

  return (
    <div className="bg-gradient-to-b from-red-800 to-red-400 row-span-2">
      <h2>TORNADO WARNINGS</h2>

      {alerts &&
        alerts.map((alert) => {
          const { id } = alert;

          return <TornadoWarningTextProduct key={id} alert={alert} />;
        })}
    </div>
  );
};

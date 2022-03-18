import { AlertItem } from "./AlertItem";

export const AlertList = ({ alerts }) => {
  return (
    <ul>
      {alerts.map((alert) => (
        <AlertItem key={alert.id} alert={alert} />
      ))}
    </ul>
  );
};

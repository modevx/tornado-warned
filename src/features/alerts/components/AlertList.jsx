import { AlertItem } from "./AlertItem";

export const AlertList = ({ activeAlerts }) => {
  return (
    <>
      {activeAlerts ? (
        activeAlerts.map((alert) => (
          <AlertItem key={alert.properties.id} activeAlert={alert} />
        ))
      ) : (
        <p> {"Something went wrong..."}</p>
      )}
    </>
  );
};

import { TornadoAlertListItem } from "./TornadoAlertListItem";

export const TornadoAlertList = ({ activeAlerts }) => {
  return (
    <>
      {activeAlerts ? (
        activeAlerts.map((alert) => (
          <TornadoAlertListItem key={alert.properties.id} activeAlert={alert} />
        ))
      ) : (
        <p> {"Something went wrong..."}</p>
      )}
    </>
  );
};

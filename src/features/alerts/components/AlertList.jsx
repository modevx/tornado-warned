import { TextProductItem } from "./AlertItem";

export const TextProductList = ({ activeAlerts }) => {
  return (
    <>
      {activeAlerts ? (
        activeAlerts.map((alert) => (
          <TextProductItem key={alert.properties.id} activeAlert={alert} />
        ))
      ) : (
        <p> {"Something went wrong..."}</p>
      )}
    </>
  );
};

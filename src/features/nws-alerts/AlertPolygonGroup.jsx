import { TornadoWarningPolygon } from "./TornadoAlertPolygon";

export const AlertPolygonGroup = ({ alertsObj, colorHex }) => {
  return (
    <g>
      {alertsObj.features.map((feature, index) => (
        <TornadoWarningPolygon
          key={index}
          feature={feature}
          colorHex={colorHex}
        />
      ))}
    </g>
  );
};

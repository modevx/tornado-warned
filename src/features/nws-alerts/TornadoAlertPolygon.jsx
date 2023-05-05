import { geoAlbers, geoPath } from "d3-geo";
import rewind from "@turf/rewind";

const projection = geoAlbers();
const pathGen = geoPath(projection);

export const TornadoAlertPolygon = ({ feature, fillColor }) => {
  const { id, event } = feature.properties;

  return (
    <path
      id={id}
      key={id}
      d={pathGen(rewind(feature, { reverse: true }))}
      fillOpacity={0.8}
      fill={fillColor}
      stroke={fillColor}
      strokeWidth={0.25}
    />
  );
};

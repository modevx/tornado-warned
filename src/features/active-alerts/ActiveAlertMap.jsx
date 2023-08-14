import Rewind from "@turf/rewind";
import { geoAlbers, geoPath } from "d3";

import { USStateMap } from "components";
import {
  useAlertFeaturesByEvent,
  useFakeAlerts,
} from "services/nws-api-web-service";

const projection = geoAlbers();
const d3GeoPath = geoPath(projection);

export const ActiveAlertMap = () => {
  return (
    <USStateMap>
      {/* Feature Filter */}
      <AlertFeatures event="Tornado Warning" color="stroke-red-400" />
      <AlertFeatures
        event="Severe Thunderstorm Warning"
        color="stroke-orange-400"
      />
    </USStateMap>
  );
};

const AlertFeatures = ({ event, color }) => {
  const { data } = useAlertFeaturesByEvent(event);
  const fakeAlerts = useFakeAlerts(event);

  if (fakeAlerts) console.log(fakeAlerts);

  return (
    <>
      {/* {data.length > 0 ? (
        <g>
          {data.map(({ feature }) => (
            <AlertPolygon key={feature.id} color={color} />
          ))}
        </g>
      ) : null} */}
      {fakeAlerts.length > 0 ? (
        <g>
          {fakeAlerts.map(({ id, geometry }) => (
            <AlertPolygon key={id} feature={geometry} color={color} />
          ))}
        </g>
      ) : null}
    </>
  );
};

const AlertPolygon = ({ feature, color }) => {
  return (
    <path
      d={d3GeoPath(Rewind(feature, { reverse: true }))}
      // fill={color}
      // stroke={color}
      strokeWidth={10}
      opacity={0.7}
      className={color}
    />
  );
};

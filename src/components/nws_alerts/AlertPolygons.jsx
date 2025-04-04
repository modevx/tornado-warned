import {
  isDestructiveStorm,
  isPdsStorm,
  isTornadoEmergency,
} from "utils/nws-alerts";
import { ALERT_COLORS } from "constants/nws-alerts";
import {
  albersGeoPath,
  rewindAlbersGeoPath,
  createWatchAlertGeometry,
} from "utils/geometry";

export const AlertPolygon = ({ color, geometry, pathGen, callback }) => {
  return (
    <path
      d={pathGen(geometry)}
      fill={color}
      stroke={color}
      fillOpacity={0.5}
      strokeOpacity={0.75}
      strokeWidth={0.5}
    />
  );
};

export const WarningPolygon = ({
  alert,
  color,
  onClickCallback = undefined,
}) => {
  const polygonColor = isTornadoEmergency(alert)
    ? ALERT_COLORS.TOREM
    : isPdsStorm(alert)
    ? ALERT_COLORS.PDS
    : isDestructiveStorm(alert)
    ? ALERT_COLORS.DESTRUCTIVE
    : color;

  return (
    <path
      d={albersGeoPath(alert.geometry)}
      fill={polygonColor}
      stroke={polygonColor}
      fillOpacity={0.65}
      strokeOpacity={0.85}
      strokeWidth={1}
      onClick={() => onClickCallback({ alert, color: polygonColor })}
    />
  );
};

export const WatchPolygon = ({ alert, color, onClickCallback = undefined }) => {
  const polygonColor = isPdsStorm(alert)
    ? ALERT_COLORS.PDS
    : isDestructiveStorm(alert)
    ? ALERT_COLORS.DESTRUCTIVE
    : color;
  const watchGeometry = createWatchAlertGeometry(alert);

  return (
    <path
      d={albersGeoPath(watchGeometry)}
      fill={polygonColor}
      stroke={polygonColor}
      fillOpacity={0.5}
      strokeOpacity={0.75}
      strokeWidth={0.5}
      onClick={() => onClickCallback({ alert, color: polygonColor })}
    />
  );
};

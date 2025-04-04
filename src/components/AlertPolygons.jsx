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

// TODO: refactor to single AlertPolygon that only takes ({color, geometry, pathGen, onClickCallback}) args

export const WarningPolygon = ({
  alert,
  color,
  onClickCallback = undefined,
}) => {
  const isDestructive = isDestructiveStorm(alert);
  const isPDS = isPdsStorm(alert);
  const isEmergency = isTornadoEmergency(alert);
  const polygonColor = isEmergency
    ? ALERT_COLORS.TOREM
    : isPDS
    ? ALERT_COLORS.PDS
    : isDestructive
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
  const isPDS = isPdsStorm(alert);
  const isDestructive = isDestructiveStorm(alert);
  const polygonColor = isPDS
    ? ALERT_COLORS.PDS
    : isDestructive
    ? ALERT_COLORS.DESTRUCTIVE
    : color;
  const watchGeometry = createWatchAlertGeometry(alert);

  // const albersFitExtent = geoAlbers().fitExtent(
  //   // 975 x 610
  //   [
  //     [350, 160],
  //     [625, 450],
  //   ],
  //   watchGeometry
  // );
  // const extentPathGen = geoPath(albersFitExtent);

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

export const AlertPolygon = ({ color, geometry, pathGen }) => {
  return (
    <path
      d={albersGeoPath(geometry)}
      fill={color}
      stroke={color}
      fillOpacity={0.5}
      strokeOpacity={0.75}
      strokeWidth={0.5}
    />
  );
};

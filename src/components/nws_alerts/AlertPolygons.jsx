import {
  isDestructiveStorm,
  isPdsStorm,
  isTornadoEmergency,
} from "utils/nws-alerts";
import { ALERT_COLORS } from "styles/nws-alert-colors";
import {
  albersGeoPath,
  rewindAlbersGeoPath,
  createWatchAlertGeometry,
} from "utils/geometry";
import { rgb } from "d3";

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
      stroke={rgb(0, 0, 0, 0.5)}
      fillOpacity={0.65}
      // strokeOpacity={0.85}
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

export const WarningPolygons = ({ alerts, color, onClickCallback }) => {
  const hasFeatures = alerts?.length > 0;
  return (
    <>
      {hasFeatures
        ? alerts.map((alert) => {
            return (
              <WarningPolygon
                key={alert.id}
                alert={alert}
                color={color}
                onClickCallback={onClickCallback}
              />
            );
          })
        : null}
    </>
  );
};

export const WatchPolygons = ({ alerts, color, onClickCallback }) => {
  const hasFeatures = alerts?.length > 0;

  return (
    <>
      {hasFeatures
        ? alerts.map((alert) => {
            return (
              <WatchPolygon
                key={alert.id}
                alert={alert}
                color={color}
                onClickCallback={onClickCallback}
              />
            );
          })
        : null}
    </>
  );
};

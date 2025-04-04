import { Button, Toggle } from "react-daisyui";
import {
  isDestructiveStorm,
  isPdsStorm,
  isTornadoEmergency,
  isWarningEvent,
} from "utils/nws-alerts";
import { ALERT_COLORS, ALERT_TAGS } from "constants/nws-alerts";
import {
  AlertPolygon,
  WarningPolygon,
  WatchPolygon,
} from "components/AlertPolygons";
import {
  albersCountiesGeoJson,
  albersStatesGeoJson,
  albersProjection,
  albersGeoPath,
  createWatchAlertGeometry,
} from "utils/geometry";
import { ConusCountiesMap, ConusStatesMap } from "components/_shared/Maps";

// TODO: add "Tornado Possible" and "Considerable" tags to Severe Thunderstorm Warning alerts based on [tornadoDetecion, thunderstormDamageThreat] alert props

export const ActiveAlertCard = ({ alert, showAlertModalFunc }) => {
  const {
    areaDesc,
    description,
    effective,
    event,
    expires,
    instruction,
    senderName,
    parameters: {
      maxHailSize,
      maxWindGust,
      tornadoDetection,
      thunderstormDamageThreat,
    },
  } = alert?.properties;

  let situation = null;
  let situationColor = null;

  const isEmergency = isTornadoEmergency(alert);
  const isPDS = isPdsStorm(alert);
  const isDestructive = isDestructiveStorm(alert);

  if (isEmergency) {
    situation = ALERT_TAGS.tornado_emergency;
    situationColor = ALERT_COLORS.TOREM;
  }
  if (isPDS) {
    situation = ALERT_TAGS.particularly_dangerous_situation;
    situationColor = ALERT_COLORS.PDS;
  }
  if (isDestructive) {
    situation = ALERT_TAGS.destructive_storm;
    situationColor = ALERT_COLORS.DESTRUCTIVE;
  }

  const alertColorMap = {
    "Tornado Warning": ALERT_COLORS.TWR,
    "Tornado Watch": ALERT_COLORS.TWT,
    "Severe Thunderstorm Warning": ALERT_COLORS.SWR,
    "Severe Thunderstorm Watch": ALERT_COLORS.SWT,
  };
  const alertColor = alertColorMap[event];

  const alertGeometry = isWarningEvent(event)
    ? alert.geometry
    : createWatchAlertGeometry(alert);

  const fitExtentProjection = albersProjection.fitExtent(
    // 975 x 610
    [
      [100, 100],
      [875, 510],
    ],
    alertGeometry
  );
  const extentPathGen = albersGeoPath(fitExtentProjection);
  const geometryColor = situationColor ?? alertColor;

  return (
    <Component color={alertColor}>
      <SituationTag situation={situation} color={situationColor} />
      <div className="flex justify-between">
        <SenderName senderName={senderName} />
        <Button
          size="sm"
          onClick={() =>
            showAlertModalFunc({
              alert: alert,
              color: situationColor ?? alertColor,
            })
          }
          style={{ backgroundColor: situationColor }}
        >
          Details
        </Button>
      </div>
      <TornadoDetection tornadoDetection={tornadoDetection} />
      <MaxWindGust maxWindGust={maxWindGust} />
      <MaxHailSize maxHailSize={maxHailSize} />
      <ThunderstormDamageThreat
        thunderstormDamageThreat={thunderstormDamageThreat}
      />
      {/* <div className="h-full w-full">
        {isWarningEvent(event) ? (
          <WarningViewbox
            color={geometryColor}
            geometry={alertGeometry}
            pathGen={extentPathGen}
          />
        ) : (
          <WatchViewbox
            color={geometryColor}
            geometry={alertGeometry}
            pathGen={extentPathGen}
          />
        )}
      </div> */}
      {/* <div className="h-full w-full"> */}
      {/* <div> */}
      {isWarningEvent(event) ? (
        <ConusStatesMap pathGen={extentPathGen}>
          <AlertPolygon
            color={geometryColor}
            geometry={alertGeometry}
            pathGen={extentPathGen}
          />
        </ConusStatesMap>
      ) : (
        <ConusStatesMap pathGen={extentPathGen}>
          <AlertPolygon
            color={geometryColor}
            geometry={alertGeometry}
            pathGen={extentPathGen}
          />
        </ConusStatesMap>
      )}
      {/* </div> */}
      {/* <div>
        {thunderstormDamageThreat ? <p>{thunderstormDamageThreat}</p> : null}
        {tornadoDetection ? <p>{tornadoDetection}</p> : null}
      </div> */}
    </Component>
  );
};

// SUB-COMPONENTS
const Component = ({ color, children }) => (
  <div
    style={{
      borderColor: color,
      borderWidth: 5,
    }}
    className="p-2 rounded"
  >
    {children}
  </div>
);
const SituationTag = ({ situation, color }) => {
  return (
    <>
      {situation && (
        <div
          style={{ backgroundColor: color }}
          className="text-center font-bold uppercase p-2 rounded"
        >
          {situation}
        </div>
      )}
    </>
  );
};
const SenderName = ({ senderName }) => (
  <div>
    <span className="font-bold text-sm">{senderName.slice(4)}</span>
  </div>
);
const MaxHailSize = ({ maxHailSize }) => {
  return maxHailSize ? <p>{maxHailSize}</p> : null;
};
const MaxWindGust = ({ maxWindGust }) => {
  return maxWindGust ? <p>{maxWindGust}</p> : null;
};
const ThunderstormDamageThreat = ({ thunderstormDamageThreat }) => {
  return thunderstormDamageThreat ? <p>{thunderstormDamageThreat}</p> : null;
};
const TornadoDetection = ({ tornadoDetection }) => {
  return tornadoDetection ? <p>{tornadoDetection}</p> : null;
};
const WarningViewbox = ({ color, geometry, pathGen }) => {
  return (
    <ConusCountiesMap pathGen={pathGen}>
      <AlertPolygon color={color} geometry={geometry} pathGen={pathGen} />
    </ConusCountiesMap>
  );
};
const WarningZoomedViewbox = () => {};
const WatchViewbox = ({ color, geometry, pathGen }) => {
  return (
    <ConusStatesMap pathGen={pathGen}>
      <AlertPolygon color={color} geometry={geometry} pathGen={pathGen} />
    </ConusStatesMap>
  );
};

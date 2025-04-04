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
} from "components/nws_alerts/AlertPolygons";
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
    situation = ALERT_TAGS.TOREM;
    situationColor = ALERT_COLORS.TOREM;
  }
  if (isPDS) {
    situation = ALERT_TAGS.PDS;
    situationColor = ALERT_COLORS.PDS;
  }
  if (isDestructive) {
    situation = ALERT_TAGS.DESTRUCTIVE;
    situationColor = ALERT_COLORS.DESTRUCTIVE;
  }

  const alertColorMap = {
    "Tornado Warning": ALERT_COLORS.TWR,
    "Tornado Watch": ALERT_COLORS.TWT,
    "Severe Thunderstorm Warning": ALERT_COLORS.SWR,
    "Severe Thunderstorm Watch": ALERT_COLORS.SWT,
  };
  const alertColor = alertColorMap[event];

  return (
    <Component color={situationColor || alertColor}>
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

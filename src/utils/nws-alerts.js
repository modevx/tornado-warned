import { checkStringForPhrase } from "utils";
import { ALERT_TAGS } from "constants/nws-alerts";

// ex: 'NWS Charlotte NC' --> 'Charlotte, NC'
export const changeWfoToCityState = (senderName) => {
  return senderName
    .slice(4)
    .split(/\s(?=[A-Z]{2})/)
    .join(", ");
};
export const createImpactedAreasMap = (areaDesc) => {
  const impactedAreasArr = createImpactedAreasArray(areaDesc);
  const impactedAreasMap = new Map();

  impactedAreasArr.forEach((areaState) => {
    const [area, state] = areaState.split(/\,\s/);
    assignToMapStateKey({ map: impactedAreasMap, area, state });
  });

  return impactedAreasMap;
};
const createImpactedAreasArray = (areaDesc) => {
  return areaDesc.split(/(?:;\s)/gm);
};
const assignToMapStateKey = ({ map, area, state }) => {
  if (map.get(state) === undefined) {
    map.set(state, new Array(area));
  } else {
    map.set(state, [...map.get(state), area]);
  }
};
// ALERT SITUATIONS
export const alertIsDestructiveStorm = (alert) => {
  const description = parseAlertDescription(alert);
  return checkStringForPhrase(description, ALERT_TAGS.destructive_storm);
};
export const alertIsPDS = (alert) => {
  const description = parseAlertDescription(alert);
  return checkStringForPhrase(
    description,
    ALERT_TAGS.particularly_dangerous_situation
  );
};
export const alertIsTornadoEmergency = (alert) => {
  const description = parseAlertDescription(alert);
  return checkStringForPhrase(description, ALERT_TAGS.tornado_emergency);
};
export const parseAlertDescription = (alert) => {
  return alert.properties.description.toLowerCase();
};
export const getAlertCount = ({ alerts, tag }) => {
  let count = 0;

  switch (tag) {
    case ALERT_TAGS.DESTRUCTIVE:
      count = alerts.filter((alert) => alertIsDestructiveStorm(alert)).length;
      break;
    case ALERT_TAGS.PDS:
      count = alerts.filter((alert) => alertIsPDS(alert)).length;
      break;
    case ALERT_TAGS.TOREM:
      count = alerts.filter((alert) => alertIsTornadoEmergency(alert)).length;
      break;
    default:
      count = 0;
      break;
  }

  return count;
};

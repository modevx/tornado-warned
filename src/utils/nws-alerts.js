import { stringIncludesPhrase } from "utils";
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
export const isDestructiveStorm = (alert) => {
  const description = parseAlertDescription(alert);
  return stringIncludesPhrase(description, ALERT_TAGS.DESTRUCTIVE);
};
export const isPdsStorm = (alert) => {
  const description = parseAlertDescription(alert);
  return stringIncludesPhrase(description, ALERT_TAGS.PDS);
};
export const isTornadoEmergency = (alert) => {
  const description = parseAlertDescription(alert);
  return stringIncludesPhrase(description, ALERT_TAGS.TOREM);
};
export const isWarningEvent = (event) => {
  return event.toLowerCase().includes("warning");
};
export const parseAlertDescription = (alert) => {
  return alert?.properties?.description.toLowerCase();
};
export const countAlerts = (alerts) => {
  return alerts.reduce((acc, alert) => {
    const eventType = alert.properties.event;
    acc[eventType] = (acc[eventType] || 0) + 1;
    return acc;
  }, {});
};
export const countTaggedAlerts = (alerts) => {
  const situationTags = Object.values(ALERT_TAGS);

  return situationTags.reduce((acc, tag) => {
    acc[tag] = alerts.filter((alert) =>
      alert.properties.description.includes(tag)
    ).length;
    return acc;
  }, {});
};
export const filterAlertsByType = (alerts) => {
  return alerts.reduce((acc, alert) => {
    const eventType = alert.properties.event;
    acc[eventType] = [...(acc[eventType] || []), alert];
    return acc;
  }, {});
};

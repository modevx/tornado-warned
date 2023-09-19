export const createPolygonStyles = (alert, isPDS, isTE) => {
  const { event } = alert.properties;

  const EVENT_STYLES = {
    "Tornado Warning": {
      fill: "transparent",
      fillOpacity: 0,
      stroke: "#f00",
      strokeOpacity: 0.5,
      strokeWidth: 2,
    },
    "Tornado Watch": {
      fill: "#ffff00",
      fillOpacity: 0.15,
      stroke: "#c4c400",
      strokeOpacity: 1,
      strokeWidth: 1,
    },
    "Severe Thunderstorm Warning": {
      fill: "transparent",
      fillOpacity: 0,
      stroke: "#ff5800",
      strokeOpacity: 0.5,
      strokeWidth: 2,
    },
    "Severe Thunderstorm Watch": {
      fill: "#00ff00",
      fillOpacity: 0.15,
      stroke: "#00b100",
      strokeOpacity: 1,
      strokeWidth: 1,
    },
  };
  const pdsStyles = {
    fill: "#ff00ff",
    fillOpacity: 0.5,
    stroke: "#b300b3",
    strokeOpacity: 0.5,
    strokeWidth: 2,
  };
  const emergencyStyles = {
    fill: "#3333cc",
    fillOpacity: 0.5,
    stroke: "#330099",
    strokeOpacity: 0.5,
    strokeWidth: 2,
  };

  return isTE ? emergencyStyles : isPDS ? pdsStyles : EVENT_STYLES[event];
};

export const createWarningPointStyles = (alert, isPDS, isTE) => {
  const { event } = alert.properties;

  const EVENT_STYLES = {
    "Tornado Warning": {
      fill: "#f00",
      fillOpacity: 0.5,
      // stroke: "#f00",
      // strokeOpacity: 0.5,
      // strokeWidth: 2,
    },
    "Severe Thunderstorm Warning": {
      fill: "#ff5800",
      fillOpacity: 0.5,
      // stroke: "#ff5800",
      // strokeOpacity: 0.5,
      // strokeWidth: 2,
    },
  };
  const pdsStyles = {
    fill: "#ff00ff",
    fillOpacity: 0.5,
    // stroke: "#b300b3",
    // strokeOpacity: 0.5,
    // strokeWidth: 2,
  };
  const emergencyStyles = {
    fill: "#3333cc",
    fillOpacity: 0.5,
    // stroke: "#330099",
    // strokeOpacity: 0.5,
    // strokeWidth: 2,
  };

  return isTE ? emergencyStyles : isPDS ? pdsStyles : EVENT_STYLES[event];
};

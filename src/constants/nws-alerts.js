export const ALERT_DESCRIPTIONS = [
  {
    title: "Tornado Emergency",
    description:
      "Confirmed, life-threatening tornado causing catastrophic damage.",
    from_color: "from-fuchsia-400",
  },
  {
    title: "Particularly Dangerous Situation",
    description:
      "Probable long-track tornadoes or wide-spread severe events such as intense derechos.",
    from_color: "from-purple-700",
  },
  {
    title: "Tornado Warning",
    description:
      "Radar-indicated or confirmed tornado on the ground.  Imminent danger to life and property.",
    from_color: "from-red-700",
  },
  {
    title: "Severe Thunderstorm Warning",
    description:
      "Confirmed severe weather in the form of damaging winds and/or hail. Like a tornado warning, there is imminent danger to life and property.",
    from_color: "from-orange-500",
  },
  {
    title: "Tornado Watch",
    description:
      "Tornadoes possible in and close to the watch area. Stay weather-aware if a warning is issued.",
    from_color: "from-yellow-300",
  },
  {
    title: "Severe Thunderstorm Watch",
    description:
      "Severe weather is possible in and close to the watch area. Be ready in case a severe thunderstorm warning is issued.",
    from_color: "from-green-300",
  },
];
export const ALERT_TAGS = Object.freeze({
  DESTRUCTIVE: "destructive storm",
  PDS: "particularly dangerous situation",
  TOREM: "tornado emergency",
});
export const ALERT_TYPES = Object.freeze({
  TOW: "Tornado Warning",
  TOA: "Tornado Watch",
  SVW: "Severe Thunderstorm Warning",
  SVA: "Severe Thunderstorm Watch",
});
export const PRODUCT_CODES = Object.freeze({
  TOW: "Tornado Warning",
  TOA: "Tornado Watch",
  SVW: "Severe Thunderstorm Warning",
  SVA: "Severe Thunderstorm Watch",
  PWO: "Public Severe Weather Outlook",
  SPS: "Special Weather Statement",
  SVS: "Severe Weather Statement",
  SWO: "Severe Storm Outlook Narrative (AC)",
  WWP: "Severe Thunderstorm / Tornado Watch Probabilities",
});

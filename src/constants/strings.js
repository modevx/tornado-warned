export const APP_FEATURES = [
  {
    name: "Tornado Alerts",
    tagline:
      "Tornado warnings and watches straight from the National Weather Service.",
    benefits: [
      {
        name: "Particulary Dangerous Situation",
        description:
          "Visually confirmed, life-threatening tornado on the ground.  Get to a basement or storm shelter NOW.  Your life depends on it.",
        icon: GiDeathSkull,
      },
      {
        name: "Tornado Warning",
        description:
          "Visually or radar-confirmed storm rotation.  Get to the center-most room on the lowest floor A.S.A.P.",
        icon: RiTornadoLine,
      },
      {
        name: "Tornado Watch",
        description:
          'Conditions are right to produce a tornado.  Double check your safety list and "keep your head on a swivel."',
        icon: GiAwareness,
      },
    ],
  },
  {
    name: "Severe Weather Outlooks",
    tagline:
      "Never get caught off-guard.  Be proactive and stay aware of building storm systems.",
    benefits: [
      {
        name: "Severe Thunderstorm Outlooks",
        description:
          "Maps displaying areas at increased risk of severe weather over the next 8 days.",
        icon: TiWeatherStormy,
      },
      {
        name: "Elevated Risk Levels",
        description: "Specific risk probablities for high-risk locations.",
        icon: ImWarning,
      },
      {
        name: "Major Cities",
        description:
          "Largely populated areas likely to be impacted by severe weather.",
        icon: GiModernCity,
      },
    ],
  },
];
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
export const MAPSERVER_LAYERS = Object.freeze({
  day_1_convective: { id: "0", name: "Day 1 Convective Outlook" },
  day_1_categorical: { id: "1", name: "Day 1 Categorical Outlook" },
  day_1_sig_tornado: { id: "2", name: "Day 1 Significant Tornado Outlook" },
  day_1_prob_tornado: { id: "3", name: "Day 1 Probabilistic Tornado Outlook" },
  day_1_sig_hail: { id: "4", name: "Day 1 Significant Hail Outlook" },
  day_1_prob_hail: { id: "5", name: "Day 1 Probabilistic Hail Outlook" },
  day_1_sig_wind: { id: "6", name: "Day 1 Significant Wind Outlook" },
  day_1_prob_wind: { id: "7", name: "Day 1 Probabilistic Wind Outlook" },
  day_2_convective: { id: "8", name: "Day 2 Convective Outlook" },
  day_2_categorical: { id: "9", name: "Day 2 Categorical Outlook" },
  day_2_sig_tornado: { id: "10", name: "Day 2 Significant Tornado Outlook" },
  day_2_prob_tornado: { id: "11", name: "Day 2 Probabilistic Tornado Outlook" },
  day_2_sig_hail: { id: "12", name: "Day 2 Significant Hail Outlook" },
  day_2_prob_hail: { id: "13", name: "Day 2 Probabilistic Hail Outlook" },
  day_2_sig_wind: { id: "14", name: "Day 2 Significant Wind Outlook" },
  day_2_prob_wind: { id: "15", name: "Day 2 Probabilistic Wind Outlook" },
  day_3_convective: { id: "16", name: "Day 3 Convective Outlook" },
  day_3_categorical: { id: "17", name: "Day 3 Categorical Outlook" },
  day_3_sig_severe: { id: "18", name: "Day 3 Significant Severe Outlook" },
  day_3_prob: { id: "19", name: "Day 3 Probabilistic Outlook" },
  days_4_thru_8_convective: { id: "20", name: "Day 4 - 8 Convective Outlook" },
  day_4_prob: { id: "21", name: "Day 4 Probabilistic Outlook" },
  day_5_prob: { id: "22", name: "Day 5 Probabilistic Outlook" },
  day_6_prob: { id: "23", name: "Day 6 Probabilistic Outlook" },
  day_7_prob: { id: "24", name: "Day 7 Probabilistic Outlook" },
  day_8_prob: { id: "25", name: "Day 8 Probabilistic Outlook" },
});
export const NWS_ALERT_TYPES = Object.freeze({
  tornado_warning: "Tornado Warning",
  tornado_watch: "Tornado Watch",
  severe_storm_warning: "Severe Thunderstorm Warning",
  severe_storm_watch: "Severe Thunderstorm Watch",
});
export const NWS_ALERT_TAGS = Object.freeze({
  destructive_storm: "destructive storm",
  particularly_dangerous_situation: "particularly dangerous situation",
  tornado_emergency: "tornado emergency",
});
export const STATES_ABBR_NAME_MAP = {
  AL: "Alabama",
  AK: "Alaska",
  AZ: "Arizona",
  AR: "Arkansas",
  CA: "California",
  CO: "Colorado",
  CT: "Connecticut",
  DE: "Delaware",
  FL: "Florida",
  GA: "Georgia",
  HI: "Hawaii",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  IA: "Iowa",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  ME: "Maine",
  MD: "Maryland",
  MA: "Massachusetts",
  MI: "Michigan",
  MN: "Minnesota",
  MS: "Mississippi",
  MO: "Missouri",
  MT: "Montana",
  NE: "Nebraska",
  NV: "Nevada",
  NH: "New Hampshire",
  NJ: "New Jersey",
  NM: "New Mexico",
  NY: "New York",
  NC: "North Carolina",
  ND: "North Dakota",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PA: "Pennsylvania",
  RI: "Rhode Island",
  SC: "South Carolina",
  SD: "South Dakota",
  TN: "Tennessee",
  TX: "Texas",
  UT: "Utah",
  VT: "Vermont",
  VA: "Virginia",
  WA: "Washington",
  WV: "West Virginia",
  WI: "Wisconsin",
  WY: "Wyoming",
};

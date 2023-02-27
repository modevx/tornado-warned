import * as ICONS from "_shared/constants/icons";

export const FEATURES = [
  {
    name: "Tornado Alerts",
    tagline:
      "Real-time storm and tornado alerts from the National Weather Service.",
    benefits: [
      {
        name: "Particulary Dangerous Situation",
        description:
          "Visually confirmed, life-threatening tornado on the ground.  Get to a basement or storm shelter NOW.  Your life depends on it.",
        icon: ICONS.GiDeathSkull,
      },
      {
        name: "Tornado Warning",
        description:
          "Visually or radar-confirmed storm rotation.  Get to the center-most room on the lowest floor A.S.A.P.",
        icon: ICONS.RiTornadoLine,
      },
      {
        name: "Tornado Watch",
        description:
          'Conditions are right to produce a tornado.  Double check your safety list and "keep your head on a swivel."',
        icon: ICONS.GiAwareness,
      },
    ],
  },
  {
    name: "Severe Weather Convective Outlooks",
    tagline:
      "Never get caught off-guard.  Be proactive and stay aware of building storm systems.",
    benefits: [
      {
        name: "Severe Thunderstorm Outlooks",
        description:
          "Maps displaying areas at increased risk of severe weather over the next 8 days.",
        icon: ICONS.TiWeatherStormy,
      },
      {
        name: "Elevated Risk Levels",
        description: "Specific risk probablities for high-risk locations.",
        icon: ICONS.ImWarning,
      },
      {
        name: "Major Cities",
        description:
          "Largely populated areas likely to be impacted by severe weather.",
        icon: ICONS.GiModernCity,
      },
    ],
  },
];

import {
  GiAwareness,
  GiDamagedHouse,
  GiDeathSkull,
  GiModernCity,
} from "react-icons/gi";
import { BiMapAlt, BiTargetLock } from "react-icons/bi";
import { RiNumbersLine, RiTornadoLine } from "react-icons/ri";
import { TiWeatherStormy } from "react-icons/ti";
import { ImWarning } from "react-icons/im";

export const FEATURES = [
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

export const NAV_ITEMS = [
  // { name: "alerts", href: "/" },
  { name: "outlooks", href: "/convective-outlooks" },
  // { name: "stats", href: "/dashboard-stats" },
  // { name: "local storm reports", href: "/local-storm-reports" },
  // { name: "radar", href: "/radar" },
];

export const STATE_NAMES_ABBR = {
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

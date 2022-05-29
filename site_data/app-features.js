import { GiAwareness, GiDeathSkull } from "react-icons/gi";
import { BiMapAlt, BiTargetLock } from "react-icons/bi";
import { RiTornadoLine } from "react-icons/ri";

export const app_features = [
	{
		name: "Real-Time Alerts",
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
		name: "Local Storm Reports",
		tagline: "Preliminary storm reports from the National Weather Service.",
		benefits: [
			{
				name: "Damage Assessments",
				description:
					"Preliminary tornado event damage and F-scale estimates from the National Weather Service.",
				icon: GiDamagedHouse,
			},
			{
				name: "F-Scale Rating",
				description:
					"Approximated F-scale rating based on tornado velocities and damage caused.",
				icon: RiNumbersLine,
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

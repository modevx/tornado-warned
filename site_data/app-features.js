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
];

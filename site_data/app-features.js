import { RiTornadoLine } from "react-icons/ri";
import { ImWarning } from "react-icons/im";

export const app_features = [
	{
		name: "Real-Time Alerts",
		tagline:
			"Tornado warnings and watches straight from the National Weather Service.",
		benefits: [
			{
				name: "Tornado Warnings",
				description:
					"A spotter has confirmed a tornado or radar has picked up rotation.  Either way, if you see one of these for your area, haul ass to the safest place possible.  NOW!",
				icon: RiTornadoLine,
			},
			{
				name: "Tornado Watches",
				description:
					"Conditions are right to produce a tornado.  Double check your safety list and be ready.",
				icon: ImWarning,
			},
		],
	},
	{
		name: "Severe Weather Outlooks",
		tagline: "Never get caught off-guard.  Stay proactive.  Stay alive.",
		benefits: [
			{
				name: "Particulary Dangerous Situations",
				description:
					"A spotter has confirmed a tornado or radar has picked up rotation.  Either way, if you see one of these for your area, haul ass to the safest place possible.  NOW!",
				icon: RiTornadoLine,
			},
			{
				name: "Tornado Watches",
				description:
					"Conditions are right to produce a tornado.  Double check your safety list and be ready.",
				icon: ImWarning,
			},
		],
	},
];

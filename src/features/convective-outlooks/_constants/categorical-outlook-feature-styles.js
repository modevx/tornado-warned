import {
	IoRainy,
	IoSkull,
	IoThunderstorm,
	IoWarningOutline,
} from "react-icons/io5";
import { GiDamagedHouse } from "react-icons/gi";
import { GiTornado } from "react-icons/gi";
import { IoUmbrellaOutline } from "react-icons/io5";

export const CATEGORICAL_OUTLOOK_FEATURE_STYLES = Object.freeze({
	2: {
		color: "#007600",
		icon: IoUmbrellaOutline,
		label: "Thunderstorms",
		stroke: "#003b00",
		summary: "non-severe storms with rain",
	},
	3: {
		color: "#00ff00",
		icon: IoThunderstorm,
		label: "Marginal",
		stroke: "#00b100",
		summary: "potentially organized severe storms with marginal intensity",
	},
	4: {
		color: "#ffff00",
		icon: IoWarningOutline,
		label: "Slight",
		stroke: "#c4c400",
		summary: "isolated, organized severe storms with variable intensity",
	},
	5: {
		color: "#ffa500",
		icon: GiDamagedHouse,
		label: "Enhanced",
		stroke: "#c47f00",
		summary: "widespread severe storms with variable instensity",
	},
	6: {
		color: "#9d0000",
		icon: GiTornado,
		label: "Moderate",
		stroke: "#620000",
		summary: "widespread severe weather with several tornadoes and large hail",
	},
	8: {
		color: "#ff00ff",
		icon: IoSkull,
		label: "High",
		stroke: "#b300b3",
		summary:
			"severe weather outbreak anticipated with tornadoes and/or derechoes.  expect widespread damage and hurricane force winds.",
	},
});

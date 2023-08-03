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
		bgColor: "#007600",
		textColor: "#ffffff",
		icon: IoUmbrellaOutline,
		label: "Thunderstorms",
		stroke: "#003b00",
		summary: "non-severe storms with rain",
	},
	3: {
		bgColor: "#00ff00",
		textColor: "#000000",
		icon: IoThunderstorm,
		label: "Marginal",
		stroke: "#00b100",
		summary: "potentially organized severe storms with marginal intensity",
	},
	4: {
		bgColor: "#ffff00",
		textColor: "#000000",
		icon: IoWarningOutline,
		label: "Slight",
		stroke: "#c4c400",
		summary: "isolated, organized severe storms with variable intensity",
	},
	5: {
		bgColor: "#ffa500",
		textColor: "#000000",
		icon: GiDamagedHouse,
		label: "Enhanced",
		stroke: "#c47f00",
		summary: "widespread severe storms with variable instensity",
	},
	6: {
		bgColor: "#9d0000",
		textColor: "#ffffff",
		icon: GiTornado,
		label: "Moderate",
		stroke: "#620000",
		summary: "widespread severe weather with several tornadoes and large hail",
	},
	8: {
		bgColor: "#ff00ff",
		textColor: "#000000",
		icon: IoSkull,
		label: "High",
		stroke: "#b300b3",
		summary:
			"severe weather outbreak anticipated with tornadoes and/or derechoes.  expect widespread damage and hurricane force winds.",
	},
});

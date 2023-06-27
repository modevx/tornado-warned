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

export const PROBABILISTIC_OUTLOOK_FEATURE_STYLES = Object.freeze({
	2: {
		label: "2%",
		color: "rgba(56, 168, 0, 255)",
	},
	5: {
		label: "5%",
		color: "rgba(111, 25, 3, 255)",
	},
	10: {
		label: "10%",
		color: "rgba(255, 198, 0, 255)",
	},
	15: {
		label: "15%",
		color: "rgba(230, 0, 0, 255)",
	},
	30: {
		label: "30%",
		color: "rgba(250, 0, 255, 255)",
	},
	45: {
		label: "45%",
		color: "rgba(119, 6, 244, 255)",
	},
	60: {
		label: "60%",
		color: "rgba(0, 77, 168, 255)",
	},
});

export const SIGNIFICANT_OUTLOOK_FEATURE_STYLES = Object.freeze({
	10: {
		label: "Significant",
		color: "rgba(212, 208, 200, 0)",
	},
});

export const LAYER_IDS = Object.freeze({
	day_1_convective: "0",
	day_1_categorical: "1",
	day_1_significant_tornado: "2",
	day_1_probabilistic_tornado: "3",
	day_1_significant_hail: "4",
	day_1_probabilistic_hail: "5",
	day_1_significant_wind: "6",
	day_1_probabilistic_wind: "7",
	day_2_convective: "8",
	day_2_categorical: "9",
	day_2_significant_tornado: "10",
	day_2_probabilistic_tornado: "11",
	day_2_significant_hail: "12",
	day_2_probabilistic_hail: "13",
	day_2_significant_wind: "14",
	day_2_probabilistic_wind: "15",
	day_3_convective: "16",
	day_3_categorical: "17",
	day_3_probabilistic: "18",
	day_3_significant_severe: "19",
	days_4_thru_8_convective: "20",
	day_4_probabilistic: "21",
	day_5_probabilistic: "22",
	day_6_probabilistic: "23",
	day_7_probabilistic: "24",
	day_8_probabilistic: "25",
});

export const CATEGORY_STYLES = {
	2: {
		esriColor: "rgba(189,255,189,255)",
		label: "storm",
		description: "> 10% chance of thunderstorms",
		abbr: "tstm",
		activeColor: "bg-[hsl(120,60%,30%)]",
		fill: "hsl(120,60%,30%)",
		stroke: "hsl(120,70%,30%)",
		icon: IoRainy,
	},
	3: {
		esriColor: "rgba(115,178,115,255)",
		label: "marginal",
		description: "scattered severe storms",
		abbr: "mrgl",
		activeColor: "bg-[hsl(120,100%,50%)]",
		fill: "hsl(120,100%,50%)",
		stroke: "hsl(120,100%,50%)",
		icon: IoThunderstorm,
	},
	4: {
		esriColor: "rgba(247, 247, 143, 255)",
		label: "slight",
		description: "organized severe storms expected",
		abbr: "slgt",
		activeColor: "bg-[hsl(60,100%,50%)]",
		fill: "hsl(60,100%,30%)",
		stroke: "hsl(60,100%,50%)",
		icon: IoWarningOutline,
	},
	5: {
		esriColor: "rgba(230, 152, 0, 255)",
		label: "enhanced",
		description: "concentrated, severe storms.",
		abbr: "enh",
		activeColor: "bg-[hsl(30,100%,50%)]",
		fill: "hsl(30,100%,30%)",
		stroke: "hsl(30,100%,50%)",
		icon: GiDamagedHouse,
	},
	6: {
		esriColor: "rgba(255, 0, 0, 255)",
		label: "moderate",
		description:
			"widespread severe weather with multiple tornadoes and/or intense storms.",
		abbr: "mdt",
		activeColor: "bg-[hsl(0,100%,50%)]",
		fill: "hsl(0,100%,30%)",
		stroke: "hsl(0,100%,50%)",
		icon: GiTornado,
	},
	8: {
		esriColor: "rgba(255, 0, 197, 255)",
		label: "high",
		description:
			"severe weather outbreak with intense tornadoes or a long-lived derecho system.",
		abbr: "high",
		activeColor: "bg-[hsl(300,100%,30%)]",
		fill: "hsl(300,100%,30%)",
		stroke: "hsl(300,100%,50%)",
		icon: IoSkull,
	},
	10: {
		label: "significant",
		description:
			"severe weather outbreak with intense tornadoes or a long-lived derecho system.",
		abbr: "high",
		activeColor: "bg-[hsl(300,100%,30%)]",
		fill: "hsl(300,100%,30%)",
		stroke: "hsl(300,100%,50%)",
		icon: IoSkull,
	},
};

import * as URLS from "constants/urls";

export const FOOTER_NAV_ITEMS = [
	{ title: "STAY SAFE", links: [{ label: "", href: "" }] },
	{ title: "STORM CHASING", links: [{ label: "", href: "" }] },
	{
		title: "DEVELOPERS",
		links: [
			{ label: "National Weather Service API", href: URLS.NWS.API_WEB_SERVICE },
			{
				label: "National Weather Service Cloud Services",
				href: URLS.NWS.GIS_CLOUD_WEB_SERVICES,
			},
			{ label: "NOAA Data Access", href: URLS.NOAA.DATA_ACCESS },
			{
				label: "Storm Prediction Center Forecast Products",
				href: URLS.SPC.FORECAST_PRODUCTS,
			},
		],
	},
];

export const HEADER = [
	// live_dashboard: {
	// 	label: "dashboard",
	// 	href: "/live-dashboard",
	// },
	{
		label: "outlooks",
		href: "/",
	},
	// alerts: {
	// 	label: "alerts",
	// 	href: "/active-alerts",
	// },
	// local_storm_reports: {
	// 	label: "storm reports",
	// 	href: "/local-storm-reports",
	// },
	// radar_signatures: {
	//   label: "signatures",
	//   href: "/nexrad-signatures",
	// },
	// latest_info: {
	//   label: "latest info",
	//   href: "/latest-info",
	// },
];

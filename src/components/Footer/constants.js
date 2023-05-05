import {
	NATIONAL_WEATHER_SERVICE,
	NOAA,
	STORM_PREDICTION_CENTER,
} from "constants/urls";

export const FOOTER_NAV_ITEMS = [
	{
		title: "BE PREPARED",
		links: [
			{
				label: "Tornado Safety",
				href: NATIONAL_WEATHER_SERVICE.Tornado_Safety,
			},
		],
	},
	{
		title: "STORM CHASING",
		links: [
			{
				label: "SKYWARN Storm Spotter Program",
				href: NATIONAL_WEATHER_SERVICE.Skywarn_Storm_Spotter_Program,
			},
		],
	},
	{
		title: "DEVELOPERS",
		links: [
			{
				label: "National Weather Service API",
				href: NATIONAL_WEATHER_SERVICE.Api_Web_Service_Docs,
			},
			{
				label: "National Weather Service Cloud Services",
				href: NATIONAL_WEATHER_SERVICE.Gis_Cloud_Web_Services,
			},
			{
				label: "NOAA Data Access",
				href: NOAA.Data_Access,
			},
			{
				label: "Storm Prediction Center Forecast Products",
				href: STORM_PREDICTION_CENTER.Forecast_Products,
			},
		],
	},
];

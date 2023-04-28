import { URLS } from "_shared/constants";

export const FOOTER_NAV_ITEMS = [
  {
    title: "BE PREPARED",
    links: [
      {
        label: "Tornado Safety",
        href: URLS.NATIONAL_WEATHER_SERVICE.Tornado_Safety,
      },
    ],
  },
  {
    title: "STORM CHASING",
    links: [
      {
        label: "SKYWARN Storm Spotter Program",
        href: URLS.NATIONAL_WEATHER_SERVICE.Skywarn_Storm_Spotter_Program,
      },
    ],
  },
  {
    title: "DEVELOPERS",
    links: [
      {
        label: "National Weather Service API",
        href: URLS.NATIONAL_WEATHER_SERVICE.Api_Web_Service_Docs,
      },
      {
        label: "National Weather Service Cloud Services",
        href: URLS.NATIONAL_WEATHER_SERVICE.Gis_Cloud_Web_Services,
      },
      {
        label: "NOAA Data Access",
        href: URLS.NOAA.Data_Access,
      },
      {
        label: "Storm Prediction Center Forecast Products",
        href: URLS.STORM_PREDICTION_CENTER.Forecast_Products,
      },
    ],
  },
];

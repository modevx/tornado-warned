import * as URLS from "_shared/constants/urls";

export const FOOTER_NAV_ITEMS = [
  { title: "BE PREPARED", links: [{ label: "", href: "" }] },
  { title: "STORM CHASING", links: [{ label: "", href: "" }] },
  {
    title: "DEVELOPERS",
    links: [
      { label: "National Weather Service API", href: URLS.NWS.API_WEB_SERVICE },
      {
        label: "National Weather Service Cloud Services",
        href: URLS.NWS.GIS_CLOUD_WEB_SERVICES,
      },
      {
        label: "NOAA Data Access",
        href: URLS.NOAA.DATA_ACCESS,
      },
      {
        label: "Storm Prediction Center Forecast Products",
        href: URLS.SPC.FORECAST_PRODUCTS,
      },
    ],
  },
];

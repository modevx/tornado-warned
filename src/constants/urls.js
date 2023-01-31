const BASE = Object.freeze({
  APP_API: "/api",
	NOAA: "https://www.ncdc.noaa.gov",
	NWS: "https://www.weather.gov",
	SPC: "http://www.spc.noaa.gov",
	SPC_MAP_SERVICES: "https://mapservices.weather.noaa.gov/vector",
});



export const ENDPOINT = Object.freeze({
  APP: {spc_rss_feeds: "spc-rss-feeds"},
	NOAA: {},
	NWS: {},
	SPC: {
    outlook_geometry: "query?&outFields=*&geometry=true&f=geojson"
    outlooks_legend: "legend?f=pjson"
		outlook_map_server: "rest/services/outlooks/SPC_wx_outlks/MapServer",
		outlook_wms_server: "services/outlooks/SPC_wx_outlks/MapServer/WMSServer",
		RSS: {
			all: "products/spcrss.xml",
			conv_otlks: "products/spcacrss.xml",
			fire_forecasts: "products/spcfwrss.xml",
			meso_disc: "products/spcmdrss.xml",
			pds: "products/spcpdswwrss.xml",
			sev_wx_multi_med_brfs: "products/spcmbrss.xml",
			tor_sev_wx: "products/spcwwrss.xml",
		},
	},
});

export const APP = Object.freeze({
  spc_rss_feeds: `${BASE.APP_API}/${ENDPOINT.APP.spc_rss_feeds}`
})

export const NOAA = Object.freeze({})

export const NWS = Object.freeze({})

export const SPC = Object.freeze({
	outlooks_legend: `${BASE.SPC_MAP_SERVICES}/${ENDPOINT.SPC.outlook_map_server}/${ENDPOINT.SPC.outlooks_legend}`,
	outlooks_map_server: `${BASE.SPC_MAP_SERVICES}/${ENDPOINT.SPC.outlook_map_server}`,
	outlooks_wms_server: `${BASE.SPC_MAP_SERVICES}/${ENDPOINT.SPC.outlook_wms_server}`,
  rss_all_products: `${BASE.SPC}/${ENDPOINT.SPC.RSS.all}`,
  rss_convective_outlooks: `${BASE.SPC}/${ENDPOINT.SPC.RSS.conv_otlks}`,
  rss_fire_forecasts: `${BASE.SPC}/${ENDPOINT.SPC.RSS.fire_forecasts}`,
  rss_mesoscale_discussions: `${BASE.SPC}/${ENDPOINT.SPC.RSS.meso_disc}`,
  rss_particularly_dangerous_situations: `${BASE.SPC}/${ENDPOINT.SPC.RSS.pds}`,
  rss_severe_wx_outlook_multimedia_briefings: `${BASE.SPC}/${ENDPOINT.SPC.RSS.sev_wx_multi_med_brfs}`,
  rss_tornado_severe_wx_watches: `${BASE.SPC}/${ENDPOINT.SPC.RSS.tor_sev_wx}`
});

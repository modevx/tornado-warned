const BASE = Object.freeze({
	NOAA: "https://www.ncdc.noaa.gov",
	NOAA_MAP_SERV: "https://idpgis.ncep.noaa.gov/arcgis/rest/services",
	NWS: "https://www.weather.gov",
	NWS_MAP_SERV: "https://mapservices.weather.noaa.gov/vector/rest/services",
	SPC: "http://www.spc.noaa.gov",
});

// https://idpgis.ncep.noaa.gov/arcgis/rest/services/radar/radar_base_reflectivity_time/ImageServer

export const ENDPOINT = Object.freeze({
	SPC: {
		OTLK_GEOMETRY: "query?&outFields=*&geometry=true&f=geojson",
	},
});

export const APP = Object.freeze({
	spc_rss_feeds: "api/spc-rss-feeds",
});

export const NOAA = Object.freeze({
	DATA_ACCESS: `${BASE.NOAA}/access`,
});

export const NWS = Object.freeze({
	API_WEB_SERVICE: `${BASE.NWS}/documentation/services-web-api`,
	AWIPS_BASEMAPS: `${BASE.NWS}/gis/AWIPSShapefiles`,
	GIS_CLOUD_WEB_SERVICES: `${BASE.NWS}/gis/cloudgiswebservices`,
	IDPGIS_REST_META: `${BASE.NWS}/gis/IDP-GISRestMetadata`,
	LOCAL_STORM_REPORT_MAP_SERV: `${BASE.NWS_MAP_SERV}/obs/nws_local_storm_reports/MapServer`,
	RADAR_BASE_REFLECTIVITY_IMG_SERV: `${BASE.NOAA_MAP_SERV}/radar/radar_base_reflectivity_time/ImageServer`,
	RADAR_BASE_REFLECTIVITY_MAP_SERV: `${BASE.NOAA_MAP_SERV}/NWS_Observations/radar_base_reflectivity/MapServer`,
	REFERENCE_MAP_MAP_SERV: `${BASE.NOAA_MAP_SERV}/NWS/nws_reference_map/MapServer`,
});

export const SPC = Object.freeze({
	FORECAST_PRODUCTS: `${BASE.SPC}/products`,
	OTLK_MAP_SERV: `${BASE.NWS_MAP_SERV}/outlooks/SPC_wx_outlks/MapServer`,
	OTLK_MAP_SERV_LGND: `${BASE.NWS_MAP_SERV}/outlooks/SPC_wx_outlks/MapServer/legend?f=pjson`,
	RSS_ALL: `${BASE.SPC}/products/spcrss.xml`,
	RSS_CONV_OTLKS: `${BASE.SPC}/products/spcacrss.xml`,
	RSS_FEED_DOCS: `${BASE.SPC}/aboutrss.html`,
	RSS_FIRE_FC: `${BASE.SPC}/products/spcfwrss.xml`,
	RSS_MESO_DISC: `${BASE.SPC}/products/spcmdrss.xml`,
	RSS_PDS: `${BASE.SPC}/products/spcpdswwrss.xml`,
	RSS_SEV_WX_OTLK_MM_BRF: `${BASE.SPC}/products/spcmbrss.xml`,
	RSS_TOR_SEV_WX: `${BASE.SPC}/products/spcwwrss.xml`,
});

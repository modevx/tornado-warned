const NOAA_NCDC = "https://www.ncdc.noaa.gov";
const NOAA_NCEI = "https://www.ncei.noaa.gov";
const NWS = "https://www.weather.gov";
const SPC = "http://www.spc.noaa.gov";
const NOAA_ARCGIS = "https://idpgis.ncep.noaa.gov/arcgis/rest/services";
const NWS_ARCGIS = "https://mapservices.weather.noaa.gov/vector/rest/services";

export const ENDPOINTS = Object.freeze({
	SPC: {
		OTLK_GEOMETRY: "query?&outFields=*&geometry=true&f=geojson",
	},
});

export const NOAA = Object.freeze({
	Data_Access: `${NOAA_NCDC}/access`,
	Radar_Products: `${NOAA_NCEI}/products/radar`,
	Storm_Events_Database: `${NOAA_NCDC}/stormevents`,
});

export const NATIONAL_WEATHER_SERVICE = Object.freeze({
	api_web_service: "https://api.weather.gov",
	Awips_Basemaps: `${NWS}/gis/AWIPSShapefiles`,
	Gis_Cloud_Web_Services: `${NWS}/gis/cloudgiswebservices`,
	Idpgis_Rest_Meta: `${NWS}/gis/IDP-GISRestMetadata`,
	Skywarn_Storm_Spotter_Program: `${NWS}/skywarn`,
	Tornado_Safety: `${NWS}/safety/tornado`,
	Local_Storm_Report_MapServer: `${NWS_ARCGIS}/obs/nws_local_storm_reports/MapServer`,
	Radar_ImageServer: `${NOAA_ARCGIS}/radar/radar_base_reflectivity_time/ImageServer`,
	Radar_MapServer: `${NOAA_ARCGIS}/NWS_Observations/radar_base_reflectivity/MapServer`,
	Reference_Map_MapServer: `${NOAA_ARCGIS}/NWS/nws_reference_map/MapServer`,
});

export const STORM_PREDICTION_CENTER = Object.freeze({
	Forecast_Products: `${SPC}/products`,
	Severe_WX_Event_Summaries: `${SPC}/climo/online`,
});

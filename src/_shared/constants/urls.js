const NOAA_NCDC = "https://www.ncdc.noaa.gov";
const NOAA_NCEI = "https://www.ncei.noaa.gov";
const NWS = "https://www.weather.gov";
const SPC = "http://www.spc.noaa.gov";
const NOAA_ARCGIS = "https://idpgis.ncep.noaa.gov/arcgis/rest/services";
const NWS_ARCGIS = "https://mapservices.weather.noaa.gov/vector/rest/services";

// https://idpgis.ncep.noaa.gov/arcgis/rest/services/radar/radar_base_reflectivity_time/ImageServer

export const ENDPOINT = Object.freeze({
  SPC: {
    OTLK_GEOMETRY: "query?&outFields=*&geometry=true&f=geojson",
  },
});

export const NOAA = Object.freeze({
  Data_Access: `${NOAA_NCDC}/access`,
  Radar_Products: `${NOAA_NCEI}/products/radar`,
});

export const NATIONAL_WEATHER_SERVICE = Object.freeze({
  Api_Web_Service: `${NWS}/documentation/services-web-api`,
  Awips_Basemaps: `${NWS}/gis/AWIPSShapefiles`,
  Gis_Cloud_Web_Services: `${NWS}/gis/cloudgiswebservices`,
  Idpgis_Rest_Meta: `${NWS}/gis/IDP-GISRestMetadata`,
  Local_Storm_Report_MapServer: `${NWS_ARCGIS}/obs/nws_local_storm_reports/MapServer`,
  Radar_ImageServer: `${NOAA_ARCGIS}/radar/radar_base_reflectivity_time/ImageServer`,
  Radar_MapServer: `${NOAA_ARCGIS}/NWS_Observations/radar_base_reflectivity/MapServer`,
  Reference_Map_MapServer: `${NOAA_ARCGIS}/NWS/nws_reference_map/MapServer`,
});

export const STORM_PREDICTION_CENTER = Object.freeze({
  Forecast_Products: `${SPC}/products`,
  Outlook_MapServer: `${NWS_ARCGIS}/outlooks/SPC_wx_outlks/MapServer`,
  Outlook_MapServer_Legend: `${NWS_ARCGIS}/outlooks/SPC_wx_outlks/MapServer/legend?f=pjson`,
  Rss_All_Products: `${SPC}/products/spcrss.xml`,
  Rss_Convective_Outlooks: `${SPC}/products/spcacrss.xml`,
  Rss_Feed_Documentation: `${SPC}/aboutrss.html`,
  Rss_Meso_Discussion: `${SPC}/products/spcmdrss.xml`,
  Rss_Particularly_Dangerous_Situation: `${SPC}/products/spcpdswwrss.xml`,
  Rss_Severe_WX_Media_Brief: `${SPC}/products/spcmbrss.xml`,
  Rss_Tornado_Severe_WX: `${SPC}/products/spcwwrss.xml`,
});

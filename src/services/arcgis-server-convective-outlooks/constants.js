const nwsArcgisMapServerBaseURL =
	"https://mapservices.weather.noaa.gov/vector/rest/services/outlooks/SPC_wx_outlks/MapServer";

export const urls = Object.freeze({
	outlookMapServer: `${nwsArcgisMapServerBaseURL}`,
	outlookLegend: `${nwsArcgisMapServerBaseURL}/legend?f=pjson`,
});

const spcBaseUrl = "http://www.spc.noaa.gov";

export const urls = Object.freeze({
	Rss_All_Products: `${SPC}/products/spcrss.xml`,
	Rss_Convective_Outlooks: `${SPC}/products/spcacrss.xml`,
	Rss_Feed_Documentation: `${SPC}/aboutrss.html`,
	Rss_Meso_Discussion: `${SPC}/products/spcmdrss.xml`,
	Rss_Particularly_Dangerous_Situation: `${SPC}/products/spcpdswwrss.xml`,
	Rss_Severe_WX_Media_Brief: `${SPC}/products/spcmbrss.xml`,
	Rss_Tornado_Severe_WX: `${SPC}/products/spcwwrss.xml`,
});

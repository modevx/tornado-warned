const SPC_RSS_BASE_URL = "http://www.spc.noaa.gov/products";

export const ENDPOINTS = {
	severe_storm: `${SPC_RSS_BASE_URL}/spcwwrss.xml`,
	pds: `${SPC_RSS_BASE_URL}/spcpdswwrss.xml`,
	meso_disc: `${SPC_RSS_BASE_URL}/spcmdrss.xml`,
	conv_otlk: `${SPC_RSS_BASE_URL}/spcacrss.xml`,
};

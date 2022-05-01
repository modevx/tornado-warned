import axios from "axios";

const DEFAULT_TIMEOUT = 5000;

export const ARCGIS = axios.create({
	baseURL: "https://mapservices.weather.noaa.gov/vector/rest/services",
	timeout: DEFAULT_TIMEOUT,
});

export const NEXT_JS_API = axios.create({
	baseURL: "/api",
	timeout: DEFAULT_TIMEOUT,
});

export const NATIONAL_WEATHER_SERVICE = axios.create({
	baseURL: "https://api.weather.gov",
	timeout: DEFAULT_TIMEOUT,
});

export const SEVERE_WEATHER_DATA_INVENTORY = axios.create({
	baseURL: "https://www.ncdc.noaa.gov/swdiws",
	timeout: DEFAULT_TIMEOUT,
});

export const STORM_PREDICTION_CENTER = {
	base: axios.create({
		baseURL: "http://www.spc.noaa.gov",
		timeout: DEFAULT_TIMEOUT,
	}),
	cors: NEXT_JS_API,
	test_base: axios.create({
		baseURL: "http://test-www-spc.woc.noaa.gov",
		timeout: DEFAULT_TIMEOUT,
	}),
};

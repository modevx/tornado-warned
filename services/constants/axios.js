import axios from "axios";

const DEFAULT_TIMEOUT = 5000;

export const NATIONAL_WEATHER_SERVICE = axios.create({
	baseURL: "https://api.weather.gov",
	timeout: DEFAULT_TIMEOUT,
});
export const SEVERE_WEATHER_DATA_INVENTORY = axios.create({
	baseURL: "https://www.ncdc.noaa.gov/swdiws",
	timeout: DEFAULT_TIMEOUT,
});
export const STORM_PREDICTION_CENTER = axios.create({
	baseURL: "http://www.spc.noaa.gov/products",
	timeout: DEFAULT_TIMEOUT,
});
export const STORM_PREDICTION_CENTER_TEST = axios.create({
	baseURL: "http://test-www-spc.woc.noaa.gov/products",
	timeout: DEFAULT_TIMEOUT,
});

import axios from "axios";

const BASE_URL = "https://www.ncdc.noaa.gov/swdiws";
const DEFAULT_TIMEOUT = 5000;

export const SWDI_CLIENT = axios.create({
	baseURL: BASE_URL,
	timeout: DEFAULT_TIMEOUT,
});

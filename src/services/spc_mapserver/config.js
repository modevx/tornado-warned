import axios from "axios";

const BASE_URL =
	"https://mapservices.weather.noaa.gov/vector/rest/services/outlooks/SPC_wx_outlks/MapServer";

const DEFAULT_TIMEOUT = 5000;

export const MAP_SERVER_CLIENT = axios.create({
	baseURL: BASE_URL,
	timeout: DEFAULT_TIMEOUT,
});

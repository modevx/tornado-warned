import axios from "axios";
import { DEFAULT_TIMEOUT } from "services/constants";

const BASE_URL =
	"https://mapservices.weather.noaa.gov/vector/rest/services/outlooks/SPC_wx_outlks/MapServer";

export const MAP_SERVER_CLIENT = axios.create({
	baseURL: BASE_URL,
	timeout: DEFAULT_TIMEOUT,
});

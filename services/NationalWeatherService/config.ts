import axios from "axios";
import { API_PATHS as URLS } from "./api-paths";

export const AXIOS_CONFIG = axios.create({
	baseURL: URLS.nwsBaseUrl,
});

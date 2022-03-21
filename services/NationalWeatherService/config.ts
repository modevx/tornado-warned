import axios from "axios";
import { NWS_ENDPOINTS } from "./paths";

export const AXIOS_CONFIG = axios.create({
	baseURL: NWS_ENDPOINTS.nwsBaseUrl,
});

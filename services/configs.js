import Axios from "axios";
import { NWS_URLS, SWDI_URLS } from "../constants/urls";

const DEFAULT_TIMEOUT = 5000;

export const NWS_CONFIG = Axios.create({
	baseURL: NWS_URLS.baseURL,
	timeout: DEFAULT_TIMEOUT,
});

export const SWDI_CONFIG = Axios.create({
	baseURL: SWDI_URLS.baseURL,
	timeout: DEFAULT_TIMEOUT,
});

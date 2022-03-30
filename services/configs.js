import Axios from "axios";
import { NWS_URLS as NWS, SWDI_URLS as SWDI } from "../constants/urls";

const DEFAULT_TIMEOUT = 5000;

export const NWS_CONFIG = Axios.create({
	baseURL: NWS.baseURL,
	timeout: DEFAULT_TIMEOUT,
});

export const SWDI_CONFIG = Axios.create({
	baseURL: SWDI.baseURL,
	timeout: DEFAULT_TIMEOUT,
});

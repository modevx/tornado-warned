import axios from "axios";
import { NWS_API_PATHS } from "./paths";

export const AXIOS_CONFIG = axios.create({
  baseURL: NWS_API_PATHS.baseUrl,
});

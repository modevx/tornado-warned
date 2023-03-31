import { createAxiosClient } from "services/client.config";

const baseURL = "https://api.weather.gov";
const timeout = 5000;

export const NWS_API_WEB_SERVICE = createAxiosClient({ baseURL, timeout });

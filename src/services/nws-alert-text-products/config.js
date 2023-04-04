import { createHTTPClient } from "services/client.config";

export const NWS_API_WEB_SERVICE = createHTTPClient({
  baseURL: "https://api.weather.gov",
  timeout: 5000,
});

import { createHTTPClient } from "services/client.config";
import { NATIONAL_WEATHER_SERVICE as NWS } from "_shared/constants/urls";

export const NWS_API_WEB_SERVICE = createHTTPClient({
  baseURL: NWS.api_web_service,
  timeout: 5000,
});

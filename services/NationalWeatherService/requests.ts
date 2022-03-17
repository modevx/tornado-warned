import { AXIOS_CONFIG } from "./config";
import { NWS_API_PATHS } from "./paths";

export const fetchActiveAlerts = async () => {
  return await AXIOS_CONFIG.get(NWS_API_PATHS.activeAlerts);
};

import { AXIOS_CONFIG } from "./config";
import { NWS_API_PATHS } from "./paths";

export const fetchActiveAlerts = async () => {
  return await AXIOS_CONFIG.get(NWS_API_PATHS.activeAlerts);
};

export const fetchTestAlerts = async () => {
  const raw = await AXIOS_CONFIG.get(NWS_API_PATHS.testAlerts);
  const features = await raw.data.features;
  return await features.map((alert) => {
    const { areaDesc, event } = alert.properties;
    return { areaDesc, event };
  });

  // return features.map((alert) => {
  //   const { areaDesc, event } = alert;

  //   return {
  //     areaDesc,
  //     event,
  //   };
  // });
};

// {
//   transformResponse: async (data) => {
//     await data.data.features[0];
//   },
// }

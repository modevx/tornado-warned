import { AXIOS_CONFIG } from "./config";
import { NWS_ENDPOINTS } from "./paths";

export const fetchAlerts = async () => {};

export const fetchActiveAlerts = async () => {
	const raw = await AXIOS_CONFIG.get(NWS_ENDPOINTS.tornadoWarnings);
	const features = await raw.data.features;
	return await features.map(alert => {
		const { areaDesc, event, status, messageType, headline, instruction } =
			alert.properties;
		return { event, status, messageType, areaDesc, headline, instruction };
	});
};

export const fetchTestAlerts = async () => {
	const raw = await AXIOS_CONFIG.get(NWS_ENDPOINTS.testAlerts);
	const features = await raw.data.features;
	return await features.map(alert => {
		const { areaDesc, event, status, messageType, headline, instruction } =
			alert.properties;
		return { event, status, messageType, areaDesc, headline, instruction };
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

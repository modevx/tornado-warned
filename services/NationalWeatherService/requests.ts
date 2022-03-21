import {
	API_PATHS as URLS,
	AXIOS_CONFIG as NWS,
	QUERY_PARAMS as PARAMS,
} from "../NationalWeatherService";

export const fetchAlerts = async endpoint => {
	const raw = await NWS.get(endpoint);
	const features = await raw.data.features;
};

export const fetchActiveAlerts = async () => {
	const raw = await NWS.get(URLS.tornadoWarnings);
	const features = await raw.data.features;
	return await features.map(alert => {
		const { areaDesc, event, status, messageType, headline, instruction } =
			alert.properties;
		return { event, status, messageType, areaDesc, headline, instruction };
	});
};

export const fetchTornadoWarningsTest = async () => {
	const raw = await NWS.get(URLS.testTornadoWarnings);
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

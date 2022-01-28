import axios from "axios";

export const getAlerts = async axios_config => {
	try {
		const nwsResponse = await axios(axios_config);
		const alerts = await nwsResponse.data.features;
		return alerts;
	} catch (error) {
		console.log(error);
	}
};

import { MAP_SERVER_CLIENT } from "./config";

export const getSpcConvectiveOutlooks = async () => {
	const res = await MAP_SERVER_CLIENT.get("/layers?f=json");
	return res.data.layers;
};

export const getSpcDay1ConvectiveOutlook = async () => {
	const res = await MAP_SERVER_CLIENT.get("/1?f=json");
	return res.data;
};

import { SWDI_CLIENT } from "./config";

// const AxiosResponse = {
// 	data: {},
// 	status: "",
// 	statusText: "",
// 	headers: {},
// 	config: {},
// 	request: {},
// };

export const getProductById = async ({ outputFormat, dataset, id }) => {
	// try {
	const res = await SWDI_CLIENT.get(`/${outputFormat}/${dataset}/id=${id}`);
	return res.data;
	// } catch (error) {
	// 	throw new Error(`>> ERROR FETCHING SWDI PRODUCT BY ID:\n${error}`);
	// }
};

export const getProduct = async ({
	outputFormat,
	dataset,
	dateRange,
	options = {},
}) => {
	try {
		const res = await SWDI_CLIENT.get(
			`/${outputFormat}/${dataset}/${dateRange}`,
			{
				params: { ...options },
			}
		);
		return res.data;
	} catch (error) {
		throw new Error(`>> ERROR FETCHING SWDI PRODUCT:\n${error}`);
	}
};

export const getPeriodOfRecord = async ({ dataset }) => {
	return await SWDI_CLIENT.get(`/json/${dataset}/periodOfRecord`);
};

export const getDatasetInventory = async ({ outputFormat, dataset }) => {
	return await SWDI_CLIENT.get(`/${outputFormat}/${dataset}:inv`);
};
export const getAllDatasetInventory = async ({ outputFormat, dataset }) => {
	return await SWDI_CLIENT.get(`/${outputFormat}/${dataset}:inv`);
};
export const getByDataRange = async ({
	outputFormat,
	dataset,
	dateRange,
}) => {};
export const getWithLimit = async ({ outputFormat, dataset }) => {};

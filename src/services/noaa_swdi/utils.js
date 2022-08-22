import { BASE_URL, DATASET, OUTPUT_FORMAT } from "./constants";

const AxiosRequestConfig = {
	method: "get", // default
	baseUrl: "",
	url: "",
	params: {},
};

// path options (numResults, startRow) & queryParams get MANUALLY appended to endpoint
export const createSwdiEndpoint = ({
	method = "get",
	outputFormat,
	dataset,
	dateRange,
}) => {
	const request = {};

	return `${BASE_URL}/${outputFormat}/${dataset}/${dateRange}`;
};

export const createSwdiRequest = ({ requestOptions }) => {
	const defaultConfig = { method: "get", baseUrl: BASE_URL };
	return Object.assign(defaultConfig, requestOptions);
};

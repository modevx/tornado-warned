import axios from "axios";

export const createHTTPClient = ({ baseURL, timeout = 5000 }) => {
	return axios.create({
		baseURL,
		timeout,
	});
};

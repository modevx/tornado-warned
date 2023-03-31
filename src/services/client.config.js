import axios from "axios";

export const createAxiosClient = ({ baseURL, timeout }) => {
	return axios.create({
		baseURL,
		timeout,
	});
};

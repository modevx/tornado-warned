export const fetchFromService = async (httpClient, path = "", options = {}) => {
	const response = await httpClient.get(path, options);
	return await response.data;
};

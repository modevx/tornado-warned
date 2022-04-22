export const fetchFromService = async (clientInstance, endpoint) => {
	const response = await clientInstance.get(endpoint);
	return await response.data;
};

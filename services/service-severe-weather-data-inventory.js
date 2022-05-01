import { SEVERE_WEATHER_DATA_INVENTORY as AXIOS } from "./https-client-config";
import { SEVERE_WEATHER_DATA_INVENTORY as ENDPOINTS } from "./endpoints";
import { fetchFromService } from "./base-request";

const fetchTornadoVortexSignatures = async (dateRange) => {
	return await fetchFromService(
		AXIOS,
		ENDPOINTS.tornado_vortx_signatures_json,
		dateRange
	);
};

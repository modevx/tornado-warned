import { SEVERE_WEATHER_DATA_INVENTORY as AXIOS } from "./constants/axios";
import { SEVERE_WEATHER_DATA_INVENTORY as ENDPOINTS } from "./constants/endpoints";
import { fetchFromService } from "./base-request";

const fetchTornadoVortexSignatures = async dateRange => {
	return await fetchFromService(
		AXIOS,
		ENDPOINTS.tornado_vortx_signatures_json,
		dateRange
	);
};

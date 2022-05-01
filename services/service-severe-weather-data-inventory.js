import { SEVERE_WEATHER_DATA_INVENTORY as CLIENT } from "./https-client-config";
import { SEVERE_WEATHER_DATA_INVENTORY as ENDPOINTS } from "./endpoints";
import { fetchFromService } from "./http-client-base-request";

const fetchTornadoVortexSignatures = async (dateRange) => {
	return await fetchFromService(
		CLIENT,
		ENDPOINTS.tornado_vortx_signatures_json,
		dateRange
	);
};

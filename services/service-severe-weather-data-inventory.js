import {
	SEVERE_WEATHER_DATA_INVENTORY as CLIENT,
	fetchFromService,
} from "./client";
import { SEVERE_WEATHER_DATA_INVENTORY as ENDPOINTS } from "./endpoints";

const fetchTornadoVortexSignatures = async (dateRange) => {
	return await fetchFromService(
		CLIENT,
		ENDPOINTS.tornado_vortx_signatures_json,
		dateRange
	);
};

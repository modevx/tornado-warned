import {
	SEVERE_WEATHER_DATA_INVENTORY,
	getFromService,
} from "services/http-client.js";
import { ENDPOINTS } from "services/severe-weather-data-inventory";

const fetchTornadoVortexSignatures = async (dateRange) => {
	return await getFromService(
		SEVERE_WEATHER_DATA_INVENTORY,
		ENDPOINTS.tornado_vortx_signatures_json,
		dateRange
	);
};

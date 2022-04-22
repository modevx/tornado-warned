import { SEVERE_WEATHER_DATA_INVENTORY as AXIOS } from "./constants/axios";
import { SEVERE_WEATHER_DATA_INVENTORY as ENDPOINTS } from "./constants/endpoints";

const fetchFromSevereWeatherDataInventory = async endpoint => {
	const raw = await AXIOS.get(endpoint);
	return await raw.data.features;
};

const fetchTornadoVortexSignatures = async dateRangeString => {
	return await fetchFromSevereWeatherDataInventory(
		`${ENDPOINTS.tornado_vortx_signatures_json}/${dateRangeString}`
	);
};

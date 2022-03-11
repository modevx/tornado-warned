// SEVERE WEATHER DATABASE
// baseURL: https://www.ncdc.noaa.gov/swdiws/{outputFormat}/{dataset}/{dateRange}
import Axios from "axios";

const returnSWDIAxiosInstance = () =>
	Axios.create({ method: "get", baseURL: "https://www.ncdc.noaa.gov/swdiws" });

export const getSWDI = (url: string) => {
	const axios = returnSWDIAxiosInstance();
	return axios.get(url);
};

const getSWDIasJSON = (dateRange: string) => {
	return getSWDI(`/json/nx3tvs/${dateRange}`);
};

// export const getTornadoVortexSignatures = () => {
// 	return getSWDITornadoVortexSignaturesInRange();
// };

// SEVERE WEATHER DATABASE
// baseURL: https://www.ncdc.noaa.gov/swdiws/{outputFormat}/{dataset}/{dateRange}
import Axios from "axios";

const returnSWDIAxiosInstance = () =>
  Axios.create({ method: "get", baseURL: "https://www.ncdc.noaa.gov/swdiws" });

export const getSWDI = (urlString) => {
  const axios = returnSWDIAxiosInstance();
  return axios.get(urlString);
};

const getSWDIasJSON = (dateRangeString) => {
  return getSWDI(`/json/nx3tvs/${dateRangeString}`);
};

// export const getTornadoVortexSignatures = () => {
// 	return getSWDITornadoVortexSignaturesInRange();
// };

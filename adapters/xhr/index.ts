import Axios from "axios";

const returnAxiosInstanceForNWS = () =>
	Axios.create({ method: "get", baseURL: "https://api.weather.gov" });

const returnAxiosInstanceForSWDI = () =>
	Axios.create({ method: "get", baseURL: "https://www.ncdc.noaa.gov/swdiws" });

export const getNWS = (url: string) => {
	const axios = returnAxiosInstanceForNWS();
	return axios.get(url);
};

export const getSWDI = (url: string) => {
	const axios = returnAxiosInstanceForSWDI();
	return axios.get(url);
};

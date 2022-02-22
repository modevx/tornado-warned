import axios from "axios";
import { monthConfig } from "./axiosConfigs";

const defaultYear = new Date().getFullYear();
// * account for 0-indexed months in Date object
const defaultMonth = new Date().getMonth() + 1;

export const getTVS = async (year = defaultYear, mo = defaultMonth) => {
	const config = monthConfig(year, mo);

	try {
		const res = await axios(config);
		const tvs = await res.data.features;

		return tvs;
	} catch (error) {
		console.log(error);
		throw new Error(">> ERROR: getTVSMonth() >>\n ", error);
	}
};

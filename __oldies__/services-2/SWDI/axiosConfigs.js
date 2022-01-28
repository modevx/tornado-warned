import { formatYYYYMMDD } from "../../util_funcs/formatYYYYMMDD";

export const monthConfig = (yr, mo) => {
	// account for Date object's zero-based months
	const start = formatYYYYMMDD(new Date(yr, mo - 1));
	const end = formatYYYYMMDD(new Date(yr, mo));

	// console.log(`monthConfig | start: ${start}`);
	// console.log(`monthConfig | end: ${end}`);

	return {
		method: "get",
		url: `https://www.ncdc.noaa.gov/swdiws/geojson/nx3tvs/${start}:${end}`,
		headers: {},
	};
};
// ** NOTE: might not need this with the 31-day max date range still in place
export const yearConfig = (yr, mo) => {
	// account for Date object's zero-based months
	const start = formatYYYYMMDD(new Date(yr, mo));
	const end = formatYYYYMMDD(new Date(yr, mo + 1));

	// console.log(`yearConfig | start: ${start}`);
	// console.log(`yearConfig | end: ${end}`);

	return {
		method: "get",
		url: `https://www.ncdc.noaa.gov/swdiws/geojson/nx3tvs/${start}:${end}`,
		headers: {},
	};
};

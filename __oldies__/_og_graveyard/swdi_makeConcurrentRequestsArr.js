const axios = require('axios');
// import { formatToYYYYMMDD } from '../../utils_eph/date_formatDateToYYYYmmdd';

export const concurrentRequestsArr = (dataset, year) => {
	const formatToYYYYMMDD = (date) => {
		return date.toISOString().slice(0, 10).split('-').join('');
	};

	let stopDate;
	let concurrentRequestsArray = [];

	if (year < new Date().getFullYear()) {
		stopDate = new Date(year, 11, 31);
	} else {
		stopDate = new Date(year, new Date().getMonth(), new Date().getDate());
	}

	for (let i = 0; i <= stopDate.getMonth(); i++) {
		let rangeStart = new Date(year, i);
		let rangeEnd = new Date(year, i + 1);

		concurrentRequestsArray.push(() => {
			return axios.get(
				`https://www.ncdc.noaa.gov/swdiws/json/${dataset}/${formatToYYYYMMDD(
					rangeStart
				)}:${formatToYYYYMMDD(rangeEnd)}`
			);
		});

		// concurrentRequestsArray.push({
		// 	dataset: dataset,
		// 	start: formatToYYYYMMDD(rangeStart),
		// 	start: rangeStart,
		// 	end: formatToYYYYMMDD(rangeEnd),
		// 	end: rangeEnd,
		// });

		// rangeStart.setMonth(rangeStart.getMonth() + 1);
	}

	// console.log(concurrentRequestsArray);
	return concurrentRequestsArray;
};

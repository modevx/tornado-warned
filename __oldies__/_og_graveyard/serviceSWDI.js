// #region ------ SEVERE WEATHER DATA INVENTORY ----------
// API: National Center for Environmental Information
// API Base URL: https://www.ncdc.noaa.gov/swdiws/
// #endregion --------------------------------------------
// #region ----- IMPORTS -----
// import axios from 'axios';
import { concurrentRequestsArr } from './service_utils/swdi_makeConcurrentRequestsArr.js';
import { getUniqueObjects } from '../utils_eph/array_uniqueObjectArrayByKeyValue';
// #endregion

export const getAnnualDatasetEvents = async (dataset, year) => {
	// #region 1. ----- CREATE 31-DAY SWDI CALLS -----
	// concurrentRequestsArr(dataset, year);
	const monthRequests = concurrentRequestsArr(dataset, year);
	// #endregion

	// #region 2. ----- GET YEAR'S DATA -----
	Promise.all(monthRequests.map((reqFunc) => reqFunc()))
		// #endregion

		// #region 3. ----- ASSIGN RESPONSES TO GIVEN MONTH -----
		// #region >>> NOTES >>>
		// -- NOTE: a new event is created for every recorded
		// point (SHAPE) along a tornado's path (RANGE) which
		// generates a shitload of data that we don't need right away

		// -- SOLUTION: to minimize dead data, I made an array util,
		// createUniqueObjArr(array, key) that returns just ONE
		// event for each tornado based on it's CELL_ID value
		// createUniqueObjArr() works for any [{obj}] tho
		// #endregion
		.then((res) => {
			const months = [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December',
			];

			let monthEvents = new Map();

			for (let i = 0; i < res.length; i++) {
				const uniqueObjArr = getUniqueObjects(res[i].data.result, 'CELL_ID');
				monthEvents.set(months[i], uniqueObjArr);
			}

			console.log('>>> monthEvents <<<', monthEvents);
		})
		.catch((e) => console.log(e));
	// #endregion

	// #region 4. ----- CREATE *UNIQUE* MONTHLY DATASET ARRAYS -----
	// #region >>> NOTES >>>
	// 1 TVS per event (just storing event metadata for now)
	// ** will fetch event-specific data as needed
	// #endregion
	// .then((allTornadoEvents) => createUniqueObjArr(allTornadoEvents, 'CELL_ID'))
	// .then((uniqueEvents) => sortArrayAscendingByKey(uniqueEvents, 'CELL_ID'))
	// #endregion

	// #region 5. ----- SAVE UNIQUE MONTHLY DATA FOR THE YEAR TO LOCALSTORAGE (for now) -----
	// .then((sortedUniqueTornadoEvents) => {
	// 	console.log(
	// 		'SORTED UNIQUE TVSs',
	// 		JSON.stringify(sortedUniqueTornadoEvents)
	// 	);
	// 	localStorage.setItem(
	// 		'YTD_Tornado_Events',
	// 		JSON.stringify(sortedUniqueTornadoEvents)
	// 	);
	// });
	// #endregion
};

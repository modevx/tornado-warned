import { fetchTVSforMonth } from './fetchTVSforMonth';
import { createMonthRangeDates } from './createDateRange';
import { uniqueObjArr } from '../../utils/uniqueObjArr';
import { parseGeoJsonCoords } from './parseGeoJsonCoords';

// PARAMS: [month, year] from <FormGetTVSByMonth>
// *note: get converted into [yyyymmdd:yyyymmdd] endpoint 'dateRange'
// FUNCTION: fetches TORNADO VORTEX SIGNATURE events from SEVERE WEATHER DATA INVENTORY
// RETURNS: GeoJSON coordinates
export const fetchGeoJsonCoordsForMonth = async (year, month) => {
	// const dateRange = createMonthRangeDates(year, month);
	// const tvsForMonth = await fetchTVSforMonth(dateRange.start, dateRange.end);
	// localStorage.setItem('tvs_results', JSON.stringify(tvsForMonth));
	// const uniqueTVS = createUniqueObjArr(tvsForMonth, 'CELL_ID');
	// const geoJsonCoords = await parseGeoJsonCoords(uniqueTVS);
	// return geoJsonCoords;
};

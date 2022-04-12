import Axios from "axios";

// ***************************************
// ** AXIOS CONFIG
// ***************************************
const DEFAULT_TIMEOUT = 5000;

const AXIOS = Axios.create({
	baseURL: SWDI.baseURL,
	timeout: DEFAULT_TIMEOUT,
});
// ***************************************
// ** ENDPOINTS
// ***************************************
const QUERY_PARAMS = Object.freeze({
	outputFormat: {
		json: "/json",
		csv: "/csv",
		xml: "/xml",
		shp: "/shp",
		kmz: "/kmz",
	},
	dataset: {
		tornado_vortex_signatures: 'nx3tvs',
		mesocyclone_signatures, 'nx3meso',
		hail: 'nx3hail',
		storm_cell_structure: 'nx3structure',
		prelim_local_storm_reports: 'plsr',
		storm_warnings: 'warn',
		dataset_inventory: ':inv'
	},
	optionalParams: {
		bounding_box: 'bbox',
		degree_tile: 'tile',
		statistics: 'stat',
		results_count: 'count',
		daily_feature_counts: 'tilesum',
		column_value_count: 'countGroupBy',
		filter: 'filterBy',
		filter_many: 'filterBy[]'
	},
	id: 'id'
});
const ENDPOINTS = Object.freeze({
	baseURL: "https://www.ncdc.noaa.gov/swdiws",
});
// ***************************************
// ** REQUESTS
// ***************************************
const axiosFetchSWDI = async endpoint => {
	const raw = await AXIOS.get(endpoint);
	return await raw.data.features;
};
// -- TORNADO VORTEX SIGNATURES
const fetchTornadoVortexSignaturesFromSWDI = async dateRangeString => {
	return axiosFetchSWDI(`/json/nx3tvs/${dateRangeString}`);
};

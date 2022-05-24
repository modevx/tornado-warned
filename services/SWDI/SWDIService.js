const SEVERE_WEATHER_DATA_INVENTORY = Object.freeze({
	base_url: "https://www.ncdc.noaa.gov/swdiws",
	tornado_vortx_signatures_json: "/json/nx3tvs",
	mesocyclone_signatures_json: "/json/nx3meso",
	hail_signatures_json: "/json/nx3hail",
	storm_cell_structure_information_json: "/json/nx3structure",
});

const SEVERE_WEATHER_DATA_INVENTORY = Object.freeze({
	outputFormat: {
		json: "/json",
		csv: "/csv",
		xml: "/xml",
		shp: "/shp",
		kmz: "/kmz",
	},
	dataset: {
		tornado_vortex_signatures: "nx3tvs",
		mesocyclone_signatures: "nx3meso",
		hail: "nx3hail",
		storm_cell_structure: "nx3structure",
		prelim_local_storm_reports: "plsr",
		storm_warnings: "warn",
		dataset_inventory: ":inv",
	},
	optionalParams: {
		bounding_box: "bbox",
		degree_tile: "tile",
		statistics: "stat",
		results_count: "count",
		daily_feature_counts: "tilesum",
		column_value_count: "countGroupBy",
		filter: "filterBy",
		filter_many: "filterBy[]",
	},
	id: "id",
});

const SEVERE_WEATHER_DATA_INVENTORY = axios.create({
	baseURL: "https://www.ncdc.noaa.gov/swdiws",
	timeout: DEFAULT_TIMEOUT,
});

const fetchTornadoVortexSignatures = async (dateRange) => {};

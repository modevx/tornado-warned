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

export { SEVERE_WEATHER_DATA_INVENTORY };

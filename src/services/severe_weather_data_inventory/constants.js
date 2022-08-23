export const DATASET = Object.freeze({
	nx3tvs: "nx3tvs", // point
	nx3meso: "nx3meso", // point
	nx3hail: "nx3hail", // point
	nx3structure: "nx3structure", // point
	plsr: "plsr", // point
	warn: "warn", // polygon
});

export const OUTPUT_FORMAT = Object.freeze({
	json: "json",
	csv: "csv",
	xml: "xml",
	shp: "shp",
	kmz: "kmz",
});

export const QUERY_PARAMS = Object.freeze({
	bbox: "bbox",
	tile: "tile",
	// supported datasets: json, csv, xml
	stat: "stat",
	count: "count",
	tilesum: "tilesum",
	countGroupBy: "countGroupBy",
	filterBy: "filterBy",
	filterByArr: "filterBy[]",
});

export const TEST_ARGS = Object.freeze({
	productById: {
		outputFormat: OUTPUT_FORMAT.json,
		dataset: DATASET.plsr,
		id: "1754336",
	},
	products: {
		outputFormat: OUTPUT_FORMAT.json,
		dataset: DATASET.plsr,
		dateRange: "20211210:20211212",
	},
	periodOfRecord: {
		outputFormat: OUTPUT_FORMAT.json,
		dataset: DATASET.nx3tvs,
	},
});

export const OUTPUT_FORMAT = Object.freeze({
	json: "json",
	csv: "csv",
	xml: "xml",
	shp: "shp",
	kmz: "kmz",
});

export const DATASET = Object.freeze({
	nx3tvs: "nx3tvs", // point
	nx3meso: "nx3meso", // point
	nx3hail: "nx3hail", // point
	nx3structure: "nx3structure", // point
	plsr: "plsr", // point
	warn: "warn", // polygon
});

export const OPTIONAL_PATHS = Object.freeze({
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

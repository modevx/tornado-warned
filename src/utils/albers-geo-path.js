import { geoAlbers, geoPath } from "d3-geo";

const projection = geoAlbers();

export const albersGeoPath = geoPath(projection);

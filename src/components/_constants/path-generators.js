import { geoAlbers, geoPath } from "d3-geo";

export const albersPathGenerator = geoPath(geoAlbers());

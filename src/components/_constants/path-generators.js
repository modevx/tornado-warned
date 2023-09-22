import rewind from "@turf/rewind";
import { geoAlbers, geoPath } from "d3-geo";

export const pathGenerator = geoPath(geoAlbers());

// needed for alert and outlook geometry as it's winding is the opposite of that used in D3
export const rewindPathGenerator = (feature, options) =>
  pathGenerator(rewind(feature, { reverse: true }), options);

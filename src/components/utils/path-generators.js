import rewind from "@turf/rewind";
import { geoAlbers, geoPath } from "d3-geo";

export const pathGenerator = geoPath(geoAlbers());

// needed for alert and outlook geometries because they use reverse windings
export const rewindPathGenerator = (feature, options) =>
  pathGenerator(rewind(feature, { reverse: true }), options);

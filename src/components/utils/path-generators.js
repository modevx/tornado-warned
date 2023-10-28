import rewind from "@turf/rewind";
import { geoAlbers, geoPath } from "d3-geo";

export const pathGenerator = geoPath(geoAlbers());

// alert and outlook geometries require reverse windings
export const rewindPathGenerator = (feature, options) =>
  pathGenerator(rewind(feature, { reverse: true }), options);

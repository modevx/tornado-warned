import rewind from "@turf/rewind";
import { geoAlbers, geoPath } from "d3-geo";

export const pathGenerator = geoPath(geoAlbers());

export const rewindPathGenerator = (feature, options) =>
	pathGenerator(rewind(feature, { reverse: true }), options);

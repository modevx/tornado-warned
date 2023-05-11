import rewind from "@turf/rewind";

import { albersGeoPath } from "utils";

export const AlbersSvgPathReverse = ({ feature, ...styles }) => {
	return (
		<path d={albersGeoPath(rewind(feature, { reverse: true }))} {...styles} />
	);
};

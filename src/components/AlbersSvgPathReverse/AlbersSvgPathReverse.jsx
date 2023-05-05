import rewind from "@turf/rewind";

import { albersGeoPath } from "utils";

export const AlbersSvgPathReverse = ({ feature, ...rest }) => {
	return (
		<path d={albersGeoPath(rewind(feature, { reverse: true }))} {...rest} />
	);
};

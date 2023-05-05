import { albersGeoPath } from "utils";

export const AlbersSvgPath = ({ feature, ...rest }) => {
	return <path d={albersGeoPath(feature)} {...rest} />;
};

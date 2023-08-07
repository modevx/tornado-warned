import * as topojson from "topojson-client";
import { geoAlbers, geoPath } from "d3-geo";

import AlbersTopoJSONMap from "./_constants/albers-topojson-map.json";

const albersProjection = geoAlbers();
const albersGeoPath = geoPath(albersProjection);

export const USStateMap = ({ children }) => {
	const { features: stateFeatures } = topojson.feature(
		AlbersTopoJSONMap,
		"states"
	);

	return (
		<svg viewBox='0 -60 975 610' xmlns='http://www.w3.org/2000/svg'>
			<path
				d={albersGeoPath({
					type: "FeatureCollection",
					features: stateFeatures,
				})}
				stroke='white'
				fill='grey'
			/>

			{children}
		</svg>
	);
};

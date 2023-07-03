import * as topojson from "topojson-client";
import { geoAlbers, geoPath } from "d3-geo";

import AlbersTopoJSONMap from "./_constants/albers-topojson-map.json";

export const USMap = ({ children }) => {
	const { features } = topojson.feature(AlbersTopoJSONMap, "states");
	const albersProjection = geoAlbers();
	const albersGeoPath = geoPath(albersProjection);

	return (
		<svg viewBox='0 -60 975 609.375' xmlns='http://www.w3.org/2000/svg'>
			<g>
				{features.map((feature) => (
					<path
						key={feature.properties.name}
						d={albersGeoPath(feature)}
						stroke='white'
					/>
				))}
			</g>
			{children}
		</svg>
	);
};

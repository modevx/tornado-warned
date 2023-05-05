import React from "react";
import * as topojson from "topojson-client";

import { albersGeoPath } from "utils";
import AlbersBasemap from "constants/albers-topojson-map";

// TODO: add toggle for "counties"

export const AlbersStateMap = ({ children }) => {
	const { features } = topojson.feature(AlbersBasemap, "states");

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

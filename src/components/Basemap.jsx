import React from "react";
import { geoAlbers, geoPath } from "d3-geo";
import * as topojson from "topojson-client";
import AlbersBasemap from "constants/albers-topojson-map";
import { LinearGradient } from "./LinearGradient";

const projection = geoAlbers();
const pathGen = geoPath(projection);

export const Basemap = ({ children }) => {
	const [basemap, setBasemap] = React.useState();

	React.useEffect(() => {
		const geojsonAlbers = topojson.feature(AlbersBasemap, "states");

		setBasemap(geojsonAlbers);
	}, []);

	return (
		<svg viewBox='0 0 975 610' fill="url('#linear-gradient')">
			<LinearGradient />
			{basemap &&
				basemap.features.map((feature) => {
					return (
						<path
							key={feature.properties.name}
							d={pathGen(feature)}
							stroke='white'
						/>
					);
				})}
			{children}
		</svg>
	);
};

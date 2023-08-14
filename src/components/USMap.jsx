import { useState } from "react";
import * as topojson from "topojson-client";
import { geoAlbers, geoPath } from "d3-geo";

import AlbersTopoJSONMap from "./_constants/albers-topojson-map.json";

const albersProjection = geoAlbers();
const albersGeoPath = geoPath(albersProjection);

// export const USMap = ({ children, d3GeoPath = albersGeoPath }) => {
export const USMap = ({ children }) => {
	return (
		<svg viewBox='0 -60 975 610' xmlns='http://www.w3.org/2000/svg'>
			<NationFeatures d3GeoPath={albersGeoPath} />

			{children}
		</svg>
	);
};

const NationFeatures = ({ d3GeoPath }) => {
	const { features } = topojson.feature(AlbersTopoJSONMap, "nation");

	return (
		<path d={d3GeoPath(features)} strokeWidth={1} stroke='white' fill='grey' />
	);
};

const StateFeatures = ({ d3GeoPath }) => {
	const { features } = topojson.feature(AlbersTopoJSONMap, "states");

	return (
		<path
			d={d3GeoPath(features)}
			strokeWidth={0.5}
			stroke='white'
			fill='grey'
		/>
	);
};

const CountiesFeatures = ({ d3GeoPath }) => {
	const { features } = topojson.feature(AlbersTopoJSONMap, "counties");

	return (
		<path
			d={d3GeoPath(features)}
			strokeWidth={0.25}
			stroke='white'
			fill='grey'
		/>
	);
};

import { albersPathGenerator } from "components/_constants/path-generators";
import {
	albersNation as nation,
	albersStatesMeshed as states,
	albersCountiesMeshed as counties,
	countyWarningAreasMeshed as countyWarningAreas,
	publicForecastZonesMeshed as publicForecastZones,
} from "./_constants/map-features";

// TODO: add County Warning Area and Zone features

// console.log("CONUS States >>\n", states);
// console.log("CONUS CWAs >>\n", counties);

export const Basemap = ({
	pathGen = albersPathGenerator,
	showStates = true,
	showCounties = false,
	showCWAs = false,
	showPFZs = false,
	children,
}) => {
	return (
		<svg viewBox='0 -60 975 610' xmlns='http://www.w3.org/2000/svg'>
			<path d={pathGen(nation)} strokeWidth={2} stroke='white' fill='grey' />
			<MapFeatures
				isVisible={showStates}
				pathGen={pathGen}
				features={states}
				strokeWidth={1.25}
			/>
			<MapFeatures
				isVisible={showCounties}
				pathGen={pathGen}
				features={counties}
				strokeWidth={0.25}
			/>
			<MapFeatures
				isVisible={showCWAs}
				pathGen={pathGen}
				features={countyWarningAreas}
				strokeWidth={0.5}
			/>
			<MapFeatures
				isVisible={showPFZs}
				pathGen={pathGen}
				features={publicForecastZones}
				strokeWidth={0.5}
			/>
			{children}
		</svg>
	);
};

const MapFeatures = ({ pathGen, features, isVisible, ...pathArgs }) => {
	return (
		<>
			{isVisible && (
				<path
					d={pathGen(features)}
					{...pathArgs}
					stroke='white'
					strokeLinejoin='round'
					strokeLinecap='round'
					fill='none'
				/>
			)}
		</>
	);
};

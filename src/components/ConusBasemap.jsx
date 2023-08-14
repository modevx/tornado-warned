import { albersPathGenerator } from "components/_constants/path-generators";
import {
	albersNation,
	albersStates,
	albersCountiesMeshed,
	countyWarningAreas,
	countyWarningAreasMeshed,
} from "./_constants/map-features";

// TODO: add County Warning Area and Zone features

console.log("CONUS States >>\n", albersStates);
console.log("CONUS CWAs >>\n", albersCountiesMeshed);

export const ConusBasemap = ({
	children,
	pathGen = albersPathGenerator,
	showStates = true,
	showCounties = false,
	showCWAs = false,
	// showZones= false
}) => {
	return (
		<svg viewBox='0 -60 975 610' xmlns='http://www.w3.org/2000/svg'>
			<path
				d={pathGen(albersNation)}
				strokeWidth={2}
				stroke='white'
				fill='grey'
			/>
			<MapFeatures
				pathGen={pathGen}
				features={albersStates}
				strokeWidth={1.25}
				isDisplayed={showStates}
			/>
			<MapFeatures
				pathGen={pathGen}
				features={albersCountiesMeshed}
				strokeWidth={0.25}
				isDisplayed={showCounties}
			/>
			<MapFeatures
				pathGen={pathGen}
				features={countyWarningAreasMeshed}
				strokeWidth={0.5}
				isDisplayed={showCWAs}
			/>
			{/* <MapFeatures
				pathGen={pathGen}
				features={albersCounties}
				strokeWidth={0.5}
				isDisplayed={showZones}
			/> */}
			{children}
		</svg>
	);
};

const MapFeatures = ({
	pathGen,
	features,
	isDisplayed = false,
	...pathArgs
}) => {
	return (
		<>
			{isDisplayed && (
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

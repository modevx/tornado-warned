import {
  nation,
  meshedStates,
  meshedCounties,
  meshedCountyWarningAreas,
  meshedPublicForecastZones,
} from "./geoJSON/albers-features";
import { pathGenerator } from "components/utils/path-generators";

export const Basemap = ({
  pathGen = pathGenerator,
  showStates = true,
  showCounties = false,
  showCWAs = false,
  showPFZs = false,
  children,
}) => {
  return (
    <svg
      viewBox="0 -60 975 610"
      xmlns="http://www.w3.org/2000/svg"
      className="rounded-md"
    >
      <path d={pathGen(nation)} stroke="white" fill="#333" />
      <MapFeatures
        isVisible={showStates}
        features={meshedStates}
        pathGen={pathGen}
        strokeWidth={0.25}
      />
      <MapFeatures
        isVisible={showCounties}
        features={meshedCounties}
        pathGen={pathGen}
        strokeWidth={0.25}
      />
      <MapFeatures
        isVisible={showCWAs}
        features={meshedCountyWarningAreas}
        pathGen={pathGen}
        strokeWidth={0.5}
      />
      <MapFeatures
        isVisible={showPFZs}
        features={meshedPublicForecastZones}
        pathGen={pathGen}
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
          stroke="white"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
          {...pathArgs}
        />
      )}
    </>
  );
};

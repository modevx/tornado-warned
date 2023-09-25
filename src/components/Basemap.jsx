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
        pathGen={pathGen}
        features={meshedStates}
        strokeWidth={0.25}
      />
      <MapFeatures
        isVisible={showCounties}
        pathGen={pathGen}
        features={meshedCounties}
        strokeWidth={0.25}
      />
      <MapFeatures
        isVisible={showCWAs}
        pathGen={pathGen}
        features={meshedCountyWarningAreas}
        strokeWidth={0.5}
      />
      <MapFeatures
        isVisible={showPFZs}
        pathGen={pathGen}
        features={meshedPublicForecastZones}
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
          stroke="white"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
        />
      )}
    </>
  );
};

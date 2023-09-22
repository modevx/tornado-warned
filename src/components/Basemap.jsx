import {
  nation,
  meshedStates,
  meshedCounties,
  meshedCountyWarningAreas,
  meshedPublicForecastZones,
} from "./geoJSON/albers-features";
import { pathGenerator } from "components/_constants/path-generators";

export const Basemap = ({
  showStates = true,
  showCounties = false,
  showCWAs = false,
  showPFZs = false,
  children,
}) => {
  return (
    <svg viewBox="0 -60 975 610" xmlns="http://www.w3.org/2000/svg">
      <path d={pathGenerator(nation)} stroke="white" fill="#333" />
      <MapFeatures
        isVisible={showStates}
        pathGen={pathGenerator}
        features={meshedStates}
        strokeWidth={0.25}
      />
      <MapFeatures
        isVisible={showCounties}
        pathGen={pathGenerator}
        features={meshedCounties}
        strokeWidth={0.25}
      />
      <MapFeatures
        isVisible={showCWAs}
        pathGen={pathGenerator}
        features={meshedCountyWarningAreas}
        strokeWidth={0.5}
      />
      <MapFeatures
        isVisible={showPFZs}
        pathGen={pathGenerator}
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

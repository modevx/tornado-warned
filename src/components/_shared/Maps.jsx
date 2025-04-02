import {
  albersGeoPath,
  albersUsaGeoPath,
  albersCountiesGeoJson,
  albersStatesGeoJson,
} from "utils/geometry";

export const ConusCountiesMap = ({ children }) => {
  return (
    <Basemap features={albersCountiesGeoJson} pathGen={albersGeoPath}>
      {children}
    </Basemap>
  );
};

export const ConusStatesMap = ({ children }) => {
  return (
    <Basemap features={albersStatesGeoJson} pathGen={albersGeoPath}>
      {children}
    </Basemap>
  );
};

export const UsaCountiesMap = ({ children }) => {
  return (
    <Basemap features={albersCountiesGeoJson} pathGen={albersUsaGeoPath}>
      {children}
    </Basemap>
  );
};

export const UsaStatesMap = ({ children }) => {
  return (
    <Basemap features={albersStatesGeoJson} pathGen={albersUsaGeoPath}>
      {children}
    </Basemap>
  );
};

const Basemap = ({ children, features, pathGen }) => {
  return (
    <svg viewBox="0 -60 975 610" xmlns="http://www.w3.org/2000/svg">
      <path d={pathGen(features)} stroke="white" fill="grey" />

      {children}
    </svg>
  );
};

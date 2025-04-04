import {
  albersGeoPath,
  albersUsaGeoPath,
  albersCountiesGeoJson,
  albersStatesGeoJson,
} from "utils/geometry";

export const ConusCountiesMap = ({ children, pathGen = albersGeoPath }) => {
  return (
    <Basemap features={albersCountiesGeoJson} pathGen={pathGen}>
      {children}
    </Basemap>
  );
};

export const ConusStatesMap = ({ children, pathGen = albersGeoPath }) => {
  return (
    <Basemap features={albersStatesGeoJson} pathGen={pathGen}>
      {children}
    </Basemap>
  );
};

export const UsaCountiesMap = ({ children, pathGen = albersUsaGeoPath }) => {
  return (
    <Basemap features={albersCountiesGeoJson} pathGen={pathGen}>
      {children}
    </Basemap>
  );
};

export const UsaStatesMap = ({ children, pathGen = albersUsaGeoPath }) => {
  return (
    <Basemap features={albersStatesGeoJson} pathGen={pathGen}>
      {children}
    </Basemap>
  );
};

const Basemap = ({ children, features, pathGen }) => {
  return (
    <div className=" overflow-clip" style={{ overflowClipMargin: 10 }}>
      <svg viewBox="0 0 975 610" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d={pathGen(features)} stroke="white" fill="grey" />
          {children}
        </g>
      </svg>
    </div>
  );
};

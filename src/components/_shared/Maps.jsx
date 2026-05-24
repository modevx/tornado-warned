import { albersGeoPath, albersUsaGeoPath, albersCountiesGeoJson, albersStatesGeoJson, meshedCounties } from "utils/geometry";
import { Checkbox, Form } from "react-daisyui";

export const ConusCountiesMap = ({ children, pathGen = albersGeoPath }) => {
  return (
    <Basemap features={albersCountiesGeoJson} pathGen={pathGen}>
      {/* <Basemap features={{ type: "FeatureCollection", features: meshedCounties }} pathGen={pathGen}> */}
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

export const BasemapFeatureSelector = ({ showValues, onChangeHandler }) => {
  const { states, counties, cwas, pfzs } = showValues;

  return (
    <Form className="flex flex-col justify-center bg-blue-900 rounded-md p-4">
      <Form.Label title="States" htmlFor="states">
        <Checkbox className="ml-4" id="states" name="states" onChange={onChangeHandler} value={states} defaultChecked />
      </Form.Label>
      <Form.Label title="Counties" htmlFor="counties">
        <Checkbox className="ml-4" id="counties" name="counties" onChange={onChangeHandler} value={counties} />
      </Form.Label>
      <Form.Label title="CWAs" htmlFor="cwas">
        <Checkbox className="ml-4" id="cwas" name="cwas" onChange={onChangeHandler} value={cwas} />
      </Form.Label>
      <Form.Label title="PFZs" htmlFor="pfzs">
        <Checkbox className="ml-4" id="pfzs" name="pfzs" onChange={onChangeHandler} value={pfzs} />
      </Form.Label>
    </Form>
  );
};

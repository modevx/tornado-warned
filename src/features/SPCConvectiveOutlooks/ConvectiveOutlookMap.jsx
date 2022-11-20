import React from "react";
import rewind from "@turf/rewind";
import { Button, Divider, Form, Radio, ButtonGroup } from "react-daisyui";
import { geoAlbers, geoPath } from "d3-geo";
import { Basemap } from "components";
import {
  IoRainy,
  IoSkull,
  IoThunderstorm,
  IoWarningOutline,
} from "react-icons/io5";
import { BsTornado } from "react-icons/bs";
import { GiDamagedHouse } from "react-icons/gi";
import { MAYFIELD } from "./Mayfield";
import { useCategoricalOutlookQuery } from "./service";

// (1-MRGL-dark green, 2-SLGT-yellow, 3-ENH-orange, 4-MDT-red, and 5-HIGH-magenta
const dnMap = {
  2: {
    label: "storm",
    description: "> 10% chance of thunderstorms",
    abbr: "tstm",
    activeColor: "bg-[hsl(120,60%,30%)]",
    fill: "hsl(120,60%,30%)",
    stroke: "hsl(120,70%,30%)",
    icon: IoRainy,
  },
  3: {
    label: "marginal",
    description: "scattered severe storms",
    abbr: "mrgl",
    activeColor: "bg-[hsl(120,100%,50%)]",
    fill: "hsl(120,100%,50%)",
    stroke: "hsl(120,100%,50%)",
    icon: IoThunderstorm,
  },
  4: {
    label: "slight",
    description: "organized severe storms expected",
    abbr: "slgt",
    activeColor: "bg-[hsl(60,100%,50%)]",
    fill: "hsl(60,100%,30%)",
    stroke: "hsl(60,100%,50%)",
    icon: IoWarningOutline,
  },
  5: {
    label: "enhanced",
    description: "concentrated, severe storms.",
    abbr: "enh",
    activeColor: "bg-[hsl(30,100%,50%)]",
    fill: "hsl(30,100%,30%)",
    stroke: "hsl(30,100%,50%)",
    icon: GiDamagedHouse,
  },
  6: {
    label: "moderate",
    description:
      "widespread severe weather with multiple tornadoes and/or intense storms.",
    abbr: "mdt",
    activeColor: "bg-[hsl(0,100%,50%)]",
    fill: "hsl(0,100%,30%)",
    stroke: "hsl(0,100%,50%)",
    icon: BsTornado,
  },
  8: {
    label: "high",
    description:
      "severe weather outbreak with intense tornadoes or a long-lived derecho system.",
    abbr: "high",
    activeColor: "bg-[hsl(300,100%,30%)]",
    fill: "hsl(300,100%,30%)",
    stroke: "hsl(300,100%,50%)",
    icon: IoSkull,
  },
  10: {
    label: "significant",
    description:
      "severe weather outbreak with intense tornadoes or a long-lived derecho system.",
    abbr: "high",
    activeColor: "bg-[hsl(300,100%,30%)]",
    fill: "hsl(300,100%,30%)",
    stroke: "hsl(300,100%,50%)",
    icon: IoSkull,
  },
};
const projection = geoAlbers();
const pathGen = geoPath(projection);

export const ConvectiveOutlookMap = () => {
  const [outlooks, setOutlooks] = React.useState();
  const [layers, setLayers] = React.useState(MAYFIELD);
  const [outlookDay, setOutlookDay] = React.useState(0);
  const [legendState, setLegendState] = React.useState({
    storm: false,
    marginal: false,
    slight: false,
    enhanced: false,
    moderate: false,
    high: false,
  });
  const [isActiveButton, setIsActiveButton] = React.useState({
    1: true,
    2: false,
    3: false,
  });

  const handleBtnOnClick = (key) => {
    console.log("Day: ", key);

    const clearedState = {
      1: false,
      2: false,
      3: false,
    };

    setIsActiveButton({ ...clearedState, [key]: true });
    setOutlookDay(key - 1);
  };

  React.useEffect(() => {
    const getOutlooks = async () => {
      const outlooks = await Promise.all([
        fetchOutlookLayerById(1),
        fetchOutlookLayerById(9),
        fetchOutlookLayerById(17),
      ]);
      setOutlooks(outlooks);
    };
    getOutlooks();
  }, []);

  return (
    <>
      <ButtonGroup className="w-full justify-center">
        <Button
          key="day-1"
          active={isActiveButton[1]}
          onClick={() => handleBtnOnClick(1)}
        >
          1
        </Button>
        <Button
          key="day-2"
          active={isActiveButton[2]}
          onClick={() => handleBtnOnClick(2)}
        >
          2
        </Button>
        <Button
          key="day-3"
          active={isActiveButton[3]}
          onClick={() => handleBtnOnClick(3)}
        >
          3
        </Button>
      </ButtonGroup>

      <Basemap>
        {outlooks && (
          <GeoJsonSVGPathGroup
            geojsonGeometry={outlooks[outlookDay]}
            setState={setLegendState}
          />
        )}
      </Basemap>
    </>
  );
};

// -- COMPONENTS
const DashboardTile = ({ children }) => {
  return (
    <div className="p-5 bg-zinc-900 rounded-lg shadow-black shadow-lg">
      {children}
    </div>
  );
};
const GeoJsonSVGPathGroup = ({ geojsonGeometry, setState }) => {
  return (
    <g>
      {geojsonGeometry.features.map((feature, index) => {
        const {
          properties: { dn, valid, expire, idp_source },
        } = feature;
        const fLabel = dnMap[dn].label;

        return (
          <path
            d={pathGen(rewind(feature, { reverse: true }))}
            key={`${idp_source}-${dn}`}
            fill={dnMap[dn].fill}
            stroke={dnMap[dn].stroke}
            fillOpacity={0.5}
            strokeWidth={2} // `${dnMap[dn].label}`
            onMouseOver={() =>
              setState((state) => {
                return {
                  ...state,
                  [fLabel]: !state[fLabel],
                };
              })
            }
            onMouseLeave={() =>
              setState((state) => {
                return {
                  ...state,
                  [fLabel]: !state[fLabel],
                };
              })
            }
          />
        );
      })}
    </g>
  );
};

// -- LATER
// consolidate radio select groups into single "valueSet" component
// args: setValueFun, range/count
const CategoricalLegend = ({ state }) => {
  return (
    <div className="flex flex-wrap justify-center mb-5 mx-10">
      {Object.values(dnMap).map((cat, index, array) => {
        const LabelIcon = cat.icon;

        return (
          <>
            <div
              className={`flex flex-col items-center space-y-3 ${
                state[cat.label] ? cat.activeColor : ""
              }`}
            >
              <LabelIcon size={50} color={cat.stroke} />
              <span className={`text-[calc(12px+1vw)] uppercase mx-4 mb-2`}>
                {cat.label}
              </span>
            </div>
            {index < array.length ? <Divider /> : null}
          </>
        );
      })}
    </div>
  );
};
// -- FUNCTIONS
const fetchOutlookLayerById = async (layerId) => {
  const url = `https://mapservices.weather.noaa.gov/vector/rest/services/outlooks/SPC_wx_outlks/MapServer/${layerId}/query?&outFields=*&geometry=true&f=geojson`;
  const res = await fetch(url);
  return await res.json();
};

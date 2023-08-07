import rewind from "@turf/rewind";
import { geoAlbers, geoPath } from "d3-geo";

import { USStateMap, USMapLoading } from "components";
import { useCategoricalOutlookByLayerId } from "services/outlook-mapserver";

const projection = geoAlbers();
const albersGeoPath = geoPath(projection);

export const CategoricalMap = ({ layerId, styles }) => {
  const DAY_LAYER_MAP = Object.freeze({
    1: 1,
    2: 9,
    3: 17,
  });
  const { data: outlookFeatures } = useCategoricalOutlookByLayerId(
    DAY_LAYER_MAP[layerId]
  );

  return (
    <section id="convective-outlook-map">
      <CategoricalLegend styles={styles} />
      {outlookFeatures ? (
        <USStateMap>
          {outlookFeatures.map((feature) => {
            const {
              id,
              properties: { dn: categoryKey, idp_source },
            } = feature;

            return (
              <path
                key={`${idp_source}-${id}`}
                d={albersGeoPath(rewind(feature, { reverse: true }))}
                fill={styles[categoryKey].bgColor}
                opacity={0.7}
                stroke={styles[categoryKey].stroke}
                strokeWidth={4}
              />
            );
          })}
        </USStateMap>
      ) : (
        <USMapLoading loadingMessage="Outlook Loading..." />
      )}
    </section>
  );
};

const CategoricalLegend = ({ styles }) => {
  const stylesArr = Object.values(styles);

  return (
    <div className="text-xs flex justify-center mt-10 mb-4 ">
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:flex lg:justify-center">
        {stylesArr.map(({ bgColor, textColor, label }) => {
          return (
            <div
              key={label}
              style={{ backgroundColor: `${bgColor}` }}
              className="p-2 rounded"
            >
              <span
                style={{ color: `${textColor}` }}
                className="block text-black text-xs lg:text-base text-center font-bold uppercase"
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

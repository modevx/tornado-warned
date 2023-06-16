import rewind from "@turf/rewind";
import { geoAlbers, geoPath } from "d3-geo";

import { USMap } from "components/AlbersStateMap";
import { OutlookFeaturePath } from "./OutlookFeaturePath";

const projection = geoAlbers();
const albersGeoPath = geoPath(projection);

export const CategoricalOutlookMap = ({ features }) => {
  return (
    <USMap>
      {features &&
        features.map((feature) => {
          const {
            id,
            properties: { idp_source },
          } = feature;

          return (
            <OutlookFeaturePath key={`${idp_source}-${id}`} feature={feature} />
          );
        })}
    </USMap>
  );
};

// AlbersSvgPathReverse
import rewind from "@turf/rewind";

import { albersGeoPath } from "utils";

export const AlbersSvgPathReverse = ({ feature, ...styles }) => {
  return (
    <path d={albersGeoPath(rewind(feature, { reverse: true }))} {...styles} />
  );
};

// albersGeoPath
import { geoAlbers, geoPath } from "d3-geo";

const projection = geoAlbers();

export const albersGeoPath = geoPath(projection);

// CategoricalOutlookFeaturePath
import { AlbersSvgPathReverse } from "components/AlbersSvgPathReverse";
import { CATEGORICAL_OUTLOOK_FEATURE_STYLES as styles } from "features/spc-convective-outlooks/constants";

export const CategoricalOutlookFeaturePath = ({ feature }) => {
  const {
    properties: { dn },
  } = feature;

  return (
    <AlbersSvgPathReverse
      feature={feature}
      fill={styles[dn].color}
      opacity={0.7}
      stroke={styles[dn].stroke}
      strokeWidth={4}
    />
  );
};

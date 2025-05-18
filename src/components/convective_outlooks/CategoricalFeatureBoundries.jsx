import { rewindAlbersGeoPath } from "utils/geometry";
import { CAT_OUTLOOK_STYLES } from "styles/convective-outlook-styles";
import {
  createConvectiveFeatureKey,
  hasConvectiveFeatures,
} from "utils/convective-outlooks";

export const CategoricalFeatureBoundries = ({ features }) => {
  return hasConvectiveFeatures(features) ? (
    <g>
      {features.map((feature) => {
        const key = createConvectiveFeatureKey(feature);
        const color = CAT_OUTLOOK_STYLES[feature.properties.dn].color;

        return (
          <path
            key={key}
            d={rewindAlbersGeoPath(feature)}
            stroke={color}
            strokeWidth={3}
            fill={color}
            fillOpacity={0.15}
          />
        );
      })}
    </g>
  ) : null;
};

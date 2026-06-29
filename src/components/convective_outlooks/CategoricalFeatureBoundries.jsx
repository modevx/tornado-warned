import { rewindAlbersGeoPath } from "utils/geometry";
import { CAT_OUTLOOK_STYLES } from "styles/convective-outlook-styles";
import { convectiveFeatureKey, returnsValidConvectiveFeatures } from "utils/convective-outlooks";

export const CategoricalFeatureBoundries = ({ features }) => {
  return returnsValidConvectiveFeatures(features) ? (
    <g>
      {features.map((feature) => {
        const key = convectiveFeatureKey(feature);
        const color = CAT_OUTLOOK_STYLES[feature.properties.dn].color;

        return (
          <path
            key={key}
            d={rewindAlbersGeoPath(feature)}
            stroke={color}
            strokeWidth={2}
            fill={color}
            fillOpacity={0.3}
          />
        );
      })}
    </g>
  ) : null;
};

import { AlbersStateMap } from "components/AlbersStateMap";
import { CategoricalOutlookFeaturePath } from "features/spc-convective-outlooks/components/CategoricalOutlookFeaturePath";

import { AlbersSvgPathReverse } from "components/AlbersSvgPathReverse";
import { ConvectiveOutlookFeatures } from "./ConvectiveOutlookFeatures";

export const CategoricalOutlookMap = ({ features }) => {
  return (
    <AlbersStateMap>
      {features &&
        features.map((feature) => {
          const {
            id,
            properties: { idp_source },
          } = feature;

          return (
            <CategoricalOutlookFeaturePath
              key={`${idp_source}-${id}`}
              feature={feature}
            />
          );
        })}
    </AlbersStateMap>
  );
};

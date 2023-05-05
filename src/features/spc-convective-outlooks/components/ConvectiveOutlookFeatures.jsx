import { CATEGORY_STYLES } from "../constants";
import { AlbersSvgPathReverse } from "components/AlbersSvgPathReverse";

export const ConvectiveOutlookFeatures = ({ arrFeatures }) => {
  return (
    <g>
      {arrFeatures &&
        arrFeatures.map((feature, index) => {
          const {
            properties: { dn, valid, expire, idp_source },
          } = feature;

          const pathProps = {
            fill: CATEGORY_STYLES[dn]?.fill,
            stroke: CATEGORY_STYLES[dn]?.stroke,
            fillOpacity: 0.5,
            strokeWidth: 2,
          };

          return (
            <AlbersSvgPathReverse
              key={`${idp_source}-${dn}`}
              feature={feature}
              {...pathProps}
            />
          );
        })}
    </g>
  );
};

import { AlbersSvgPathReverse } from "components/AlbersSvgPathReverse";
import { POLYGON_STYLES } from "features/spc-convective-outlooks/constants";

export const CategoricalOutlookFeaturePath = ({ feature }) => {
  const { categorical: styles } = POLYGON_STYLES;

  const {
    properties: { dn },
  } = feature;

  return (
    <AlbersSvgPathReverse
      feature={feature}
      fill={styles[dn].color}
      stroke="black"
      opacity={0.5}
    />
  );
};

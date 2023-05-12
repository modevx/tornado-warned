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

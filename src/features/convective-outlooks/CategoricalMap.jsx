import { USStateMap, USMapLoading } from "components";
import { useCategoricalOutlookByLayerId } from "services/outlook-mapserver";
import { rewindPathGenerator } from "components/_constants/path-generators";
import { CATEGORICAL as styles } from "features/convective-outlooks/_constants/outlook-feature-styles";

export const CategoricalMap = ({ outlookDay }) => {
	const DAY_TO_LAYERS = {
		1: 1,
		2: 9,
		3: 17,
	};
	const { data: features } = useCategoricalOutlookByLayerId(
		DAY_TO_LAYERS[outlookDay]
	);

	return (
		<>
			<div className='w-full h-full'>
				<USStateMap>
					{features
						? features?.map((feature) => {
								const {
									id,
									properties: { dn: category, idp_source },
								} = feature;

								return (
									<path
										key={`${idp_source}-${id}`}
										d={rewindPathGenerator(feature)}
										fill={styles[category].bgColor}
										opacity={0.7}
										stroke={styles[category].stroke}
										strokeWidth={4}
									/>
								);
						  })
						: null}
				</USStateMap>
			</div>
		</>
	);
};

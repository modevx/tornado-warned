import rewind from "@turf/rewind";
import { geoAlbers, geoPath } from "d3-geo";

import { USMap } from "components";
import { CATEGORICAL_OUTLOOK_FEATURE_STYLES as styles } from "./constants/index.js";

export const CategoricalMap = ({ features }) => {
	const projection = geoAlbers();
	const albersGeoPath = geoPath(projection);

	return (
		<USMap>
			{features &&
				features.map((feature) => {
					const {
						id,
						properties: { dn: categoryKey, idp_source },
					} = feature;

					return (
						<path
							key={`${idp_source}-${id}`}
							d={albersGeoPath(rewind(feature, { reverse: true }))}
							fill={styles[categoryKey].color}
							opacity={0.7}
							stroke={styles[categoryKey].stroke}
							strokeWidth={4}
						/>
					);
				})}
		</USMap>
	);
};

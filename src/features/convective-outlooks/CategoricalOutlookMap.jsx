import rewind from "@turf/rewind";
import { geoAlbers, geoPath } from "d3-geo";

import { USMap } from "components/USMap";
import { CATEGORICAL_OUTLOOK_FEATURE_STYLES as styles } from "./constants";

export const CategoricalOutlookMap = ({ features }) => {
	const projection = geoAlbers();
	const albersGeoPath = geoPath(projection);

	return (
		<USMap>
			{features &&
				features.map((feature) => {
					const {
						id,
						properties: { dn, idp_source },
					} = feature;

					return (
						<path
							key={`${idp_source}-${id}`}
							d={albersGeoPath(rewind(feature, { reverse: true }))}
							fill={styles[dn].color}
							opacity={0.7}
							stroke={styles[dn].stroke}
							strokeWidth={4}
						/>
					);
				})}
		</USMap>
	);
};

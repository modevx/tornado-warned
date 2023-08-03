import rewind from "@turf/rewind";
import { geoAlbers, geoPath } from "d3-geo";

import { USMap } from "components";
import { useCategoricalOutlookGeoJsonQuery } from "services/outlook-mapserver";

const projection = geoAlbers();
const albersGeoPath = geoPath(projection);

export const CategoricalMap = ({ layerId, styles }) => {
	const DAY_LAYER_MAP = Object.freeze({
		1: 1,
		2: 9,
		3: 17,
	});
	const { data: features } = useCategoricalOutlookGeoJsonQuery(
		DAY_LAYER_MAP[layerId]
	);

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

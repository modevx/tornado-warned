import React from "react";
import rewind from "@turf/rewind";
import dayjs from "dayjs";
import dayJSlocFormat from "dayjs/plugin/localizedFormat";

import { albersGeoPath } from "utils";
import { CATEGORY_STYLES } from "../constants";
import { AlbersStateMap } from "components/AlbersStateMap";
import { useCategoricalOutlooksGeoJSON } from "services/arcgis-server-convective-outlooks/service";

dayjs.extend(dayJSlocFormat);

export const ConvectiveOutlookMap = () => {
	const { data: outlookGeoJSON, error: outlookGeoJSONError } =
		useCategoricalOutlooksGeoJSON();

	return (
		<AlbersStateMap>
			{/* <GeoJsonSVGPathGroup featureCollectionOBJ={featureCollection} /> */}
		</AlbersStateMap>
	);
};

const GeoJsonSVGPathGroup = ({ featureCollectionOBJ, setState }) => {
	return (
		<g>
			{featureCollectionOBJ.features.map((feature, index) => {
				const {
					properties: { dn, valid, expire, idp_source },
				} = feature;
				const fLabel = CATEGORY_STYLES[dn]?.label;

				return (
					<path
						d={albersGeoPath(rewind(feature, { reverse: true }))}
						key={`${idp_source}-${dn}`}
						fill={CATEGORY_STYLES[dn]?.fill}
						stroke={CATEGORY_STYLES[dn]?.stroke}
						fillOpacity={0.5}
						strokeWidth={1} // `${CATEGORY_STYLES[dn].label}`
					/>
				);
			})}
		</g>
	);
};

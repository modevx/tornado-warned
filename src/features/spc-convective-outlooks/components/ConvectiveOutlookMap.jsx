import React from "react";
import rewind from "@turf/rewind";
import dayjs from "dayjs";
import dayJSlocFormat from "dayjs/plugin/localizedFormat";

import { albersGeoPath } from "utils";
import { CATEGORY_STYLES } from "../constants";
import { AlbersStateMap } from "components/AlbersStateMap";
import { ConvectiveOutlookFeatures } from "./ConvectiveOutlookFeatures";
import {
	useLayerGeoJSONQuery,
	useLayerJSONQuery,
} from "services/arcgis-server-convective-outlooks/service";

dayjs.extend(dayJSlocFormat);

export const ConvectiveOutlookMap = () => {
	const { data, error } = useLayerGeoJSONQuery();
	// const { data } = useLayerJSONQuery(layerId);

	if (data) console.log(">> react-query data\n", data);

	return (
		<AlbersStateMap>
			{data && <ConvectiveOutlookFeatures arrFeatures={data} />}
		</AlbersStateMap>
	);
};

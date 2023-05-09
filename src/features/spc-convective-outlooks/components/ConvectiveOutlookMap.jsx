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
	useLegendLayersQuery,
} from "services/arcgis-server-convective-outlooks/service";

dayjs.extend(dayJSlocFormat);

export const ConvectiveOutlookMap = () => {
	let features = [];
	const { data: arrOutlooksGeoJSON, error: outlookGeoJSONError } =
		useLayerGeoJSONQuery();

	// TESTING EACH MAP SERVICE LAYER
	const [selectedLayer, setSelectedLayer] = React.useState();

	return (
		<AlbersStateMap>
			{arrOutlooksGeoJSON && (
				<ConvectiveOutlookFeatures
					arrFeatures={arrOutlooksGeoJSON[0].features}
				/>
			)}
		</AlbersStateMap>
	);
};

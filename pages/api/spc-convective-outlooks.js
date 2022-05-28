import { executeQuery } from "@arcgis/core/rest/query";
import { ENDPOINTS } from "services/SPC";

export default async function handler(req, res) {
	const query = {
		outFields: ["dn"],
		returnDistinctValues: true,
		returnGeometry: false,
	};

	// returns Promise<FeatureSet>
	const res = await executeQueryJSON(ENDPOINTS.oms_1_categorical, query);
	const values = res.features.map((feature) => feature.attributes["dn"]);

	res.status(200).json({ results: values });
}

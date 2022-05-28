import { executeQueryJSON } from "@arcgis/core/rest/query";
import { ENDPOINTS } from "services/SPC";

export default async function handler(req, res) {
	const query = {
		outFields: ["dn"],
		where: "1=1",
		returnDistinctValues: true,
		returnGeometry: false,
	};

	try {
		// returns Promise<FeatureSet>
		const results = await executeQueryJSON(ENDPOINTS.oms_1_categorical, query);
		const values = results.features.map((feature) => feature.attributes["dn"]);

		res.status(200).json({ results: values });
	} catch (error) {
		res.status(500).json({ error });
	}
}

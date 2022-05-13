import { executeQueryJSON } from "@arcgis/core/rest/query";

const PLANT_URL =
	"https://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/PowerPlants_WorldResourcesInstitute/FeatureServer/0";

export default async function handler(req, res) {
	const query = {
		outFields: ["fuel1"],
		where: "1=1",
		returnDistinctValues: true,
		returnGeometry: false,
	};

	const axiosResponse = await executeQueryJSON(PLANT_URL, query);

	const values = axiosResponse.features
		.map((feature) => feature.attributes["fuel1"])
		.filter(Boolean)
		.sort();
	res.status(200).json({ types: values });
}

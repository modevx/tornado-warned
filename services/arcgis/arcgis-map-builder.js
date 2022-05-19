import { watch, when } from "@arcgis/core/core/reactiveUtils";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Extent from "@arcgis/core/geometry/Extent";
import Expand from "@arcgis/core/widgets/Expand";
import config from "@arcgis/core/config";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GroupLayer from "@arcgis/core/layers/GroupLayer";
import LayerList from "@arcgis/core/widgets/LayerList"; // for filtering Layers
import UniqueValueRenderer from "@arcgis/core/renderers/UniqueValueRenderer";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import { MAP_SERVICE as SPC } from "services/spc";

config.apiKey = process.env.NEXT_PUBLIC_ARCGIS_KEY;

const app = {};
let layer = {};
let arcgisMap = {};
let mapView = {};

const BASE_URL =
	"https://mapservices.weather.noaa.gov/vector/rest/services/outlooks/SPC_wx_outlks/MapServer";
const TEST_URL =
	"https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer";
export const buildArcGISMap = async (container) => {
	if (app.mapView) {
		app.mapView.destroy();
	}

	const labelClass = {
		symbol: {
			type: "text",
			color: "white",
			haloColor: "blue",
			haloSize: 1,
			font: {
				family: "Ubuntu Mono",
				size: 14,
				weight: "bold",
			},
		},
		labelPlacement: "center-center",
		labelExpressionInfo: {
			expression: "$feature.objectid",
		},
	};

	// ArcGIS MapImageLayer - Toggle Sublayer visibility Sample
	layer = new MapImageLayer({
		url: `${TEST_URL}`,
		// sublayers: [
		// 	{
		// 		id: 0,
		// 		visible: true,
		// 	},
		// 	{
		// 		id: 1,
		// 		visible: true,
		// 	},
		// 	{
		// 		id: 2,
		// 		visible: true,
		// 	},
		// 	{
		// 		id: 3,
		// 		visible: true,
		// 	},
		// ],
	});

	// layer = new GroupLayer({
	// 	url: `${BASE_URL}`,
	// 	layerId: 0,
	// 	subLayers: [{ id: 1 }],
	// });

	layer.when(() => console.log("ARCGIS MAP LAYER >> ", layer.toJSON()));
	layer.when(() => console.log("ARCGIS MAP LAYER PROPERTIES >> ", layer.query));

	arcgisMap = new Map({
		basemap: "arcgis-dark-gray",
		layers: layer,
	});

	// arcgisMap.when(() => console.log("ARCGIS MAP >> ", arcgisMap.toJSON()));
	// console.log("ARCGIS MAP >> ", arcgisMap);

	mapView = new MapView({
		map: arcgisMap,
		center: [-98, 38],
		container,
	});

	// mapView.when(() => console.log("ARCGIS MAP VIEW >> ", layer.toJSON()));

	app.layer = layer;
	app.map = arcgisMap;
	app.mapView = mapView;

	return cleanup;
};

function cleanup() {
	app.mapView?.destroy();
}

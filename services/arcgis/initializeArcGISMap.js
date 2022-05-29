import esriConfig from "@arcgis/core/config";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import WFSLayer from "@arcgis/core/layers/WFSLayer";
import WMSLayer from "@arcgis/core/layers/WMSLayer";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import { watch, when } from "@arcgis/core/core/reactiveUtils";
import Extent from "@arcgis/core/geometry/Extent";
// --
import { ENDPOINTS } from "services/SPC";
import {
	disableViewNavigation,
	setDefaultUiComponents,
} from "services/ArcGIS/helpers";

esriConfig.apiKey = process.env.NEXT_PUBLIC_ARCGIS_KEY;

const app = {};

export const initializeArcGISMap = async (container, layerId) => {
	if (app.view) {
		app.view.destroy();
	}

	const stateLinesLayer = new FeatureLayer({
		url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/2",
		listMode: "hide",
		legendEnabled: false,
	});

	// const spcLayer = new MapImageLayer({
	// 	url: ENDPOINTS.spcms,
	// 	opacity: 0.3,
	// 	sublayers: [
	// 		{
	// 			id: layerId,
	// 			visible: true,
	// 		},
	// 	],
	// });

	const spcLayer = new FeatureLayer({
		url: `${ENDPOINTS.spcms}/${layerId}`,
	});

	const map = new Map({
		basemap: "arcgis-dark-gray",
		layers: [stateLinesLayer, spcLayer],
	});

	const view = new MapView({
		map,
		container,
	});

	view.when(() => {
		console.log("SPC LAYER >>\n", spcLayer.toJSON());
		disableViewNavigation(view);
		setDefaultUiComponents(["attribution"], app.view);
	});

	app.spcLayer = spcLayer;
	app.stateLinesLayer = stateLinesLayer;
	app.map = map;
	app.view = view;

	return cleanup;
};

function cleanup() {
	app.view?.destroy();
}

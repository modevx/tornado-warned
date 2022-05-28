import esriConfig from "@arcgis/core/config";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
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

export const initializeArcGISMap = async (container) => {
	if (!app.view) {
		return;
	} else {
		app.view.destroy();
	}
	const statesLayer = new FeatureLayer({
		url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/2",
		listMode: "hide",
		legendEnabled: false,
	});

	const map = new Map({
		basemap: "arcgis-dark-gray",
		layers: [statesLayer],
		// layers: [statesLayer, mapImageLayer],
	});

	const view = new MapView({
		map,
		container,
	});

	app.view.when(() => {
		disableViewNavigation(app.view);
		// setDefaultUiComponents(["attribution"], app.view);

		// view.goTo(Extent.fromJSON(mapImageLayer.sourceJSON?.initialExtent));
	});

	// app.layer = mapImageLayer;
	app.map = map;
	app.view = view;

	return { cleanup };
};

function cleanup() {
	app.view?.destroy();
}

import { watch, when } from "@arcgis/core/core/reactiveUtils";
import esriConfig from "@arcgis/core/config";
import esriRequest from "@arcgis/core/request";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

import Extent from "@arcgis/core/geometry/Extent";
import LayerList from "@arcgis/core/widgets/LayerList";
import Legend from "@arcgis/core/widgets/Legend";
// --
import { ENDPOINTS } from "services/SPC";
import {
	disableViewNavigation,
	setDefaultUiComponents,
} from "services/ArcGIS/helpers";

esriConfig.apiKey = process.env.NEXT_PUBLIC_ARCGIS_KEY;

const app = {};
let whenHandle, watchHandle;
let layer = 1;

export const initializeMapView = async (container) => {
	if (app.view) {
		app.view.destroy();
	}

	const statesLayer = new FeatureLayer({
		url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/2",
		listMode: "hide",
		legendEnabled: false,
	});
	const mapImageLayer = new MapImageLayer({
		url: ENDPOINTS.oms,
		opacity: 0.4,
	});

	const map = new Map({
		basemap: "arcgis-dark-gray",
		layers: [statesLayer, mapImageLayer],
	});

	const view = new MapView({
		map,
		container,
		ui: { components: [] },
	});

	app.map = map;
	app.view = view;

	whenHandle = app.view.when().then(async () => {
		disableViewNavigation(app.view);
		setDefaultUiComponents(["attribution"], app.view);

		await view.goTo(Extent.fromJSON(mapImageLayer.sourceJSON?.initialExtent));
	});

	return { view, cleanup };
};

function cleanup() {
	app.view?.destroy();
	whenHandle?.remove();
}

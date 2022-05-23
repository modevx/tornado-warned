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
import { MAP_SERVICE_URLS } from "services/spc";
import {
	disableViewNavigation,
	setDefaultUiComponents,
} from "services/arcgis/utils";

esriConfig.apiKey = process.env.NEXT_PUBLIC_ARCGIS_KEY;

const app = {};
let whenHandle;

export const initializeOutlookMapView = async (container, outlookLayerId) => {
	if (app.mapView) {
		app.mapView.destroy();
	}

	const statesLayer = new FeatureLayer({
		url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/2",
		listMode: "hide",
		legendEnabled: false,
	});

	const spcJson = esriRequest(MAP_SERVICE_URLS.base_url);

	const mapImageLayer = new MapImageLayer({
		url: MAP_SERVICE_URLS.base_url,
		opacity: 0.4,
		sublayers: [{ id: outlookLayerId }],
	});

	const map = new Map({
		basemap: "arcgis-dark-gray",
		layers: [statesLayer, mapImageLayer],
	});

	const view = new MapView({
		map,
		container,
		ui: { components: [] },
		// extent: {
		// 	xmin: -109.03,
		// 	ymin: 19.75,
		// 	xmax: -79,
		// 	ymax: 62,
		// 	spatialReference: 4269,
		// },
	});

	app.map = map;
	app.view = view;

	whenHandle = app.view.when().then(async () => {
		disableViewNavigation(app.view);
		setDefaultUiComponents(["attribution"], app.view);

		// await view.goTo(Extent.fromJSON(mapImageLayer.sourceJSON?.initialExtent));
	});

	return cleanup;
};

function cleanup() {
	app.view?.destroy();
	whenHandle?.remove();
}

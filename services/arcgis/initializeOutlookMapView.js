import { watch, when } from "@arcgis/core/core/reactiveUtils";
import config from "@arcgis/core/config";
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

config.apiKey = process.env.NEXT_PUBLIC_ARCGIS_KEY;

const app = {};
let whenHandle;

export const initializeOutlookMapView = async (container) => {
	if (app.mapView) {
		app.mapView.destroy();
	}

	const statesLayer = new FeatureLayer({
		url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/2",
		listMode: "hide",
		legendEnabled: false,
	});

	const mapImageLayer = new MapImageLayer({
		url: MAP_SERVICE_URLS.base_url,
		opacity: 0.4,
	});

	const map = new Map({
		basemap: "arcgis-dark-gray",
		layers: [statesLayer, mapImageLayer],
	});

	const view = new MapView({
		map,
		container,
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

	whenHandle = mapImageLayer.when().then(async () => {
		disableViewNavigation(app.view);
		setDefaultUiComponents(["attribution"], app.view);

		await view.goTo(Extent.fromJSON(mapImageLayer.sourceJSON?.initialExtent));

		const selectOutlookBtns = document.getElementById("select-outlook-btns");

		// selectOutlookBtns.addEventListener("change", (e) => {
		// 	const id = e.target.value;

		// 	if (id) {
		// 		const sublayer = mapImageLayer.findSublayerById(parseInt(id));

		// 		sublayer.visible = !sublayer.visible;

		// 		console.log("layer", sublayer);

		// const node = document.querySelector(
		// 	".sublayers-item[data-id='" + id + "']"
		// );
		// node.classList.toggle("visible-layer");
		// }
		// });
	});

	return cleanup;
};

function cleanup() {
	app.view?.destroy();
	// whenHandle?.remove();
}

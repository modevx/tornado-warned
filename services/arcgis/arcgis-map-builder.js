import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { watch } from "@arcgis/core/core/reactiveUtils";
import LayerList from "@arcgis/core/widgets/LayerList";
import Extent from "@arcgis/core/geometry/Extent";
import Expand from "@arcgis/core/widgets/Expand";
import MapView from "@arcgis/core/views/MapView";
import ArcGISMap from "@arcgis/core/Map";
import config from "@arcgis/core/config";
import GroupLayer from "@arcgis/core/layers/GroupLayer";

import { MAP_SERVICE as SPC } from "services/spc";

config.apiKey = process.env.NEXT_PUBLIC_ARCGIS_KEY;

// holds map values
const app = {};
// saves map Extent (x,y coords) anytime the map moves
let mapExtentHandler;

export const buildArcGISMap = async (container) => {
	if (app.mapView) {
		app.mapView.destroy();
	}

	const featureLayer = new FeatureLayer({
		url: "https://mapservices.weather.noaa.gov/vector/rest/services/outlooks/SPC_wx_outlks/MapServer",
		// layerId: 1
	});

	const arcgisMap = new ArcGISMap({
		basemap: "arcgis-dark-gray",
		layers: featureLayer,
	});

	const mapView = new MapView({
		map: arcgisMap,
		container,
	});

	// sets the visible part of the map equal to the app coords (no animation)
	// * for animated transition: use .goTo()
	if (app.savedExtent) {
		mapView.extent = Extent.fromJSON(app.savedExtent);
	} else {
		// if [app] doesn't have a saved Extent, set mapView to worldwide extent once the FeatureLayer loads
		featureLayer.when(() => {
			mapView.extent = featureLayer.fullExtent;
		});
	}

	// save map coords [Extent] ANYTIME the map moves/changes
	mapExtentHandler = watch(
		() => mapView.stationary && mapView.extent,
		() => {
			app.savedExtent = mapView.extent.toJSON();
		}
	);

	// when [mapView] loads, add ArcGIS widgets to DOM
	mapView.when(async () => {
		// wait for [FeatureLayer] load
		await featureLayer.when();

		const element = document.createElement("div");
		element.classList.add(
			"esri-component",
			"esri-widget",
			"esri-widget--panel",
			"item-description"
		);
		element.innerHTML = featureLayer.portalItem.description;

		const layerList = new LayerList({
			view: mapView,
		});

		mapView.ui.add(layerList, "top-right");
	});

	app.map = arcgisMap;
	app.featureLayer = featureLayer;
	app.mapView = mapView;

	return cleanup;
};

function cleanup() {
	mapExtentHandler?.remove();
	app.mapView?.destroy();
}

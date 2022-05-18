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

const app = {};
let handler;

export const buildMap = async (container, outlookLayers) => {
	if (app.mapView) {
		app.mapView.destroy();
	}

	const layers = Object.values(SPC.day1.sub_layers).map(
		(url) => new FeatureLayer({ url })
	);

	// const groupLayer = new GroupLayer({ layers: [...outlookLayers] });

	// const featureLayer = new FeatureLayer({
	// 	url: mapServiceUrl,
	// });

	console.log("map-builder/outlookLayers", layers);

	const map = new ArcGISMap({
		basemap: "arcgis-dark-gray",
		layers: layers,
	});

	const mapView = new MapView({
		map,
		container,
	});

	// if (app.savedExtent) {
	// 	mapView.extent = Extent.fromJSON(app.savedExtent);
	// } else {
	// 	groupLayer.when(() => {
	// 		mapView.extent = groupLayer.fullExtent;
	// 	});
	// }

	handler = watch(
		() => mapView.stationary && mapView.extent,
		() => {
			app.savedExtent = mapView.extent.toJSON();
		}
	);
	// [reactiveUtils];
	mapView.when(async () => {
		// await groupLayer.when(); // returns "truthy" when [featureLayer] exists
		const layerList = new LayerList({
			view: mapView,
		});
		mapView.ui.add(layerList, "top-right");
	});

	app.map = map;
	// app.featureLayer = featureLayer;
	app.mapView = mapView;

	return cleanup;
};

function cleanup() {
	handler?.remove();
	app.mapView?.destroy();
}

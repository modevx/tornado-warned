import { watch, when } from "@arcgis/core/core/reactiveUtils";
import config from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GroupLayer from "@arcgis/core/layers/GroupLayer";
import LayerList from "@arcgis/core/widgets/LayerList";
import { MAP_SERVICE as SPC } from "services/spc";

config.apiKey = process.env.NEXT_PUBLIC_ARCGIS_KEY;

const app = {};
const labelClass = {};

export const buildArcGISMap = async (container) => {
	if (app.mapView) {
		app.mapView.destroy();
	}

	const layers = Object.values(SPC.day1.sub_layers).map(
		(url) =>
			new FeatureLayer({
				url,
				opacity: 0.2,
				labelingInfo: [labelClass],
			})
	);

	const layer = new GroupLayer({});

	layer.addMany(layers);

	const map = new Map({
		basemap: "arcgis-dark-gray",
		layers: [layer],
	});

	const view = new MapView({
		map: map,
		container,
		ui: {
			components: ["attribution"],
		},
		extent: {
			xmin: -128,
			ymin: 18,
			xmax: -60,
			ymax: 64,
			spatialReference: 4269,
		},
	});

	app.layer = layer;
	app.map = map;
	app.view = view;

	app.view.when(() => {
		const layerList = new LayerList({
			view,
		});

		view.ui.add(layerList, "top-left");
	});

	return cleanup;
};

function cleanup() {
	app.mapView?.destroy();
}

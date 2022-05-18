import { watch, when } from "@arcgis/core/core/reactiveUtils";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Extent from "@arcgis/core/geometry/Extent";
import Expand from "@arcgis/core/widgets/Expand";
import config from "@arcgis/core/config";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import LayerList from "@arcgis/core/widgets/LayerList"; // for filtering Layers
import UniqueValueRenderer from "@arcgis/core/renderers/UniqueValueRenderer";
import { MAP_SERVICE as SPC } from "services/spc";

config.apiKey = process.env.NEXT_PUBLIC_ARCGIS_KEY;

// holds map values
const app = {};
// saves map Extent (x,y coords) anytime the map moves
let mapExtentHandler;
// SPC MapService base url
const BASE_URL =
	"https://mapservices.weather.noaa.gov/vector/rest/services/outlooks/SPC_wx_outlks/MapServer";

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

	const featureLayer = new FeatureLayer({
		url: `${BASE_URL}`,
		layerId: 1,
		labelingInfo: [labelClass],
	});

	const arcgisMap = new Map({
		basemap: "arcgis-dark-gray",
		layers: featureLayer,
	});

	const mapView = new MapView({
		map: arcgisMap,
		center: [-98, 38],
		container,
		zoom: 3,
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

	app.map = arcgisMap;
	app.featureLayer = featureLayer;
	app.mapView = mapView;

	return cleanup;
};

function cleanup() {
	mapExtentHandler?.remove();
	app.mapView?.destroy();
}

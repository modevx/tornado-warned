import React from "react";

import { SPC_MAP_SERVICE as SPC } from "services/constants/endpoints";

import { TabSelector } from "./TabSelector";

import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GroupLayer from "@arcgis/core/layers/GroupLayer";

const ArcGISMap = () => {
	const mapRef = React.useRef(null);

	const day3cat = SPC.base_url.concat(SPC.day3.categorical);
	const day3prob = SPC.base_url.concat(SPC.day3.probabilistic);
	const day3sig = SPC.base_url.concat(SPC.day3.significant_severe);

	React.useEffect(() => {
		if (mapRef.current) {
			const createMap = async () => {
				// -- CREATE [GROUP_LAYER]
				// --------------------------
				// const day3GroupLayer = createGroupLayer(Object.values(SPC.day3));
				// create FeatureLayer[] from SPC MapService urls
				const day3FeatureLayerARR = await Object.values(SPC.day3).map(
					(layerUrl) => new FeatureLayer({ url: layerUrl, opacity: 0.4 })
				);

				// create ArcGIS GroupLayer
				// const day3GroupLayer = new GroupLayer({
				// 	opacity: 0.3,
				// });

				// add Feature Layers to GroupLayer
				// day3FeatureLayerARR.forEach((layer) => day3GroupLayer.add(layer));

				// -- CREATE [MAP]
				// --------------------------
				// const map = createMap(process.env.NEXT_PUBLIC_ARCGIS_KEY, day3GroupLayer);
				// set API key to access [Basemap layer service]
				esriConfig.apiKey = process.env.NEXT_PUBLIC_ARCGIS_KEY;
				// create ArcGIS Map
				const map = new Map({ basemap: "arcgis-navigation-night" });
				// add GroupLayer to Map
				// map.add(day3GroupLayer);

				// -- *test
				day3FeatureLayerARR.forEach((layer) => map.add(layer));

				// -- CREATE [MAPVIEW]
				// --------------------------
				// const mapView = createMapView(map, mapRef);
				// create MapView & place it in ref'd Map
				const mapView = new MapView({
					map: map,
					container: mapRef.current,
					center: [-97.29, 37.7],
					zoom: 3,
				});
			};
		}

		createMap();
	});

	return (
		<div className='h-96 bg-red-500'>
			<h1>ArcGIS API for JavaScript Map</h1>
			{/* <TabSelector /> */}
			<div ref={mapRef} className='w-full h-96 bg-stone-400'></div>
		</div>
	);
};

export default ArcGISMap;

// function createGroupLayer(mapServiceLayerUrlARR) {
// 	const featureLayerARR = mapServiceLayerUrlARR.map(
// 		(layerUrl) => new FeatureLayer({ url: layerUrl })
// 	);
// 	const groupLayer = new GroupLayer({ opacity: 0.3 });

// 	featureLayerARR.forEach((featureLayer) => groupLayer.add(featureLayer));

// 	return groupLayer;
// }
// function createMap(apiKey, groupLayer) {
// 	esriConfig.apiKey = process.env.NEXT_PUBLIC_ARCGIS_KEY;
// 	const map = new Map({ basemap: "arcgis-navigation-night" });
// 	map.add(groupLayer);
// }
// function createMapView(map, mapContainerDivREF) {
// 	const mapView = new MapView({
// 		map,
// 		container: mapContainerDivREF.current,
// 		center: [-97.29, 37.7],
// 		zoom: 3,
// 	});

// 	return mapView;
// }

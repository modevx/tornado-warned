import React from "react";

import { MAP_SERVICE as SPC } from "services/storm-prediction-center/";

import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import GroupLayer from "@arcgis/core/layers/GroupLayer";

const ConvectiveOutlookMap = () => {
	const mapRef = React.useRef(null);
	let catLayer;

	const testLayerFiltering = async () => {
		const res = await fetch(
			"https://mapservices.weather.noaa.gov/vector/rest/services/outlooks/SPC_wx_outlks/MapServer/layers?f=json"
		);
		const { layers } = await res.json();

		// console.log("ALL LAYERS >>: ", layers);

		const day_1_layers = await layers.filter(
			(layer) => layer.name.includes("Day 1") && layer.type === "Feature Layer"
		);
		return day_1_layers;
		// console.log("LAYERS >>: ", await day_1_layers);
	};

	async function loadPreBuiltMap(container, outlookLayers) {
		const { buildMap } = await import("services/arcgis/map-builder");
		return buildMap(container, outlookLayers);
	}

	React.useEffect(() => {
		let asyncCleanup;

		const layers = async () => {
			const outlookLayers = await testLayerFiltering();

			if (mapRef.current && outlookLayers) {
				asyncCleanup = loadPreBuiltMap(mapRef.current, outlookLayers);
			}
		};

		layers();

		return () => {
			asyncCleanup && asyncCleanup.then((cleanup) => cleanup());
		};
	}, [mapRef]);

	// React.useEffect(() => {
	// 	if (mapRef.current) {
	// 		catLayer = new FeatureLayer({
	// 			url: SPC.day1.sub_layers.categorical,
	// 			id: "catLayer",
	// 			opacity: 0.4,
	// 		});

	// 		esriConfig.apiKey = process.env.NEXT_PUBLIC_ARCGIS_KEY;
	// 		const map = new Map({
	// 			basemap: "arcgis-navigation-night",
	// 			layers: [catLayer],
	// 		});

	// 		const mapView = new MapView({
	// 			map: map,
	// 			container: mapRef.current,
	// 			center: [-97.29, 37.7],
	// 			zoom: 3,
	// 			spatialReferenceLocked: true,
	// 		});
	// 	}
	// });

	return (
		<div className='h-96'>
			<div ref={mapRef} className='w-full h-96 bg-stone-400'></div>
		</div>
	);
};

export default ConvectiveOutlookMap;

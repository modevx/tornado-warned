import React from "react";

import { MAP_SERVICE as SPC } from "services/spc";

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
		const { buildMap } = await import("services/arcgis-map-builder");
		return buildMap(container, outlookLayers);
	}

	React.useEffect(() => {
		let asyncCleanup;

		const layers = async () => {
			const outlookLayers = await testLayerFiltering();

			// if (mapRef.current && outlookLayers) {
			// 	asyncCleanup = loadPreBuiltMap(mapRef.current, outlookLayers);
			// }
		};

		layers();

		return () => {
			asyncCleanup && asyncCleanup.then((cleanup) => cleanup());
		};
	}, [mapRef]);

	return (
		<div className='h-96'>
			<div ref={mapRef} className='w-full h-96 bg-stone-400'></div>
		</div>
	);
};

export default ConvectiveOutlookMap;

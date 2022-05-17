import React from "react";

import { MAP_SERVICE as SPC } from "services/storm-prediction-center/";

import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import GroupLayer from "@arcgis/core/layers/GroupLayer";

// TODO:
// [ ] use Esri Leaflet plugin (lighter/use on smaller apps)
// [ ] display outlook map for each day
// [ ] fix zoom level
// [ ] make layers transparent
// [ ] map labels

const SpcConvectiveOutlookMap = () => {
	const mapRef = React.useRef(null);
	let catLayer;

	React.useEffect(() => {
		if (mapRef.current) {
			catLayer = new FeatureLayer({
				url: SPC.day1.sub_layers.categorical,
				id: "catLayer",
				opacity: 0.4,
			});

			esriConfig.apiKey = process.env.NEXT_PUBLIC_ARCGIS_KEY;
			const map = new Map({
				basemap: "arcgis-navigation-night",
				layers: [catLayer],
			});

			const mapView = new MapView({
				map: map,
				container: mapRef.current,
				center: [-97.29, 37.7],
				zoom: 3,
			});
		}
	});

	return (
		<div className='h-96'>
			<div ref={mapRef} className='w-full h-96 bg-stone-400'></div>
		</div>
	);
};

export default SpcConvectiveOutlookMap;

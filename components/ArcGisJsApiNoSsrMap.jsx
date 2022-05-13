import React from "react";

import { SPC_MAP_SERVICE as SPC } from "services/constants/endpoints";

import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GroupLayer from "@arcgis/core/layers/GroupLayer";
import MyApp from "pages/_app";

const ArcGISMap = () => {
	const mapRef = React.useRef(null);

	const day3cat = SPC.base_url.concat(SPC.day3.categorical);
	const day3prob = SPC.base_url.concat(SPC.day3.probabilistic);
	const day3sig = SPC.base_url.concat(SPC.day3.significant_severe);

	React.useEffect(() => {
		if (mapRef.current) {
			esriConfig.apiKey = process.env.NEXT_PUBLIC_ARCGIS_KEY;

			const catLayer = new FeatureLayer({ url: day3cat });
			const probLayer = new FeatureLayer({ url: day3prob });
			const sigLayer = new FeatureLayer({ url: day3sig });

			const day3group = new GroupLayer({
				visibilityMode: "inherited",
				opacity: 0.5,
			});

			const map = new Map({ basemap: "arcgis-navigation-night" });

			day3group.add(catLayer);
			day3group.add(probLayer);
			day3group.add(sigLayer);

			map.add(day3group);

			const mapView = new MapView({
				map: map,
				container: mapRef.current,
				center: [-97.41, 35.37],
				zoom: 3,
			});
		}
	});

	return (
		<div className='h-96 bg-red-500'>
			<h1>ArcGIS API for JavaScript Map</h1>
			<div ref={mapRef} className='w-full h-96 bg-stone-400'></div>
		</div>
	);
};

export default ArcGISMap;

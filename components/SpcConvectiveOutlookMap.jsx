import React from "react";

import { MAP_SERVICE } from "services/storm-prediction-center/";

import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GroupLayer from "@arcgis/core/layers/GroupLayer";

const SpcConvectiveOutlookMap = ({ day_layers }) => {
	const mapRef = React.useRef(null);

	const createFeatureLayerARR = (opacity, subLayersUrlOBJ) => {
		const subLayersUrlArr = Object.values(subLayersUrlOBJ);
		const featureLayerArr = subLayersUrlArr.map(
			(url) => new FeatureLayer({ url, opacity })
		);

		return featureLayerArr;
	};

	React.useEffect(() => {
		if (mapRef.current) {
			// ** create FeatureLayer array
			const featureLayerARR = createFeatureLayerARR(day_layers);

			// ** create GroupLayer
			const groupLayer = new GroupLayer({ layers: featureLayerARR });

			// ** create new Map
			esriConfig.apiKey = process.env.NEXT_PUBLIC_ARCGIS_KEY;
			const map = new Map({
				basemap: "arcgis-navigation-night",
			});

			map.add(groupLayer);

			// ** instantiate Map-rendering MapView
			const mapView = new MapView({
				map: map,
				container: mapRef.current,
				center: [-97.29, 37.7],
				zoom: 3,
			});
		}
	});

	return (
		<div className='h-96 bg-red-500'>
			<h1>ArcGIS API for JavaScript Map</h1>
			{/* <TabSelector /> */}
			<div ref={mapRef} className='w-full h-96 bg-stone-400'></div>
		</div>
	);
};

export default SpcConvectiveOutlookMap;

// TODO:
// [ ] display all 8 days of outlooks
// [ ] disable zooming
// [ ] access FeatureLayer data for labeling
// [ ] add day selector
// [ ] add FeatureLayer filtering
// [ ] prevent uneccessary re-renders

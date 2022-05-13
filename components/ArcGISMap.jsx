import React from "react";
import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
// import "styles/arcgis-styles.module.css";
// console.log("ARGIS_KEY", process.env.local.NEXT_PUBLIC_ARCGIS_KEY);

const ArcGISMap = () => {
	const mapRef = React.useRef(null);

	React.useEffect(() => {
		if (mapRef.current) {
			esriConfig.apiKey = process.env.NEXT_PUBLIC_ARCGIS_KEY;

			console.log("esriConfig.apiKey", esriConfig.apiKey);

			const map = new Map({ basemap: "arcgis-topographic" });

			const mapView = new MapView({
				map: map,
				container: mapRef.current,
				center: [-97.41, 35.37],
				zoom: 4,
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

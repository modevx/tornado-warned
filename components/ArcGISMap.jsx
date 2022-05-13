import React from "react";
import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import "styles/arcgis-styles.module.css";
// console.log("ARGIS_KEY", process.env.local.NEXT_PUBLIC_ARCGIS_KEY);

const ArcGISMap = () => {
	return (
		<div className='h-96 bg-red-500'>
			<h1>ArcGIS API for JavaScript Map</h1>
			<div id='viewDiv' className='w-full h-full bg-stone-400'></div>
		</div>
	);
};

export default ArcGISMap;

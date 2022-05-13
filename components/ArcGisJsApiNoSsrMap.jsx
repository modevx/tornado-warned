import React from "react";

import { SPC_MAP_SERVICE as SPC } from "services/constants/endpoints";

import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GroupLayer from "@arcgis/core/layers/GroupLayer";

const ArcGISMap = () => {
	const mapRef = React.useRef(null);

	const day1convective = SPC.base_url.concat(SPC.day1.convective);
	const day2convective = SPC.base_url.concat(SPC.day2.convective);
	const day3convective = SPC.base_url.concat(SPC.day3.convective);
	const days4_8_convective = SPC.base_url.concat(SPC.days_4_8.convective);
	const day4_probabilistic = SPC.base_url.concat(
		SPC.days_4_8.day4_probabilistic
	);
	const day5_probabilistic = SPC.base_url.concat(
		SPC.days_4_8.day5_probabilistic
	);
	const day6_probabilistic = SPC.base_url.concat(
		SPC.days_4_8.day6_probabilistic
	);
	const day7_probabilistic = SPC.base_url.concat(
		SPC.days_4_8.day7_probabilistic
	);
	const day8_probabilistic = SPC.base_url.concat(
		SPC.days_4_8.day8_probabilistic
	);

	console.log("URL TEST >> ", day1convective);

	React.useEffect(() => {
		if (mapRef.current) {
			esriConfig.apiKey = process.env.NEXT_PUBLIC_ARCGIS_KEY;

			const map = new Map({ basemap: "arcgis-imagery-standard" });

			const day1group = new GroupLayer({ url: day1convective });
			const day2group = new GroupLayer({ url: day2convective });
			const day3group = new GroupLayer({ url: day3convective });
			const days4_8_group = new GroupLayer({ url: days4_8_convective });

			console.log("GROUP LAYER >> ", day1group);

			map.add(day1group);

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

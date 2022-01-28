import { useState, memo } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { getGeoJsonCoordsForMonth } from '../services/severeWeatherDataInventory/getGeoJsonCoordsForMonth';

let markerGmap;

const googleMapStyles = {
	height: '40vh',
	width: '80vw',
	maxWidth: '450px',
	margin: '2rem',
};
const mapOptions = {
	// Norman, OK
	center: {
		lat: 35.18259309527143,
		lng: -97.43037492308522,
	},
	zoom: 4,
};
const _LOADER = new Loader({
	apiKey: process.env.REACT_APP_GMAP_KEY,
	version: 'weekly',
	// ** heatmap access
	libraries: ['visualization'],
});
const createGmapMarkers = async () => {
	const geoJsonCoords = await getGeoJsonCoordsForMonth();

	geoJsonCoords.forEach((tvs) => {
		const latLng = new window.google.maps.LatLng(tvs[1], tvs[0]);

		new window.google.maps.Marker({
			position: latLng,
			map: markerGmap,
		});
	});

	// console.log("geoJsonCoords", geoJsonCoords);
};
_LOADER.load().then((google) => {
	createGmapMarkers();
	// SHARE: gets attached to [window] - docs don't make this clear
	markerGmap = new google.maps.Map(
		document.getElementById('markerMap_el'),
		mapOptions
	);
});
//
export const GoogleMarkermap = memo(() => {
	console.log('**RENDER: marker map');
	const [tvsCoords, setTvsCoords] = useState([]);

	return <div id='markerMap_el' style={googleMapStyles}></div>;
});

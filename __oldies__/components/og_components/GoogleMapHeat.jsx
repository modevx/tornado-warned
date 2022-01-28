// #region -- IMPORTS
import { memo } from 'react';
import { createGoogleMapsLoader } from '../services/google_maps_js_api/createGoogleMapsLoader';
import { createLatLngFromGeoJson } from '../services/google_maps_js_api/createLatLngFromGeoJson';
import { createGoogleMap } from '../services/google_maps_js_api/createGoogleMap';
import { createHeatmapLayer } from '../services/google_maps_js_api/createHeatmapLayer';
import { initHeatmap } from '../services/google_maps_js_api/initHeatmap';
import { NORMAN_OK } from '../site_data/google_map_options';
// #endregion

export const GoogleMapHeat = memo(async (coords) => {
	const googleMapStyles = {
		height: '40vh',
		width: '80vw',
		maxWidth: '450px',
		maxHeight: '450px',
		margin: '2rem',
	};
	const gMapKey = process.env.REACT_APP_GMAP_KEY;
	const GOOGLE_MAP_JS_API = createGoogleMapsLoader(gMapKey, 'weekly', [
		'visualization',
	]);
	const google = await GOOGLE_MAP_JS_API.load();

	// SHARE: HAVE to use LatLng() with HEATMAPS - no coords literals
	const heatmapCoords = createLatLngFromGeoJson(google, coords);

	const heatmap = createGoogleMap(google, 'heatmap_el', NORMAN_OK);

	const heatmapLayer = createHeatmapLayer(google, heatmapCoords, 20);

	initHeatmap(heatmapLayer, heatmap);

	return <div id='heatMap_el' style={googleMapStyles}></div>;
});

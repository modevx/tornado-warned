// #region -- GOOGLE HEATMAP

// const _LOADER = new Loader({
// 	apiKey: process.env.REACT_APP_GMAP_KEY,
// 	version: 'weekly',
// 	libraries: ['visualization'],
// });

// const createGmapLatLngArr = async (winGoogle) => {
// 	const geoJsonCoords = await getTornadoesFromSWDI({
// 		rangeStart,
// 		rangeEnd,
// 	});
// 	let heatmapLayer_data;

// 	heatmapLayer_data = await geoJsonCoords.map((tvs) => {
//
// 		return new winGoogle.maps.LatLng(tvs[1], tvs[0]);
// 	});

// 	console.log('geoJsonCoords:', geoJsonCoords);
// 	console.log('heatmap_data:', heatmapLayer_data);
// 	return heatmapLayer_data;
// };

// _LOADER.load().then(async (google) => {
// 	const heatmapCoords = await createGmapLatLngArr(google);

// 	// create Heatmap DOM element & id elelement to append to
// 	heatmapGmap = new google.maps.Map(
// 		document.getElementById('heatMap_el'),
// 		mapOptions
// 	);

// 	// create Heatmap layer
// 	heatmapLayer = new google.maps.visualization.HeatmapLayer({
// 		// data: _HEATMAP_TEST_DATA,
// 		data: heatmapCoords,
// 		radius: 20,
// 		// dissipating: false,
// 	});

// 	if (heatmapCoords !== undefined) heatmapLayer.setMap(await heatmapGmap);
// });

// #endregion

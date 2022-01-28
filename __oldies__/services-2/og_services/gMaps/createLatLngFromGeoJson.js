export const createLatLngFromGeoJson = (google, geoJsonArr) => {
	console.log('LatLng geoJson', geoJsonArr);
	let latLngArr;
	try {
		latLngArr = geoJsonArr.map((coords) => {
			return new google.maps.LatLng(coords[1], coords[0]);
		});

		return latLngArr;
	} catch (error) {
		throw new Error('cannot create Google Maps LatLng array.');
	}
};

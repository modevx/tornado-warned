export const createGoogleMap = (google, elementId, options) => {
	return new google.maps.Map(document.getElementById(elementId), options);
};

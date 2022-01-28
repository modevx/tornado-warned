export const createHeatmapLayer = (google, coordsArr, radius) => {
	return new google.maps.visualization.HeatmapLayer({
		data: coordsArr,
		radius,
	});
};
/**
 * TODO: add interactive user controls for other heatmap props:
 * - dissipating
 * - gradient
 * - maxIntensity
 * - opacity
 */

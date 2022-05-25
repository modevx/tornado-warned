import React from "react";

// -- [REFERENCE]
// const MapView = ({ mapProps, viewProps }) => {
// 	const mapViewRef = React.useRef(null);

// 	React.useEffect(() => {
// 		const mapView = createMapView(
// 			mapViewRef.current,
// 			...mapProps,
// 			...viewProps
// 		);
// 		return () => {
// 			mapView && mapView.destroy();
// 		};
// 	}, []);

// 	return <div ref={mapViewRef} />;
// };

export const OutlookMapView = ({ layerIds: { prev_layer, new_layer } }) => {
	const ref_mapView = React.useRef(null);
	let mapView = {};

	async function createMapView(container) {
		const { initializeMapView } = await import("services/ArcGIS");
		return initializeMapView(container);
	}

	// create MapView (run ONCE until its unmounted)
	React.useEffect(() => {
		if (ref_mapView.current) {
			mapView = createMapView(ref_mapView.current);
		}

		return () => {
			mapView && mapView.then(({ cleanup }) => cleanup());
		};
	}, [ref_mapView]);

	// update MapView
	React.useEffect(() => {
		if (mapView) {
			mapView.then((res) => console.log("mapView", res));
		}
	}, [new_layer]);

	return (
		<div className='h-96 relative'>
			<div
				id='arcgis-map'
				ref={ref_mapView}
				className='w-screen h-[50vh] bg-stone-400 '
			></div>
		</div>
	);
};

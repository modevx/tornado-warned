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

export const OutlookMapView = () => {
	const ref_outlookDayBtns = React.useRef(null);
	const ref_mapView = React.useRef(null);

	const handleOutlookDaySelect = (e) => {
		console.log("COMPONENT >>\n", e.target.value);
	};

	async function createMapView(container) {
		const { initializeMapView } = await import("services/arcgis");
		return initializeMapView(container);
	}

	// run when user clicks an outlook select btn
	// (or initial page load with day 1 outlook map)
	React.useEffect(() => {
		let mapView;

		if (ref_mapView.current) {
			mapView = createMapView(ref_mapView.current);
		}

		return () => {
			mapView && mapView.then((cleanup) => cleanup());
		};
	}, [ref_mapView]);

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

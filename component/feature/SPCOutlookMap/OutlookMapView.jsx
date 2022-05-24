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

export const OutlookMapView = ({ outlookLayerId }) => {
	const ref_outlookDayBtns = React.useRef(null);
	const ref_mapView = React.useRef(null);

	const handleOutlookDaySelect = (e) => {
		console.log("COMPONENT >>\n", e.target.value);
	};

	async function createMapView(container) {
		const { initializeOutlookMapView } = await import("services/ArcGIS");
		return initializeOutlookMapView(container, outlookLayerId);
	}

	// create MapView
	React.useEffect(() => {
		let mapView;

		if (ref_mapView.current) {
			mapView = createMapView(ref_mapView.current);
		}

		return () => {
			mapView && mapView.then((cleanup) => cleanup());
		};
	}, [ref_mapView]);

	// update Map in MapView
	// React.useEffect(() => {}, [layer]);

	return (
		<div className='h-96 relative'>
			{/* <div
				id='arcgis-map'
				ref={ref_mapView}
				className='w-screen h-[50vh] bg-stone-400 '
			></div> */}
			<div className='text-4xl font-bold uppercase'>{`Layer ID: ${outlookLayerId}`}</div>
		</div>
	);
};
